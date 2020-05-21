import React from 'react';

function Introduction() {
  return (
    <section id="about" className="intro container">
      <div className="intro-content">
        <div className="section-intro">
          <h1 className="intro-header section-header">Hi, I am <strong>Oscar Ornelas</strong></h1>
          <p className="section-subtitle">Front-End Developer</p>
        </div>
        <p className="info">I'm here to become the best front-end web developer possible to provide as much value as possible to companies like yours.</p>
        <div class="intro-buttons">
          <a href="#projects" className="btn btn-intro">Check Out My Projects</a>
          <a href="#" className="btn btn-intro">Download Resume</a>
        </div>
      </div>
    </section>
  )
}

export default Introduction;
