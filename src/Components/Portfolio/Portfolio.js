import React, { useState } from 'react';
import './Portfolio.css';
import PortfolioItem from './PortfolioItem/PortfolioItem';
import projectStore from '../../projectStore';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(projectStore.projects[0]);
  const [pictureIndex, setpictureIndex] = useState(0);

  function handleProjectClick(projectId) {
    setSelectedProject(projectStore.projects[projectId]);
    setpictureIndex(0);
  }

  function renderProjectThumbnails() {
    return projectStore.projects.map((project, index) => {
      return <PortfolioItem
        key={index}
        projectId={index}
        title={project.title}
        subTitle={project.subTitle}
        image={project.imagePaths[0]}
        handleClick={handleProjectClick}
      />;
    });
  }

  function renderTech() {
    let returnString = '';
    selectedProject.techs.forEach((tech, idx) => {
      idx === selectedProject.techs.length - 1
        ? returnString += tech
        : returnString += `${tech}, `;
    });
    return returnString;

  }

  return (
    <section id="portfolio">
      <div className="main-row">
        <div className="column project-full">
          <div className="col1 column">
            <h2>{selectedProject.title}</h2>
            <div className='row project-links'>
              <a href={selectedProject.gitHubLink} rel="noopener noreferrer" target="_blank"><i className="fa fa-github" /></a>
              <a href={selectedProject.liveSite} className="live-site" rel="noopener noreferrer" target="_blank">Live Project</a>
            </div>
            <img className="project-img" src={selectedProject.imagePaths[pictureIndex]} alt="profile pic" />
          </div>
          <div className="col2 column">
            <div className="tech-used">
              <h4>Tech Used</h4>
              <p className="techs">{renderTech()}</p>
            </div>
            <div className="overview">
              <h4>Overview</h4>
              <p className="description">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="column thumb-row">
        <ul className="row project-list">
          {renderProjectThumbnails()}
        </ul>
      </div>
    </section >
  );
};