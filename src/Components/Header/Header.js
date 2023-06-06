import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="column centered">
      <nav id="nav-wrap">
        <ul id="nav" className="nav">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/pm"}>Project Management</Link>
          </li>
          <li>
            <Link to={"/skills"}>Skills</Link>
          </li>
          <li>
            <Link to={"/portfolio"}>Portfolio</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}