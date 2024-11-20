// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Ujuzi Vijana</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#programs">Programs</a></li>
          <li><a href="#contact">Contacts</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
