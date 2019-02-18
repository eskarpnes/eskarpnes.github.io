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
      'Saturday': 'super',
      'Sunday': 'sweet'
    };
    this.state = {
      age: presentTime.diff(birthTime, 'years'),
    };
  }


  render() {
    return (
      <div className="about">
        <div className="section">
          <div className="text">
            <h2>About me</h2>
            <p>
          I'm a {this.state.age} year old programmer from Ålesund currently living in Trondheim and studying at NTNU.
          This site is made as a quick look into both my personal life and my ongoing and completed
          projects.
            </p>
            <h3>Languages/Frameworks</h3>
            <p>These are the languages I have used thus far, and feel comfortable using in projects.</p>
            <ul>
              <li>Python</li>
              <li>Java/C#</li>
              <li>React/React Native</li>
              <li>Low level languages (mostly C for Arduino)</li>
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
            Virtual Reality. I was the leader of Hackerspaces VR game development team, and have followed the
            development of popular VR devices for years.
              </li>
              <li>
            Arduino/Raspberry Pi. I like to dabble in microelectronics, and have picked up some tips and tricks over the years.
                This also translates to a general interest in IoT, which I have used in a summer internship and worked with in school related projects.
              </li>
              <li>
                General computer hardware. Got to have a beautiful screen and beefy hardware...
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