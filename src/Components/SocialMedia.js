import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import './SocialMedia.css';

function SocialMedia() {
  return (
    <div className="social-links">
      <a href="ahmadalfarizzi4@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /><span>Gmail</span><b>↗</b></a>
      <a href="https://www.linkedin.com/in/ahmad-alfarizzi-58a767320" target="_blank" rel="noopener noreferrer"><FaLinkedin /><span>LinkedIn</span><b>↗</b></a>
      <a href="https://github.com/Kyzooo9" target="_blank" rel="noopener noreferrer"><FaGithub /><span>GitHub</span><b>↗</b></a>
    </div>
  );
}
export default SocialMedia;
