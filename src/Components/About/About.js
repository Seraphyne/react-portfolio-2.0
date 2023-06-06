import React from "react";
import "./About.css";

export default function About(props) {
  return (
    <section id="about">
      <div className="main-row">
        <div className="stretch-fix">
          <img className="profile-pic" src="images/renata.jpg" alt="profile" />
        </div>
        <div className="column main-col">
          <h2>About Me</h2>
          <p>
            Hailing all the way from <em>Belo Horizonte, Brazil</em>, I have
            carved out my nook of the world in Dallas-Fort Worth Metroplex. I am
            a Project Manager, with knowledge in full stack developement{" "}
            (JavaScript, CSS, HTML, React, Git, GitHub, Node.js, PostgreSQL and
            JWT) . I have completed the full-time Engineering Immersion program
            at <em>Thinkful</em>, where I built a strong foundation in
            responsive web design and full stack web development.
          </p>
          <p>
            In addition to my experience at <em>Thinkful</em>, my professional
            experience ranges from tour guide, English and History teacher,
            customer support and barista.{" "}
          </p>
          <p>
            On my downtime, I enjoy playing games, biking, reading History or
            Biography books, watching Netflix and listening to music.{" "}
          </p>
          <div className="row">
            <div className="column contact-details">
              <h2>Contact Details</h2>
              <ul className="address">
                <li>Renata Dickinson</li>
                <li>Dallas-Fort Worth Metroplex, TX</li>
              </ul>
            </div>
          </div>
          <div className="column">
            <p>
              {/* <b>For more information and my resume, please, send an email.</b> */}
              {/* <a href="pdf/ResumeRenataD.pdf" className="button" rel="noopener noreferrer" target="_blank"><i className="fa fa-download" /> Download Resume</a> */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
