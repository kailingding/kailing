import React, { Component } from "react";
import "./aboutMe.css";
import resume from "../../assets/files/resume.pdf";

export default class AboutMe extends Component {
  constructor() {
    super();
    this.pic = require("../../images/me.jpg");
  }

  render() {
    return (
      <div className="about-me">
        <div className="self-image">
          <img src={this.pic} alt="About me"></img>
        </div>
        <div className="content">
          <header>
            <h1>
              ABOUT <b>ME</b>
            </h1>
          </header>
          <p>
            <b>
              I desire to build technology product with high social and economic
              impact in data science and machine learning field.
            </b>
          </p>
          <div className="skillsets">
            <ul>
              <li>
                Programming Language: &nbsp;Python, Java, JavaScript, HTML, CSS
              </li>
              <li>
                DS / ML: &nbsp;Supervised Learning, Time-series Modeling, Data
                Viz, Nerual Network
              </li>
              <li>
                Web: &nbsp;Git, ReactJS, NodeJs, SQL, AWS EC2/Route 53, MongoDB,
                ExpressJs
              </li>
            </ul>
            <a href={resume} className="resume-btn" download="Kailing's resume">
              DOWNLOAD RESUME
            </a>
          </div>
        </div>
      </div>
    );
  }
}
