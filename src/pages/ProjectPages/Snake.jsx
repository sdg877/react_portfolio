import React from 'react';
import SnakeImage from '../../Images/Snake.png'

const Snake = () => {
  return (
    <div className='text-container'>
    <h2>Unit 1 Project - Snake</h2>
    <div>
    <img src={SnakeImage} alt="Snake" style={{ width: '200px', height: '200px' }} />
        <br />
        This project was my first ever, it was built as part of Unit One of General Assembly's Software Engineering Bootcamp, we were given a choice of games to build. 
        As I had only been coding full-time for two weeks, I decided to go for one of the simpler games, Snake,  to allow me to ease myself into my first-ever project and not overwhelm myself. 
        We were given seven days to complete the project including planning. 
        Snake is a single-player game, the player earns points by guiding the snake to eat food that is randomly placed on the game board. The snake gets longer and faster with every piece of food that it eats. 
        The snake dies if it collides with a wall or with itself.
        <br />
        The game required that it should be built solely using JavaScript, that it includes win/loss logic, that it be coded consistently, that functions and variables be named sensibly, and that it be deployed online using GitHub.
        <br />
        <a href="https://sdg877.github.io/Unit1_Project_Snake/" target="_blank" rel="noopener noreferrer" className="nav-button">Play Snake!</a>
        <a href="https://github.com/sdg877/Unit1_Project_Snake" target="_blank" rel="noopener noreferrer" className="nav-button">GitHub Link</a>

    </div>
    </div>
  )
}

export default Snake
