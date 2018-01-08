import React, { Component } from 'react';
import Project from "./Project";
import projectData from '../data/projectData.js'

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <a name="projects"/>
        <h2>Projects</h2>
        {projectData.map(function(data, i){
          return <Project
            id={data.id}
            title={data.title}
            paragraphs={data.paragraphs}
            imgSrc={data.img}
            imgAlt={data.imgAlt}
            link={data.link}
            linkText={data.linkText}
            key={i}
          />
        })}
      </div>
    )
  }
}

export default Projects;