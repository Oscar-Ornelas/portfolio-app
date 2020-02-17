import React from 'react';
import logo from './imgs/logo.png';
class Header extends React.Component {
  state = {
    navSlide: false
  }

  toggleNavSlide = () => {
    this.setState(prevState => ({navSlide: !prevState.navSlide}));
  }

  render(){
    return (
      <header className="header">
        <div className="header-content">
        <a href="#about">
          <img className="logo" alt="" src={logo}/>
        </a>
          <button onClick={this.toggleNavSlide} aria-label="Open navigation" className="open-nav">&#9776;</button>
          <nav className={this.state.navSlide ? "nav navigation-open" : "nav navigation-close"}>

            <ul className="nav-list">
              <li className="nav-item" ><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item" ><a className="nav-link" href="#">Resume <i class="fas fa-download resume-icon"></i></a></li>
              <li className="nav-item" ><a className="nav-link" href="#"><i className="fab fa-github-square nav-social"></i></a></li>
              <li className="nav-item" ><a className="nav-link" href="#"><i className="fab fa-codepen nav-social"></i></a></li>
              <li className="nav-item" ><a className="nav-link" href="#"><i className="fab fa-linkedin nav-social"></i></a></li>
            </ul>
          </nav>
        </div>

      </header>
    )
  }

}

export default Header;
