import React from 'react';
import './Footer.css';

export default function Footer(props) {
  return (
    <footer>
      <div className="footer">
        <ul className="social-links row">
          <li><a href="https://github.com/Seraphyne" rel="noopener noreferrer" target="_blank"><i className="fa fa-github" /></a></li>
          <li><a href="https://www.linkedin.com/in/renatafd/?locale=en_US" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin" /></a></li>
          <li><a href="https://stackoverflow.com/users/14376189/renata-dickinson" rel="noopener noreferrer" target="_blank"><i class="fa fa-stack-overflow" /></a></li>
          <li><a href="mailto: renata.f.dickinson@gmail.com?subject=I saw your Portfolio." rel="noopener noreferrer" target="_blank"><i className="fa fa-envelope" /></a></li>
        </ul>
      </div>
    </footer>
  );
};