import React from "react";
import SnakeImage from "../../Images/Snake.png";
import { Link } from "react-router-dom";

const Snake = () => {
  return (
    <div className="info-card">
      <h3>Unit 1 Project - Snake</h3>
      <br />
      <br />
      <div>
        <img
          src={SnakeImage}
          alt="Snake"
          className="project-image"
        />
        <br />
        <br />
        This project was my first ever, it was built as part of Unit One of
        General Assembly's Software Engineering Bootcamp, we were given a choice
        of games to build. As I had only been coding full-time for two weeks, I
        decided to go for one of the simpler games, Snake, to allow me to ease
        myself into my first-ever project and not overwhelm myself. We were
        given seven days to complete the project including planning. Snake is a
        single-player game, the player earns points by guiding the snake to eat
        food that is randomly placed on the game board. The snake gets longer
        and faster with every piece of food that it eats. The snake dies if it
        collides with a wall or with itself.
        <br />
        <br />
        The game required that it should be built solely using JavaScript, that
        it includes win/loss logic, that it be coded consistently, that
        functions and variables be named sensibly, and that it be deployed
        online using GitHub.
        <br />
        <br />
        <br />
        <br />
        <a
          href="https://sdg877.github.io/Unit1_Project_Snake/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Play Snake!
        </a>
        <br />
        <br />
        <a
          href="https://github.com/sdg877/Unit1_Project_Snake"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Link
        </a>
        <br />
        <br />
        <Link to="/projects/WeatherApp">
          Next Project: Weather App
        </Link>
      </div>
    </div>
  );
};

export default Snake;
