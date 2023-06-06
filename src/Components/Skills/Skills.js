import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills">
      <div className="main-row">
        <h2>Programming Languages</h2>
      </div>
      <div className="main-row move">
        <div className="main-col flex">
          <div className="column main-col">
            <h4>FrontEnd:</h4>
            <li>HTML5</li>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>Sass</li>
            <li>jQuery</li>
            <li>React</li>
            <li>React Router</li>
            <li>Ruby</li>
            <li>Haml</li>
            <li>Enzyme</li>
            <li>Cypress.io</li>
          </div>
          <div className="column main-col">
            <h4>BackEnd:</h4>
            <li>PostgreSQL</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>JWT - JSON Web Token</li>
            <li>Ruby on Rails</li>
            <li>Mocha & Chai</li>
            <li>Nodemon</li>
            <li>Supertest</li>
          </div>
          <div className="column main-col">
            <h4>DevTools:</h4>
            <li>Git</li>
            <li>GitHub</li>
            <li>Chrome DevTools</li>
            <li>Jester</li>
            <li>Travis Ci</li>
            <li>Heroku</li>
            <li>Railway</li>
            <li>Vercel</li>
            <li>Netlify</li>
          </div>
        </div>
      </div>
    </section>
  );
}
