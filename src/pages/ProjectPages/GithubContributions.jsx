import React, { useEffect, useState } from "react";
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
  const [hoveredDay, setHoveredDay] = useState(null); // Track hovered day info

  useEffect(() => {
    const fetchData = async () => {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      try {
        const data = await request(
          "https://api.github.com/graphql",
          query,
          {},
          headers
        );
        setWeeks(data.viewer.contributionsCollection.contributionCalendar.weeks);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };

    fetchData();
  }, []);

  const getContributionLevel = (count) => {
    if (count === 0) return "level-0";
    if (count < 3) return "level-1";
    if (count < 6) return "level-2";
    if (count < 10) return "level-3";
    return "level-4";
  };

  const formatDate = (isoDate) => {
    const [year, month, day] = isoDate.split("-");
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="info-card-project contributions-card" style={{ position: "relative" }}>
      <h3 className="title-project">My Contributions</h3>
      <h9 className="github-desc">
        I regularly commit to projects on GitHub, here’s my contribution history.
      </h9>

      <div className="contribution-calendar">
        {weeks.map((week, i) => (
          <div key={i} className="week-column">
            {week.contributionDays.map((day, j) => (
              <div
                key={j}
                className={`contribution-day ${getContributionLevel(day.contributionCount)}`}
                onMouseEnter={(e) =>
                  setHoveredDay({
                    date: day.date,
                    commits: day.contributionCount,
                    position: { x: e.clientX, y: e.clientY },
                  })
                }
                onMouseLeave={() => setHoveredDay(null)}
              />
            ))}
          </div>
        ))}
      </div>

      {hoveredDay && (
        <div
          className="tooltip"
          style={{
            position: "fixed",
            top: hoveredDay.position.y + 10,
            left: hoveredDay.position.x + 10,
            pointerEvents: "none", // so tooltip doesn’t block mouse events
            backgroundColor: "#222",
            color: "#fff",
            padding: "6px 10px",
            borderRadius: "4px",
            fontSize: "0.9rem",
            zIndex: 1000,
            whiteSpace: "nowrap",
          }}
        >
          <div>{formatDate(hoveredDay.date)}</div>
          <div>{hoveredDay.commits} commits</div>
        </div>
      )}
    </div>
  );
};

export default GithubContributions;
