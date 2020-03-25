import React from "react";
import "./App.css";
import AboutMe from "./components/aboutMe/aboutMe";

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
            Entrepuership, Data Science, Machine Learning, Extreme Sports
          </span>
        </div>
      </header>

      <div className="main">
        {/* About me */}
        <section className="about-me flex-container">
          <AboutMe />
        </section>
        {/* Education */}
        <section className="education flex-container">
          <h1>testing</h1>
        </section>
        {/* Experiences */}
        <section className="experiences flex-container"></section>
        {/* Project Work */}
        <section className="project flex-container"></section>
        {/* Extreme Sports */}
        <section className="extreme-sports flex-container"></section>
      </div>

      <footer></footer>
    </div>
  );
}

export default App;
