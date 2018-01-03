import React, { Component } from 'react';
// import PropTypes from 'prop-types'; // ES6

class Home extends Component{
  render() {
    return (
      <div id="home">
        <h1>My personal website!</h1>
        <h2>This is currently a work in progress</h2>
        <p>
          I am going to make a website in React hosted
          on github pages using the npm module gh-pages.
        </p>
        <p>
          <b>Fornøyd no Maria?</b>
        </p>
      </div>
    )
  }
}

export default Home;
