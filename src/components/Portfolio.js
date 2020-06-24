import React from 'react';
import calculator from '../imgs/calculator.PNG';
import film_box from '../imgs/film_box.PNG';
import classical_junkie from '../imgs/classical_junkie.PNG';
import real_speak from '../imgs/real_speak.PNG';
import Project from './PortfolioProject';

function Portfolio() {
  return (
    <section id="projects" className="portfolio-container">
      <div className="section-intro">
        <h1 className="section-header">My Recent Work</h1>
        <p className="section-subtitle">Some of my latest and greatest projects</p>
      </div>
      <div className="portfolio">
        <Project
          img={real_speak}
          caption="A Discord/Slack clone built using React which allows for real-time communication in a group chat. This project utilizes Socket IO, Auth0, Node.js, Express, and MongoDB."
          repoURL="https://github.com/Oscar-Ornelas/real-speak"
          projectURL="https://real-speak.herokuapp.com/"
        />
        <Project
          img={film_box}
          caption="An IMBd clone built using React which dynamically displays current film information including films now playing in theaters and most popular. This project utilizes The Movie Database API."
          repoURL="https://github.com/Oscar-Ornelas/film-box"
          projectURL="https://oscar-ornelas.github.io/film-box/"
        />
        <Project
          img={classical_junkie}
          caption="A Spotify clone built in React for Spotify premium users which allows the user to search for and play classical music. This project utilizes the Spotify Web API and Web Playback SDK."
          repoURL="https://github.com/Oscar-Ornelas/classical-junkie"
          projectURL="https://oscar-ornelas.github.io/classical-junkie/"
        />
        <Project
          img={calculator}
          caption="A calculator built in React to perform the functions required in most daily calculator usages from calculating percentages to performing several calculations on a single line."
          repoURL="https://github.com/Oscar-Ornelas/calculator-app"
          projectURL="https://oscar-ornelas.github.io/calculator-app/"
        />
      </div>
    </section>
  )
}

export default Portfolio;
