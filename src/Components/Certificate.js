import React from 'react';
import './Certificate.css';

function Certificate() {

  const Certificate = [
    {
      id: 1,
      description: '2ND PLACE IN THE CYBER SECURITY COMPETITION 2024 ',
      description1: '3RD PLACE IN THE CLOUD COMPUTING COMPETITION 2025 ',
      description3: 'TOEIC AT SCORE 595 ',
      description4: 'LIMA BENUA INTERSHIP CERTIFICATE',
      
    },
  ];

  

  return (
    <section id="Certificate">
      <h2>Certificate</h2>
      <div className="Certificate-grid">
        {Certificate.map((Certificate) => (
          <div
            key={Certificate.id}
            className="Certificate-card"
           
          >
            <h3>{Certificate.title}</h3>
            <p>{Certificate.description}</p>
            <p>{Certificate.description1}</p>
            <p>{Certificate.description3}</p>
            <p>{Certificate.description4}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificate;