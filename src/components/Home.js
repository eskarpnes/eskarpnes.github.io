import React, { Component } from 'react';
import About from "./About";
import Projects from "./Projects";
// import PropTypes from 'prop-types'; // ES6

class Home extends Component{
  render() {
    return (
      <div id="home">
        <h1>My personal website!</h1>
        <h2>This is currently a work in progress</h2>
        <About/>
        <Projects/>
      </div>
    )
  }
}

export default Home;
