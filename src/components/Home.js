import React, { Component } from 'react';
import About from "./About";
import Projects from "./Projects";
import Header from "./Header";
// import PropTypes from 'prop-types'; // ES6

class Home extends Component{
  render() {
    return (
      <div id="home">
        <Header/>
        <About/>
        <Projects/>
      </div>
    )
  }
}

export default Home;
