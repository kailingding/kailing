import React from "react";
import "./App.css";
import Header from "./components/header/header.js";
import AboutMe from "./components/aboutMe/aboutMe.js";
import Title from "./components/sectionTitle/title.js";
import Education from "./components/infoCard/education.js";
import Experiences from "./components/infoCard/experiences.js";
import Project from "./components/projects/project.js";
import Adventures from "./components/adventures/adventures.js";

function App() {
  return (
    <div className="App">
      <Header />

      {/* About me */}
      <div className="about">
        <section className="flex-container">
          <AboutMe />
        </section>
      </div>
      <div className="main">
        {/* Education */}
        <section className="education flex-container">
          <Title title="EDUCATION" />
          <Education />
        </section>

        {/* Experiences */}
        <section className="experiences flex-container">
          <Title title="EXPERIENCES" />
          <Experiences />
        </section>

        {/* Project Work */}
        <section className="project flex-container">
          <Title title="PROJECT WORK" name="project" />
          <Project />
        </section>

        {/* Extreme Sports */}
        <section className="extreme-sports flex-container">
          <Title title="Adventures" />
          <Adventures />
        </section>
      </div>

      <footer></footer>
    </div>
  );
}

export default App;
