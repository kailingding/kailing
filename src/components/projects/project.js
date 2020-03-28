import React, { Component } from "react";
import "./project.css";
import projectData from "./projectData.json";

export default class Project extends Component {
  // image require function
  getImage(imageName) {
    return require("../../images/projects/" + imageName + ".png");
  }
  // icon require function
  getIcon(iconName) {
    return require("../../images/techIcon/" + iconName + ".png");
  }

  // linkOverlay function creates the hover effect when hovering on the project image
  linkOverlay(name, links) {
    const overlay = [];
    for (var linkType in links) {
      // if the project is in development, there will be no hover effect
      let icon = linkType;
      if (linkType === "indev") {
        overlay.push(
          <a
            key={name + linkType}
            href="https://markding.me"
            className="noHover"
          >
            <div key={name + linkType} style={{ display: "flex" }}>
              <img
                key={name + linkType}
                src={this.getIcon(linkType)}
                alt={"indev icon"}
                style={{ verticalAlign: "middle" }}
              />
              <span
                key={name + linkType}
                style={{ whiteSpace: "nowrap", margin: "auto 0" }}
              >
                {links[linkType]}
              </span>
            </div>
          </a>
        );
        return overlay;
      } else {
        overlay.push(
          <a
            key={name}
            href={links[linkType]}
            target="_"
            onMouseOver={e => {
              e.currentTarget.firstChild.src = this.getIcon(icon + "-blue");
            }}
            onMouseOut={e =>
              (e.currentTarget.firstChild.src = this.getIcon(icon))
            }
          >
            <img
              key={name}
              src={this.getIcon(linkType)}
              alt={linkType + " icon"}
            />
            <span key={name}>
              {(() => {
                if (icon === "web") {
                  return "Visit";
                } else {
                  return icon.charAt(0).toUpperCase() + icon.slice(1);
                }
              })()}
            </span>
          </a>
        );
      }
    }
    return overlay;
  }

  // generate project card
  generateCard(projectData) {
    const cards = [];
    for (var project in projectData) {
      let data = projectData[project];
      cards.push(
        <div key={project} className="project-card">
          <figure className="image">
            <img
              src={this.getImage(data["name"])}
              alt={data["name"]}
              className="project-image"
            />
            <div className="link-overlay">
              <div className="link">
                {this.linkOverlay(project, data["links"])}
              </div>
            </div>
          </figure>
          <div className="card-content">
            <h3>
              {data["title"]}
              {(() => {
                // team project -> green label, personal project -> blue label
                if (data["teamType"] === "Team") {
                  return <span className="green-label">Team</span>;
                } else if (data["teamType"] === "Personal") {
                  return <span className="blue-label">Personal</span>;
                }
              })()}
            </h3>
            <p className="gray-text">{data["description"]}</p>
            <p>Skill sets: {data["skillsets"]}</p>
          </div>
        </div>
      );
    }
    return cards;
  }

  render() {
    return (
      <div className="project-container">{this.generateCard(projectData)}</div>
    );
  }
}
