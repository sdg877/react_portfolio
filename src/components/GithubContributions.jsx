import React, { useEffect, useState, useRef } from "react";
import { request, gql } from "graphql-request";

const token = process.env.REACT_APP_GITHUB_TOKEN;

const query = gql`
  query {
    viewer {
      contributionsCollection {
        contributionCalendar {
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
        const fetchedWeeks =
          data.viewer.contributionsCollection.contributionCalendar.weeks;
        setWeeks(fetchedWeeks);
        processMonthlyData(fetchedWeeks);
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
        const mName = monthNames[date.getMonth()];
        countsMap[mName] += day.contributionCount;
      });
    });

    const totalCommits = Object.values(countsMap).reduce((a, b) => a + b, 0);
    let currentStart = 0;

    const stats = monthNames
      .map((name) => {
        const count = countsMap[name];
        const percent = totalCommits > 0 ? (count / totalCommits) * 100 : 0;
        const start = currentStart;
        currentStart += percent;
        return { name, count, start, end: currentStart };
      })
      .filter((m) => m.count > 0);

    setMonthlyTotals(stats);
  };

  const getLevel = (count) => {
    if (count === 0) return "level-0";
    if (count < 3) return "level-1";
    if (count < 5) return "level-2";
    if (count < 7) return "level-3";
    if (count < 9) return "level-4";
    if (count < 11) return "level-5";
    if (count < 15) return "level-6";
    return "level-7";
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

  const reversedWeeks = [...weeks].reverse();

  const pieGradient =
    monthlyTotals.length > 0
      ? monthlyTotals
          .map((m, i) => {
            const color = `rgba(216, 112, 147, ${1 - i * 0.08})`;
            return `${color} ${m.start}% ${m.end}%`;
          })
          .join(", ")
      : "#333 0% 100%";

  return (
    <div className="contributions-section-wrapper">
      <div className="edu-exp-container github-card-styled">
        <h3 className="edu-exp-title">My Contributions</h3>

        <div className="github-stats-layout">
          <div className="pie-chart-container">
            <div
              className="pie-chart"
              style={{ background: `conic-gradient(${pieGradient})` }}
            >
              <div className="pie-inner">
                <span className="total-label">
                  Monthly
                  <br />
                  Split
                </span>
              </div>
            </div>
            <div className="pie-legend">
              {monthlyTotals.slice(-4).map((m, i) => (
                <div key={i} className="legend-item">
                  <span
                    className="dot"
                    style={{
                      backgroundColor: `rgba(216, 112, 147, ${1 - i * 0.2})`,
                    }}
                  ></span>
                  {m.name}: {m.count}
                </div>
              ))}
            </div>
          </div>

          <div className="github-info-side">
            <p className="github-desc">
              I’ve made 1000+ GitHub contributions over the past year,
              demonstrating consistent engagement with code and project work.
            </p>
            <a
              href="https://github.com/sdg877"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-link-grow"
            >
              My GitHub Profile
            </a>
          </div>
        </div>

        <div className="heatmap-scroll-area" ref={scrollRef}>
          <div className="contribution-calendar">
            {reversedWeeks.map((week, i) => {
              const label = getMonthLabel(week, i, reversedWeeks);
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
            style={{
              left: `${hoveredDay.x + 20}px`,
              top: `${hoveredDay.y - 40}px`,
            }}
          >
            <strong>
              {new Date(hoveredDay.date).toLocaleDateString("en-GB")}
            </strong>
            <div>{hoveredDay.commits} commits</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GithubContributions;
