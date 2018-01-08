import React, { Component } from 'react';
import moment from "moment";
import axios from "axios";

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
      'Saturday': 'super',
      'Sunday': 'sweet'
    };
    this.state = {
      ageInSeconds: presentTime.diff(birthTime, 'seconds'),
      age: presentTime.diff(birthTime, 'years'),
      ethData: {
        'price': '<api-request failed>',
        'change': '<api-request failed>'
      }
    };
  }


  tick() {
    if (this.state.ageInSeconds%30 === 0) {
      console.log("updating price");
      this.getEthPrice()
    }
    this.setState(prevState => ({
      ageInSeconds: prevState.ageInSeconds + 1
    }));
  }

  getEthPrice() {
    axios.get('https://api.coinmarketcap.com/v1/ticker/ethereum/')
      .then(res => {
        let ethData = res.data[0];
        this.setEthData(ethData)
      })
  }

  setEthData(ethData) {
    this.setState({ ethData: { 'price': ethData['price_usd'], 'change': ethData['percent_change_7d'] } })
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillMount() {
    this.getEthPrice()
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    let change = this.state.ethData['change'];

    return (
      <div className="about">
        <a name="about"/>
        <h3>Site is still a work in progress.</h3>
        <div className="section">
          <div className="text">
            <h2>About me</h2>
            <p>
          I'm a {this.state.age} year (or approximately {this.state.ageInSeconds} seconds) old programmer from
          Ålesund currently studying at NTNU.
          This site is made as a quick look into both my personal and professional life, and my ongoing and completed
          projects.
            </p>
            <h3>Languages/Frameworks</h3>
            <ul>
              <li>Python</li>
              <li>Java</li>
              <li>C#</li>
              <li>Unity</li>
              <li>React</li>
              <li>HTML/CSS/JS</li>
              <li>Low level languages (C for Arduino, some Assembly)</li>
            </ul>
          </div>
          <div className="picture">
            <img src="/img/headshot.jpg" alt="headshot" />
          </div>
        </div>
        <div className="section">
          <div className="text">
            <h3>Interests</h3>
            <p>
              Related to IT.
            </p>
            <ul>
              <li>
                <a href="https://www.ethereum.org/">Ethereum</a> and the Ethereum Virtual Machine.
            Did you know that Ethereum is currently valued at ${this.state.ethData['price']}? This is
            a {change}% {change >= 0 ? 'increase' : 'decrease'} in the last seven days.*
              </li>
              <li>
            Virtual Reality. I am the leader of Hackerspaces VR game development team, and have followed the
            development of popular VR devices for years.
              </li>
              <li>
            Arduinos and simple circuits. I find it exciting to develop simple circuits and control them with an
            Arduino.
              </li>
            </ul>
          </div>
          <div className="picture">
            <img src="/img/mountain1.jpg" alt="on top of Skopphornet" />
          </div>
        </div>
        <div className="section">
          <div className="text">
            <h3>Hobbies</h3>
            <ul>
              <li>
                Powerlifting. I love lifting heavy things up and put them down
                again.
              </li>
              <li>
                Hiking. Being born in Ålesund left me no choice but to fall in love with the mountains.
              </li>
              <li>
                Motorcycles. Not much can beat the feeling of a few hundred horses between your legs. One day I wish to drive
                through Europe, cruising through the Italian vineyards and German autobahn.
              </li>
              <li>
            I also spend way too much time on <a href="https://www.reddit.com/">reddit</a>. I view it as an interesting way
            to be exposed to new information and viewpoints, with the cute cat picture every now and then.
              </li>
            </ul>
            <p>
              This concludes the information about me. Down below you will find further information about projects I am/have
              been involved in. Have a {this.greetings[moment().format('dddd')]} {moment().format('dddd').toLowerCase()}!
            </p>
            <ul id="footnote">
              <li>
            *data from <a href="https://coinmarketcap.com/currencies/ethereum/">coinmarketcap.com</a>
              </li>
            </ul>
          </div>
          <div className="picture">
            <img src="/img/mountain2.jpg" alt="sign reading 'Skopphornet 1226 moh'" />
          </div>
        </div>
      </div>
    )
  }
}

export default About;