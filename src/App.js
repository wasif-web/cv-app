import React from 'react';
import './App.css';

function App() {
  return (
    <div className="cv-container">
      <header>
        <h1>Muhammad Wasif Raza</h1>
      </header>
      <section className="education">
        <h2>Education</h2>
        <p>Graduation - [Karachi University]</p>
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>React.js</li>
          <li>JavaScript</li>
          <li>HTML5</li>
          <li>CSS3</li>
        </ul>
      </section>
      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li>E-Commerce Website</li>
          <li>Personal Portfolio Website</li>
          <li>Task Management App</li>
        </ul>
      </section>
    </div>
  );
}

export default App;



