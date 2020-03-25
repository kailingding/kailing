import React from "react";
import "./App.css";
import AboutMe from "./components/aboutMe/aboutMe";
import Title from "./components/sectionTitle/title";

function App() {
  return (
    <div className="App">
      <header className="home">
        <h2 className="home-buttom">
          <a href="#home">𝕂𝔸𝕀𝕃𝕀ℕ𝔾 𝔻𝕀ℕ𝔾</a>
        </h2>
        <div className="wrapper-content">
          <h3>HELLO!</h3>
          <h2>I'M KAILING DING</h2>
          <span>
            who build data product with love Entrepuership, Data Science,
            Machine Learning, Extreme Sports
          </span>
        </div>
      </header>
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
        </section>

        {/* Experiences */}
        <section className="experiences flex-container">
          <Title title="EXPERIENCES" />
        </section>

        {/* Project Work */}
        <section className="project flex-container">
          <Title title="PROJECT WORK" />
        </section>

        {/* Extreme Sports */}
        <section className="extreme-sports flex-container">
          <Title title="EXTREME SPORTS" />
        </section>
      </div>

      <footer></footer>
    </div>
  );
}

export default App;
