import React from "react";
import "./PM.css";

export default function PM() {
  return (
    <section id="pm">
      <div className="main-row">
        <h2>Project Management</h2>
      </div>
      <div className="main-row move">
        <div className="main-col flex">
          <div className="column main-col">
            <a
              href="https://www.coursera.org/user/217e79279495b450b7dc7af29c3aa6f4"
              rel="noopener noreferrer"
              target="_blank"
            >
              <li>Foundations of Project Management</li>
              <li>Project Initiation: Starting a Successful Project</li>
              <li>Project Planning: Putting It All Together</li>
              <li>Project Execution: Running the Project</li>
              <li>Agile Project Management</li>
              <li>Capstone: Applying Project Management in the Real World</li>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
