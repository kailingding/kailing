import React, { Component } from "react";
import "./adventures.css";

export default class Adventures extends Component {
  render() {
    return (
      <div className="gallery-container">
        <div className="photo-card">
          <img
            src={require("../../images/extremeSports/snowboard/snowboard_1.png")}
            alt="snowboard_1"
          />
        </div>
        <div className="photo-card">
          <img
            src={require("../../images/extremeSports/hiking/hiking_1.png")}
            alt="hiking_1"
          />
        </div>
        <div className="photo-card">
          <img
            src={require("../../images/extremeSports/scuba/scuba_1.png")}
            alt="scuba_1"
          />
        </div>
      </div>
    );
  }
}
