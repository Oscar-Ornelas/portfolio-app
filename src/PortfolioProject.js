import React from 'react';

function PortfolioProject(props) {
  return (
    <div className="project">
      <img className="project-img" src={props.img}/>
      <figcaption className="caption">{props.caption}</figcaption>
      <span className="project-btns">
        <a className="btn btn-project" href={props.repoURL}>View Repo</a>
        <a className="btn btn-project" href={props.projectURL}>View Project</a>
      </span>
    </div>
  )
}

export default PortfolioProject;
