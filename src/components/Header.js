import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <div className="header">
          <div className="item">
            <h1>Erlend Skarpnes</h1>
          </div>
          <div className="item">
            <a href="#about"><h1>About</h1></a>
          </div>
          <div className="item">
            <a href="#projects"><h1>Projects</h1></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;