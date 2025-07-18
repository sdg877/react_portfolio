import React, { useEffect, useState } from 'react';
import { request, gql } from 'graphql-request';

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

  return (
    <div className="github-contributions-section">
      <h3 className="github-title">My Contributions</h3>
      <div className="contribution-calendar">
        {weeks.map((week, i) => (
          <div key={i} className="week-column">
            {week.contributionDays.map((day, j) => (
              <div
                key={j}
                className="contribution-day"
                data-count={day.contributionCount}
                title={`${day.date}: ${day.contributionCount} contributions`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GithubContributions;
