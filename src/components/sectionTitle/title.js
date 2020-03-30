import React, { Component } from "react";
import "./title.css";

export default class Title extends Component {
  render() {
    // for project section,
    if (this.props.name === "project") {
      return (
        <div className="menu-row">
          <div className="big-title">
            <header>
              <h1>{this.props.title}</h1>
            </header>
          </div>
          <div className="menu-container" hidden>
            <ul id="project-menu">
              <li id="all" onClick={this.handleClick}>
                All
              </li>
              <li id="ds/ml" onClick={this.handleClick}>
                DS / ML
              </li>
              <li id="web" onClick={this.handleClick}>
                Website
              </li>
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <header className="title">
            <h1>{this.props.title}</h1>
          </header>
        </div>
      );
    }
  }
}
