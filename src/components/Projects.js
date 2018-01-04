import React, { Component } from 'react';
import Project from "./Project";
import projectData from '../data/projectData.js'

class Projects extends Component {
  render() {
    return (
      <div>
        <h3>Projects</h3>
        {projectData.map(function(data, i){
          return <Project title={data.title} paragraphs={data.paragraphs} imgSrc={data.img} link={data.link} key={i}/>
        })}
      </div>
    )
  }
}

export default Projects;