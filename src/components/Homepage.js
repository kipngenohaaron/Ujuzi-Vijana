// src/components/Homepage.js
import React from 'react';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage" id="home">
      <div className="hero">
        <h1>Welcome to Ujuzi Vijana</h1>
        <p>Empowering young people with skills for a brighter future.</p>
        <a href="#programs" className="cta-button">Explore Programs</a>
      </div>
    </div>
  );
};

export default Homepage;
