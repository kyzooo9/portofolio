import React from 'react';
import './AboutMe.css';
import profilePhoto from './image/ji.jpg';

function AboutMe() {
  return (
    <div className="about-content">
      <div className="about-portrait">
        <div className="portrait-ornament">✧</div>
        <img src={profilePhoto} alt="Portrait" />
        <span className="portrait-caption">THE PERSON BEHIND THE WORK</span>
      </div>
      <div className="about-description">
        <p className="component-kicker">A LITTLE ABOUT THE AUTHOR</p>
        <h3>Understanding systems<br />from infrastructure to security.</h3>
        <p>
          I am an Internet Engineering Technology student with a strong interest in Cloud Computing and Cybersecurity. 
          My curiosity about cloud infrastructure, server virtualization, and vulnerability discovery drives me to explore these fields further. 
          I continuously develop my technical skills through hands-on projects, laboratory practices, CTF challenges, competitions, and independent learning.
        </p>
        <a href="/cv.pdf" download="cv.pdf" className="cv-download-link">Download my CV <span>↗</span></a>
      </div>
    </div>
  );
}
export default AboutMe;
