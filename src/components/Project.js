import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Project extends Component {
  render() {

    return (
      <div>
        <h3>{this.props.title}</h3>
        <a href={this.props.link}>Github</a>
        {this.props.paragraphs.map(function(data, i){
          return <p key={i}>{data}</p>
        })}
        <img src={this.props.img} alt="picture of project" />

      </div>
    )
  }
}

Project.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  paragraphs: PropTypes.array,
  img: PropTypes.string
};

export default Project;