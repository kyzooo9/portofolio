import React from 'react';
import './AboutMe.css'; // Add this for styling
import profilePhoto from './image/ji.jpg';

  

function AboutMe() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="profile-picture">
          <img src={profilePhoto} alt="Profile" />
        </div>
        <div className="about-description">   
          <p>
            Halo nama saya Ahmad Alfarizzi saya adalah seorang siswa di SMK ANTARTIKA 2 SIDOARJO jurusan Teknik Komputer Jaringan. Saya memiliki ketertarikan dalam dunia teknologi dan ingin menjadi seorang web developer,Saya memiliki pengalaman dalam membuat web static menggunakan Reactjs. Saya juga memiliki pengalaman dalam membuat aplikasi web CRUD database menggunakan php.Dan juga memiliki pengalaman dalam bidang cyber security.Saya memiliki kemampuan dalam membuat web yang interaktif dan responsif.<br/>download cv saya disini<br/> <a href="/cv.pdf" download="cv.pdf" className="cv-download-link">
  download cv</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;