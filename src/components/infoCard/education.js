import React, { Component } from "react";
import InfoCard from "./infoCard";
// import education data
import educationJSON from "./education.json";

export default class Education extends Component {
  // require logo images
  getImage(imageName) {
    return require("../../images/logo/" + imageName + ".png");
  }

  getCard(educationJSON) {
    const cards = [];
    for (var school in educationJSON) {
      let data = educationJSON[school];

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
          {this.getCard(educationJSON)}
        </div>
      </div>
    );
  }
}
