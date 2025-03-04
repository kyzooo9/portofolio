import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Certificate from './Components/Certificate';
import SocialMedia from './Components/SocialMedia';
import ProjectDetails from './Components/ProjectDetails';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import logo from './Components/image/logo.jpg'; 
import './App.css';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false); // State to manage navbar visibility

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen); // Toggle navbar visibility
  };

  return (
    <Router>
      <div className="App">
        <header>
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <nav>
            <div className="hamburger" onClick={toggleNav}>
              {isNavOpen ? <FaTimes /> : <FaBars />} {/* Toggle between hamburger and close icon */}
            </div>
            <ul className={isNavOpen ? 'nav-links open' : 'nav-links'}>
              <li><a href="#about" onClick={toggleNav}>About Me</a></li>
              <li><a href="#projects" onClick={toggleNav}>Projects</a></li>
              <li><a href="#certificate" onClick={toggleNav}>Certificate</a></li>
              <li><a href="#social-media" onClick={toggleNav}>Social Media</a></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={
            <>
              <AboutMe />
              <Projects />
              <Certificate />
              <SocialMedia />
            </>
          } />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;