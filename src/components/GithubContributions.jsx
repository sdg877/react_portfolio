import React, { useEffect, useState } from "react";
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
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };
    fetchData();
  }, []);

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

  return (
    <div className="edu-exp-container">
      <h3 className="edu-exp-title">My Contributions</h3>

      <div className="github-stats-layout">
        <div className="github-info-side">
          <p className="github-desc">
            Since August 2024, I have committed to coding on GitHub nearly every
            day. This daily practice has not only sharpened my technical skills
            but has also built a disciplined workflow that I genuinely love and
            take pride in.
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

      <div className="heatmap-scroll-area">
        <div className="contribution-calendar">
          {weeks.map((week, i, allWeeks) => {
            const label = getMonthLabel(week, i, allWeeks);
            return (
              <div key={i} className="week-column">
                <span className="month-label-scroll">{label}</span>
                {week.contributionDays.map((day, j) => (
                  <div
                    key={j}
                    className={`contribution-day ${getLevel(day.contributionCount)}`}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GithubContributions;