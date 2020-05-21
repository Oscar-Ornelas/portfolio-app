import React from 'react';

function Skill(props) {
  return (
    <div className={`skill ${props.id}`}>
      <p className="skill-text">{props.skill} <i className={`fab ${props.emoticon}`}></i></p>
    </div>
  )
}


export default Skill;
