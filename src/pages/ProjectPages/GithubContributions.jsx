import React, { useEffect, useState } from 'react';
import { request, gql } from 'graphql-request';
import '../styles/pages.css';

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

const GitHubContributions = () => {
  const [weeks, setWeeks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      try {
        const data = await request('https://api.github.com/graphql', query, {}, headers);
        setWeeks(data.viewer.contributionsCollection.contributionCalendar.weeks);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    };

    fetchData();
  }, []);

  const colorScale = [
    '#f0f0ff',
    '#d0c4ff',
    '#a58bff',
    '#7c51ff',
    '#521fdc',
  ];

  const getColor = (count) => {
    if (count === 0) return colorScale[0];
    if (count < 5) return colorScale[1];
    if (count < 10) return colorScale[2];
    if (count < 20) return colorScale[3];
    return colorScale[4];
  };

  return (
    <div>
      <h2>My Contributions</h2>
      <div className="contribution-calendar">
        {weeks.map((week, i) => (
          <div key={i} className="week-column">
            {week.contributionDays.map((day, j) => (
              <div
                key={j}
                className="contribution-day"
                style={{ backgroundColor: getColor(day.contributionCount) }}
                title={`${day.date}: ${day.contributionCount} contributions`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubContributions;
