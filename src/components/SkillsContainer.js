import React from 'react';
import Skill from './Skill.js';

function SkillsContainer() {
  return (
    <section id="skills" className="container">
      <div className="section-intro">
        <h1 className="section-header">Technological Skills</h1>
        <p className="section-subtitle">I'm always learning new technologies that will improve your company</p>
      </div>

      <div class="skills-container">
        <Skill
          skill="Semantic HTML5"
          emoticon="fa-html5"
          id="html"
        />
        <Skill
          skill="Responsive CSS3"
          emoticon="fa-css3-alt"
          id="css"
        />
        <Skill
          skill="Interactive JavaScript"
          emoticon="fa-js-square"
          id="javascript"
        />
        <Skill
          skill="Git"
          emoticon="fa-git-square"
          id="git"
        />
        <Skill
          skill="Github"
          emoticon="fa-github-square"
          id="github"
        />
        <Skill
          skill="React"
          emoticon="fa-react"
          id="react"
        />
        <Skill
          skill="React Hooks"
          emoticon="fa-react"
          id="react-hooks"
        />
        <Skill
          skill="Problem Solver"
          emoticon="fas fa-cogs"
          id="problem-solver"
        />
        <Skill
          skill="Transform PSD / Wireframes into web applications"
          emoticon="far fa-edit"
          id="psd"
        />
      </div>
    </section>
  )
}

export default SkillsContainer;
