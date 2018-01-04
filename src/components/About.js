import React, { Component } from 'react';
import moment from "moment";

class About extends Component {

  constructor(props) {
    super(props);
    let birthTime = moment([1995, 5, 25]);
    let presentTime = moment();
    this.greetings = {
      'Monday': 'marvelous',
      'Tuesday': 'terrific',
      'Wednesday': 'wonderful',
      'Thursday': 'tremendous',
      'Friday': 'fantastic',
      'Saturday': 'sweet',
      'Sunday': 'sweet'
    };
    this.state = {
      ageInSeconds: presentTime.diff(birthTime, 'seconds'),
      age: presentTime.diff(birthTime, 'years')
    };
  }


  tick() {
    this.setState(prevState => ({
      ageInSeconds: prevState.ageInSeconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {

    return (
      <div className="about">
        <h3>About me</h3>
        <p>
          I'm a {this.state.age} year (or approximately {this.state.ageInSeconds} seconds) old programmer currently studying at NTNU.
          This site is made as a quick look into both my personal and professional life, and my ongoing and completed
          projects.
        </p>
        <h3>Languages/Frameworks</h3>
        In no particular order.
        <ul>
          <li>Python</li>
          <li>Java</li>
          <li>C#</li>
          <li>Unity</li>
          <li>React</li>
          <li>HTML/CSS/JS</li>
          <li>I have also dabbled in assembly, but do not in any way consider myself an expert on the subject.</li>
        </ul>
        <h3>Interests</h3>
        Related to IT.
        <ul>
          <li>
            <a href="https://www.ethereum.org/">Ethereum</a> and the Ethereum Virtual Machine, and other ERC-20 tokens.
            I am amazed at the possibility of an trustless decentralized future for the web. I use much of my free time
            researching the different aspects of Ethereum, and how I can use it in my projects. I intend to teach
            myself Solidity, the language used to make smart contracts for the Ethereum network.
          </li>
          <li>
            Virtual Reality. I am the leader of Hackerspaces VR game development team, and have followed the
            development of popular VR devices for years. I think VR shows great promise in not only game design, but
            also visual representation of data, research, and even psychotherapy for the eldery. I believe there to
            exist a whole lot of use cases for VR which has not yet been fully discovered.
          </li>
          <li>
            Arduinos and simple circuits. I find it exciting to develop simple circuits and control them with an
            Arduino. This is however not something I use a lot of time on, and I in no way, shape, or form consider
            myself an expert on the subject.
          </li>
        </ul>
        <h3>Hobbies</h3>
        <ul>
          <li>
            Powerlifting. I love lifting heavy things up and put them down
            again. I find trying to break personal records on squats, deadlifts, and bench a fantastic way of staying
            in shape. I'm just now (as of january 2018) starting from scratch after half a year without lifting
            because of health issues, so I'll keep you all posted on my progress.
          </li>
          <li>
            Hiking. Being born in Ålesund left me no choice but to fall in love with the mountains, and the feeling of
            standing on top of them after an often painful trip up.
          </li>
          <li>
            Motorcycles. Not much can beat the feeling of a few hundred horses between your legs. Sadly, living as a
            student does not leave the possibility of owning a motorcycle, as the money is tight. So, for the moment
            being, I'm motorcycleless. That does however not crush my dream of driving through Europe one day on my
            motorcycle, cruising through the Italian vineyards and German autobahn.
          </li>
        </ul>
        This concludes the information about me. Down below you will find further information about projects I am/have
        been involved in. Have a {this.greetings[moment().format('dddd')]} {moment().format('dddd').toLowerCase()}!
      </div>
    )
  }
}

export default About;