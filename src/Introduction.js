import React from 'react';
import person from './imgs/post.jpg';

function Introduction() {
  return (
    <section id="about" className="intro container">
      <div className="intro-content">
        <div className="section-intro">
          <h1 className="intro-header section-header">Hi, I am <strong>Oscar Ornelas</strong></h1>
          <p className="section-subtitle">Front-End Developer</p>
        </div>
        <p className="info">When I first typed "Hello World" into the JavaScript console I knew I had to become a web developer. Ever since I've dedicated everything towards becoming the best front-end web developer possible to provide as much value as possible to companies like yours.</p>
        <a href="#projects" className="btn btn-intro">Check Out My Projects</a>
      </div>
      <div className="intro-image">
        <img className="person" alt="Smiling man" src={person}/>
      </div>
    </section>
  )
}

export default Introduction;
