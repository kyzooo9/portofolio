import React from 'react';
import './Certificate.css';

function Certificate() {
  const records = [
    { id: 1, title: 'Cyber Security Competition', detail: '2nd Place, Finalist', year: '2024', mark: 'Ⅱ' },
    { id: 2, title: 'Cloud Computing Competition', detail: '3rd Place', year: '2025', mark: 'Ⅲ' },
    { id: 3, title: 'TOEIC', detail: 'Score 595', year: '2025', mark: '✧' },
    { id: 4, title: 'MTCNA', detail: 'MikroTik Certified Network Associate ', year: '2025', mark: '✦' },
    { id: 4, title: 'BNSP NETWORKING', detail: 'Data Center Technical Support Junior', year: '2025', mark: 'Ⅱ' },
  ];

  return (
    <div className="certificate-grid">
      {records.map((record) => (
        <article className="certificate-card" key={record.id}>
          <span className="certificate-mark">{record.mark}</span>
          <span className="certificate-year">RECORD · {record.year}</span>
          <h3>{record.title}</h3>
          <p>{record.detail}</p>
          <span className="certificate-rule" />
        </article>
      ))}
    </div>
  );
}
export default Certificate;
