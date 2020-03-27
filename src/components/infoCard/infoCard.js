import React, { Component } from "react";
import "./infoCard.css";

export default class InfoCard extends Component {
  render() {
    const logo = this.props.logo;
    const link = this.props.link;
    const title = this.props.title;
    const subtitle = this.props.subtitle;

    const details = this.props.details;
    let lines = details.map((line, index) => (
      <p key={index} className="line">
        {line}
      </p>
    ));
    return (
      <div className="card">
        <a href={link} target="_">
          <img src={logo} alt={title + " logo"}></img>
        </a>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <div>{lines}</div>
      </div>
    );
  }
}
