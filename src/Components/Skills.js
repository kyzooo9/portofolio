import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

const skillGroups = [
  {
    title: 'Network & PCAP Analysis',
    symbol: '⌁',
    tools: ['Wireshark', 'tcpdump', 'PCAP Analysis'],
  },
  {
    title: 'Web Application Security',
    symbol: '◇',
    tools: ['Burp Suite', 'OWASP ZAP', 'Postman'],
  },
  {
    title: 'Reconnaissance & Vulnerability Assessment',
    symbol: '⌖',
    tools: ['Nmap'],
  },
  {
    title: 'Security Testing Labs',
    symbol: '✧',
    tools: ['Kali Linux', 'Metasploit Framework', 'Gobuster', 'SearchSploit'],
  },
  {
    title: 'Computer Networking',
    symbol: '⌬',
    tools: ['TCP/IP', 'VLAN', 'Routing & Switching', 'Subnetting'],
  },
  {
    title: 'Cloud Computing & Infrastructure',
    symbol: '☁',
    tools: ['AWS',  'Docker', 'Cloudflare', 'Auto Scaling', 'CI/CD'],
  },
  {
    title: 'Development & Version Control',
    symbol: '⌘',
    tools: ['Git', 'GitHub', 'VS Code', 'Linux CLI'],
  },
  {
    title: 'Web Development',
    symbol: '</>',
    tools: ['HTML', 'CSS', 'JavaScript', 'PHP'],
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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className={`skills-content ${visible ? 'is-visible' : ''}`}>
      <p className="skills-intro">
        A growing collection of tools I explore for networking, application security,
        vulnerability assessment, and digital forensics.
      </p>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <article className="skill-card" key={group.title} style={{ '--card-index': index }}>
            <div className="skill-card-heading">
              <span className="skill-symbol" aria-hidden="true">{group.symbol}</span>
              <h3>{group.title}</h3>
            </div>
            <div className="skill-tags">
              {group.tools.map((tool, toolIndex) => (
                <span className="skill-tag" key={tool} style={{ '--tool-index': toolIndex }}>
                  {tool}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <p className="skills-footnote">Tools and technologies I am learning and practicing.</p>
    </div>
  );
}
