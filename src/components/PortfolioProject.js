import React from 'react';

function PortfolioProject(props) {
  return (
    <div className="project">
      <img className="project-img" src={props.img}/>
      <div className="project-info">
        <figcaption className="caption">{props.caption}</figcaption>
        <span className="project-btns">
          <a className="btn btn-project" href={props.repoURL} target="_blank" rel="noopener noreferrer">View Code</a>
          <a className="btn btn-project" href={props.projectURL} target="_blank" rel="noopener noreferrer">View Project</a>
        </span>
      </div>
    </div>
  )
}

export default PortfolioProject;
