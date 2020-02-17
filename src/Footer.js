import React from 'react';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <a class="email" href="mailto:oscarornelas98123@gmail.com">oscarornelas98123@gmail.com</a>
        <ul className="social-list">
          <li className="social-item">
            <a className="social-link" href="https://codepen.io/oscar-ornelas-frontenddev">
              <i class="fab fa-codepen"></i>
            </a>
          </li>
          <li className="social-item">
            <a className="social-link" href="https://www.facebook.com/oscar.ornelas.988">
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
          <li className="social-item">
            <a className="social-link" href="https://github.com/Oscar-Ornelas?tab=repositories">
              <i class="fab fa-github-square"></i>
            </a>
          </li>
        </ul>
    </footer>
  )
}

export default Footer;
