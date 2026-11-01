import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

const skillAreas = [
  {
    title: 'Network Engineering',
    description: 'Protocols, routing, and traffic analysis.',
    symbol: '⌁',
    tools: ['Wireshark', 'tcpdump', 'PCAP Analysis', 'TCP/IP', 'VLAN', 'Routing & Switching', 'Subnetting'],
  },
  {
    title: 'Cybersecurity',
    description: 'Reconnaissance and vulnerability assessment.',
    symbol: '◇',
    tools: ['Burp Suite', 'OWASP ZAP', 'Postman', 'Nmap', 'Kali Linux', 'Metasploit Framework', 'Gobuster', 'SearchSploit'],
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Deployment, containers, and cloud services.',
    symbol: '☁',
    tools: ['AWS', 'Docker', 'Cloudflare', 'Auto Scaling', 'CI/CD'],
  },
  {
    title: 'Web Development',
    description: 'Frontend and backend development.',
    symbol: '</>',
    tools: ['Git', 'GitHub', 'VS Code', 'Linux CLI', 'HTML', 'CSS', 'JavaScript', 'PHP'],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(element);
      }
    }, { threshold: 0.12 });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className={`skills-content ${visible ? 'is-visible' : ''}`}>
      <section aria-labelledby="technical-skills-title">
        <h2 className="skills-section-title" id="technical-skills-title">Technical Skills</h2>
        <p className="skills-intro">Areas of knowledge and practical capabilities.</p>
        <div className="skills-grid">
          {skillAreas.map((area, index) => (
            <article className="skill-card" key={area.title} style={{ '--card-index': index }}>
              <div className="skill-card-heading">
                <span className="skill-symbol" aria-hidden="true">{area.symbol}</span>
                <h4>{area.title}</h4>
              </div>
              <p className="skill-card-description">{area.description}</p>
              <div className="skill-tools">
                <div className="skill-tools-heading">
                  <h5>Tools &amp; Technologies</h5>
                  <p>Software, platforms, and technologies I work with.</p>
                </div>
                <ul className="skill-tags" aria-label={`${area.title} tools`}>
                  {area.tools.map((tool, toolIndex) => (
                    <li className="skill-tag" key={tool} style={{ '--tool-index': toolIndex }}>{tool}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
