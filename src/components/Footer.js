import React from 'react';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <a class="email" href="mailto:oscarornelas98123@gmail.com">oscarornelas98123@gmail.com</a>
        <ul className="social-list">
          <li className="social-item">
            <a className="social-link" target="_blank" rel="noopener noreferrer" href="#">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li className="social-item">
            <a className="social-link" target="_blank" rel="noopener noreferrer" href="https://github.com/Oscar-Ornelas?tab=repositories">
              <i className="fab fa-github-square"></i>
            </a>
          </li>
        </ul>
    </footer>
  )
}

export default Footer;
