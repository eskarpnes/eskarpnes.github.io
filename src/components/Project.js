import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Project extends Component {

  constructor(props) {
    super(props);
    this.imgPath = "/img/"
  }

  render() {

    return (
      <div className="project" id={this.props.id}>
        <div className="text">
          <h3>{this.props.title}</h3>
          <a href={this.props.link}>{this.props.linkText}</a>
          {this.props.paragraphs.map(function(data, i){
            return <p key={i}>{data}</p>
          })}
        </div>
        <div className="picture">
          <img src={this.imgPath + this.props.imgSrc} alt={this.props.imgAlt} />
        </div>
      </div>
    )
  }
}

Project.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  linkText: PropTypes.string,
  paragraphs: PropTypes.array,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
};

export default Project;