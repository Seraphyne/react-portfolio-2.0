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
            carved out my nook of the world in Dallas-Fort Worth Metroplex.
            Having completed the full-time Engineering Immersion program at{" "}
            <em>Thinkful</em>, I have honed my skills in full stack development,
            encompassing JavaScript, CSS, HTML, React, Git, GitHub, Node.js,
            PostgreSQL, and JWT. This comprehensive training has equipped me
            with a strong foundation in responsive web design and full stack web
            development.
          </p>
          <p>
            In addition to my professional journey, I have decided to embark on
            a new chapter and transition into a different role as a{" "}
            <em>Project Manager</em> completing the course from <em>Google</em>.
            Navigating this change, I bring a wealth of skills, adaptability,
            and a passion for learning.
          </p>
          <p>
            Outside of the professional realm, my downtime is filled with joyous
            activities. I am an avid gamer, a biking enthusiast, and an ardent
            reader of History and Biography books. I also find solace in
            unwinding with Netflix and immersing myself in diverse musical
            genres.
          </p>
          <p>
            If my versatile skill set and evolving career path align with what
            you are looking for, I welcome you to connect with me on{" "}
            <em>LinkedIn</em> or on use the Contact page. I am excited about the
            prospect of contributing my unique blend of experiences and skills
            to a dynamic team.
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
