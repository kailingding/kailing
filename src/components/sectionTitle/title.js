import React, { Component } from "react";
import "./title.css";

export default class Title extends Component {
  render() {
    return (
      <div className="title">
        <header>
          <h1>{this.props.title}</h1>
        </header>
      </div>
    );
  }
}
