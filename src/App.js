import React from "react";
import "./App.css";
import AboutMe from "./components/aboutMe/aboutMe";
import Title from "./components/sectionTitle/title";

function App() {
  return (
    <div className="App">
      <header className="home">
        <div className="wrapper-content">
          <h3>HELLO!</h3>
          <h2>I'M KAILING DING</h2>
          <span>who build data product with love</span>
          <div></div>
          <div className="hashtags">
            <ul>
              <li className="label-pill label-lightblue">#Entrepuership</li>
              <li className="label-pill">#DataScience</li>
              <li className="label-pill">#MachineLearning</li>
              <li className="label-pill label-lightpink">#ExtremeSports</li>
            </ul>
          </div>
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
