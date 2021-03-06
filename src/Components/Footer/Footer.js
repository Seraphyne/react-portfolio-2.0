import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHackerrank } from '@fortawesome/free-brands-svg-icons';
import {faDev} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export default function Footer(props) {
  return (
    <footer>
      <div className="footer">
        <ul className="social-links row">
          <li><a href="https://github.com/Seraphyne" rel="noopener noreferrer" target="_blank" aria-label="github"><i className="fa fa-github" /></a></li>
          <li><a href="https://www.linkedin.com/in/renatafd/?locale=en_US" rel="noopener noreferrer" target="_blank" aria-label="linkedin"><i className="fa fa-linkedin" /></a></li>
          <li><a href="https://stackoverflow.com/users/14376189/renata-dickinson" rel="noopener noreferrer" target="_blank" aria-label="stackoverflow"><i className="fa fa-stack-overflow" /></a></li>
          <li><a href="https://www.hackerrank.com/renata_dickinson" rel="noopener noreferrer" target="_blank" aria-label="hackerrank"><FontAwesomeIcon icon={faHackerrank} /></a></li>
          <li><a href="https://devpost.com/seraphyne" rel="noopener noreferrer" target="_blank" aria-label="devpost"><FontAwesomeIcon icon={faDev} /></a></li>
          <li><a href="mailto: renata.f.dickinson@gmail.com?subject=I saw your Portfolio." rel="noopener noreferrer" target="_blank" aria-label="mail"><i className="fa fa-envelope" /></a></li>
        </ul>
      </div>
    </footer>
  );
};