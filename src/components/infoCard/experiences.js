import React, { Component } from "react";
import InfoCard from "./infoCard";
// import experiences data
import expJSON from "./experiences.json";

export default class Experiences extends Component {
  // require logo images function
  getImage(imageName) {
    return require("../../images/logo/" + imageName + ".png");
  }

  getCard(expJSON) {
    const cards = [];
    for (var org in expJSON) {
      let data = expJSON[org];
      cards.push(
        <InfoCard
          key={data["logo"]}
          logo={this.getImage(data["logo"])}
          link={data["link"]}
          title={data["title"]}
          subtitle={data["subtitle"]}
          details={data["details"]}
        ></InfoCard>
      );
    }
    return cards;
  }
  render() {
    const cardsStyle = {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between"
    };

    return (
      <div>
        <div className="cards" style={cardsStyle}>
          {this.getCard(expJSON)}
        </div>
      </div>
    );
  }
}
