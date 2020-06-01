import React, {useState} from 'react';
import logo from '../imgs/logo.png';
import resume from '../resume/OscarOrnelasResume.pdf';

function Header() {
  const [navSlide, setNavSlide] = useState(false);

  function toggleNavSlide() {
    setNavSlide(prevNavSlide => !prevNavSlide);
  }

  return (
    <header className="header">
      <div className="header-content">
      <a href="#about">
        <img className="logo" alt="" src={logo}/>
      </a>
        <button onClick={toggleNavSlide} aria-label="Open navigation" className="open-nav">&#9776;</button>
        <nav className={navSlide ? "nav navigation-open" : "nav navigation-close"}>

          <ul className="nav-list">
            <li className="nav-item" ><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item" ><a className="nav-link" href={resume} download>Resume <i class="fas fa-download resume-icon"></i></a></li>
            <li className="nav-item" ><a className="nav-link" href="https://github.com/Oscar-Ornelas?tab=repositories" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square nav-social"></i></a></li>
            <li className="nav-item" ><a className="nav-link" href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin nav-social"></i></a></li>
          </ul>
        </nav>
      </div>

    </header>
  )

}

export default Header;
