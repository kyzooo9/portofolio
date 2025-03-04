import React, { useState  } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Certificate from './Components/Certificate';
import SocialMedia from './Components/SocialMedia';
import ProjectDetails from './Components/ProjectDetails';
import { FaBars, FaTimes } from 'react-icons/fa'; // Hamburger and close icons
import logo from './Components/image/logo.jpg'; // Replace with your logo path
import './App.css';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false); // State to manage navbar visibility

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen); // Toggle navbar visibility
  };

  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsNavOpen(false); // Close the navbar on mobile after clicking a link
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
              <li>
                <Link
                  to="/"
                  onClick={() => scrollToSection('about')}
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={() => scrollToSection('projects')}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={() => scrollToSection('Certificate')}
                >
                  Certificate
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={() => scrollToSection('social-media')}
                >
                  Social Media
                </Link>
              </li>
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