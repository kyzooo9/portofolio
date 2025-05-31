import React from 'react';
import './AboutMe.css'; // Add this for styling
import profilePhoto from './image/ji.jpg'; // Replace with your PNG image path

function AboutMe() {
  return (
    <section id="about">
    
      <div className="about-content">
        <div className="image-container">
          <img src={profilePhoto} alt="Profile" />
        </div>
        <div className="about-description">
          <p>
            Turning <span className="color">ideas</span> into real-life products is my calling. I am a passionate developer with
            experience in building modern web applications. My goal is to create impactful and
            user-friendly solutions that solve real-world problems.
            <span className="cv">
            <br/>download cv<br/> <a href="/cv.pdf" download="cv.pdf" className="cv-download-link">
  download cv</a></span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;