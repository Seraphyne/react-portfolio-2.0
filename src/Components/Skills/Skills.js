import React from 'react';
import './Skills.css';

export default function Skills() {
    return (
        <section id="skills">
          <div className="main-row">
            <div className="column main-col">
                <h2>Languages</h2>
                  <div className="column main-col">
                     <h4>FrontEnd</h4>
                     <li>HTML5</li>
                     <li>Javascript</li>
                     <li>CSS</li>
                     <li>jQuery</li>
                     <li>React</li>
                     <li>React Router</li>
                     <li>Enzyme</li>
                     <li>Cypress.io</li>
                  </div>
                  <div className="column main-col">
                     <h4>BackEnd</h4>
                     <li>PostgreSQL</li>
                     <li>Node</li>
                     <li>Express</li>
                     <li>JWT</li>
                     <li>Mocha & Chai</li>
                     <li>Nodemon</li>
                     <li>Supertest</li>
                  </div>
                  <div className="column main-col">
                     <h4>DevTools</h4>
                     <li>Git</li>
                     <li>GitHub</li>
                     <li>Chrome DevTools</li>
                     <li>Jester</li>
                     <li>Travis Ci</li>
                     <li>Heroku</li>
                     <li>Vercel</li>
                     <li>Netlify</li>
                  </div>
            </div>
          </div>
        </section>
      );
}