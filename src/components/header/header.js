import React, { Component } from "react";
import "./header.css";

export default class Header extends Component {
  getIcon(iconName) {
    return require("../../images/socialMedia/" + iconName + ".png");
  }
  render() {
    return (
      <div>
        <header className="home">
          <div className="wrapper-content">
            <h3>HELLO!</h3>
            <h2>I'M KAILING DING</h2>
            <span>who build data product with love</span>
            <div></div>
            <div className="hashtags">
              <ul>
                <li className="label-pill label-lightblue">#Entrepuership</li>
                <li className="label-pill">#DataScience</li>
                <li className="label-pill">#MachineLearning</li>
                <li className="label-pill label-lightpink">#ExtremeSports</li>
              </ul>
            </div>
            <div className="social-media-link">
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/kailingding" target="_">
                    <img
                      src={this.getIcon("linkedin")}
                      alt="linkedin"
                      className="grayscale"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/kailingding" target="_">
                    <img
                      src={this.getIcon("github")}
                      alt="github"
                      className="grayscale"
                    ></img>
                  </a>
                </li>
                <li>
                  <img
                    src={this.getIcon("wechat")}
                    alt="linkedin"
                    className="grayscale"
                  />
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
