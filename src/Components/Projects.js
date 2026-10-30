import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

function Projects() {
  const navigate = useNavigate();
  const projects = [
    { id: 1, title: 'School Inventory', description: 'Web Bassed Aplication to Manage School Inventory', image: 'project1.png', category: 'WEB APPLICATION' },
    { id: 2, title: '(ongoing) POS and Dashboard', description: 'Web Bassed Aplication to Order, Manage order, and Dashboard', image: 'p2.jpg', category: 'WEB APPLICATION' },
    { id: 3, title: 'E-Commerce', description: 'Photography Article and E-commerce website', image: 'project3.png', category: 'WEB APPLICATION' },
    { id: 4, title: 'Web Deployment and CI/CD', description: 'Web Deployment and CI/CD on AWS environmet', image: 'p4.jpeg', category: 'Cloud Computing' },
  ];

  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <button type="button" key={project.id} className="project-card" onClick={() => navigate(`/project/${project.id}`)}>
          <div className="project-image">
            <img src={require(`./image/${project.image}`)} alt={project.title} />
            <span className="project-number">PROJECT · 0{index + 1}</span>
            <span className="project-open">↗</span>
          </div>
          <div className="project-card-copy">
            <span className="project-category">{project.category}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </button>
      ))}
    </div>
  );
}
export default Projects;
