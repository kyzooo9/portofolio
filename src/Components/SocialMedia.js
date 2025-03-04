import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import './SocialMedia.css'; // Add this for styling

function SocialMedia() {
  return (
    <section id="social-media">
      <h2>Social Media</h2>
      <div className="social-icons">
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="icon" />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
      </div>
    </section>
  );
}

export default SocialMedia;