import React from 'react';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import './SocialMedia.css'; // Add this for styling

function SocialMedia() {
  return (
    <section id="social-media">
      <h2>Social Media</h2>
      <div className="social-icons">
        <a href="https://wa.me/087864838293" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/jidan-alfarizzi-58a767320/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://github.com/Kyzoo9" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
      </div>
    </section>
  );
}

export default SocialMedia;