import React, { useEffect, useState, useRef } from "react";
import { request, gql } from "graphql-request";

const token = process.env.REACT_APP_GITHUB_TOKEN;

const query = gql`
  query {
    viewer {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
            }
          }
        }
      }
    }
  }
`;

const GithubContributions = () => {
  const [weeks, setWeeks] = useState([]);
  const [monthlyTotals, setMonthlyTotals] = useState([]);
  const [hoveredDay, setHoveredDay] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const headers = { Authorization: `Bearer ${token}` };
      try {
        const data = await request(
          "https://api.github.com/graphql",
          query,
          {},
          headers,
        );
        const cal = data.viewer.contributionsCollection.contributionCalendar;
        setWeeks(cal.weeks);
        processMonthlyData(cal.weeks);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };
    fetchData();
  }, []);

  const processMonthlyData = (weeksData) => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const countsMap = {};
    monthNames.forEach((m) => (countsMap[m] = 0));

    weeksData.forEach((week) => {
      week.contributionDays.forEach((day) => {
        const date = new Date(day.date);
        countsMap[monthNames[date.getMonth()]] += day.contributionCount;
      });
    });

    const totalCommits = Object.values(countsMap).reduce((a, b) => a + b, 0);
    const stats = monthNames
      .map((name) => ({ name, count: countsMap[name] }))
      .filter((m) => m.count > 0)
      .sort((a, b) => b.count - a.count);

    let currentStart = 0;
    const finalStats = stats.map((m) => {
      const percent = totalCommits > 0 ? (m.count / totalCommits) * 100 : 0;
      const start = currentStart;
      currentStart += percent;
      return { ...m, start, end: currentStart };
    });
    setMonthlyTotals(finalStats);
  };

  const getLevel = (count) => {
    if (count === 0) return "level-0";
    if (count < 3) return "level-1";
    if (count < 6) return "level-2";
    if (count < 10) return "level-3";
    return "level-4";
  };

  const getMonthLabel = (week, index, allWeeks) => {
    const date = new Date(week.contributionDays[0].date);
    const m = date.getMonth();
    const prev = allWeeks[index - 1];
    if (!prev || m !== new Date(prev.contributionDays[0].date).getMonth()) {
      return date.toLocaleString("en-GB", { month: "short" }).toUpperCase();
    }
    return null;
  };

  const pieGradient =
    monthlyTotals.length > 0
      ? monthlyTotals
          .map((m) => {
            const opacity = Math.max(0.2, m.count / monthlyTotals[0].count);
            return `rgba(216, 112, 147, ${opacity}) ${m.start}% ${m.end}%`;
          })
          .join(", ")
      : "#333 0% 100%";

  return (
    <div className="edu-exp-container">
      <h3 className="edu-exp-title">My Contributions</h3>

      <div className="github-stats-layout">
        <div className="pie-chart-container">
          <div
            className="pie-chart"
            style={{ background: `conic-gradient(${pieGradient})` }}
          >
            <div className="pie-inner">
              <span className="total-label">
                GitHub
                <br />
                Activity
              </span>
            </div>
          </div>
          <div className="pie-legend">
            {monthlyTotals.slice(0, 4).map((m, i) => (
              <div key={i} className="legend-item">
                <span
                  className="dot"
                  style={{
                    backgroundColor: `rgba(216, 112, 147, ${Math.max(0.2, m.count / monthlyTotals[0].count)})`,
                  }}
                ></span>
                <span className="legend-text">
                  {m.name}: {m.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="github-info-side">
          <p className="github-desc">
            Since August 2024, I have maintained a near-daily coding presence on
            GitHub, reflecting my commitment to consistent technical growth and
            active project development.
          </p>
          <a
            href="https://github.com/sdg877"
            target="_blank"
            rel="noopener noreferrer"
            className="global-link"
          >
            My GitHub Profile →
          </a>
        </div>
      </div>

      <div className="heatmap-scroll-area" ref={scrollRef}>
        <div className="contribution-calendar">
          {[...weeks].reverse().map((week, i, allWeeks) => {
            const label = getMonthLabel(week, i, allWeeks);
            return (
              <div key={i} className="week-column">
                <span className="month-label-scroll">{label}</span>
                {week.contributionDays.map((day, j) => (
                  <div
                    key={j}
                    className={`contribution-day ${getLevel(day.contributionCount)}`}
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const cRect = scrollRef.current.getBoundingClientRect();
                      setHoveredDay({
                        date: day.date,
                        commits: day.contributionCount,
                        x: rect.left - cRect.left,
                        y: rect.top - cRect.top,
                      });
                    }}
                    onMouseLeave={() => setHoveredDay(null)}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {hoveredDay && (
        <div
          className="tooltip-github"
          style={{ left: `${hoveredDay.x}px`, top: `${hoveredDay.y - 35}px` }}
        >
          <strong>
            {new Date(hoveredDay.date).toLocaleDateString("en-GB")}
          </strong>
          : {hoveredDay.commits} commits
        </div>
      )}
    </div>
  );
};

export default GithubContributions;
