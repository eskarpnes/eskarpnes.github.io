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
          If you are a recruiter linked here from my CV,
          this page should be interpreted as "hm, this dude
          totally tries to make cool new technology work, instead of
          making a boring old website! He has the spirit to learn
          and the will of and ox!".
          Or something like that. Anyway, in a few weeks time
          (I'm a busy man!) there should be a website up and running.
          Until then, this is all you get sadly.
        </p>
      </div>
    )
  }
}

export default Home;
