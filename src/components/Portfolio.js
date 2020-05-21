import React from 'react';
import calculator from '../imgs/calculator.PNG';
import film_box from '../imgs/film_box.PNG';
import classical_junkie from '../imgs/classical_junkie.PNG';
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
          img={film_box}
          caption="Calculator built entirely in React with mobile-responsive CSS and semantic HTML"
          repoURL="https://github.com/Oscar-Ornelas/calculator-app"
          projectURL="https://oscar-ornelas.github.io/calculator-app/"
        />
        <Project
          img={classical_junkie}
          caption="Calculator built entirely in React with mobile-responsive CSS and semantic HTML"
          repoURL="https://github.com/Oscar-Ornelas/calculator-app"
          projectURL="https://oscar-ornelas.github.io/calculator-app/"
        />
        <Project
          img={calculator}
          caption="Calculator built entirely in React with mobile-responsive CSS and semantic HTML"
          repoURL="https://github.com/Oscar-Ornelas/calculator-app"
          projectURL="https://oscar-ornelas.github.io/calculator-app/"
        />
      </div>
    </section>
  )
}

export default Portfolio;
