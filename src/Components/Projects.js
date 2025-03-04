import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

function Projects() {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: 'Inventaris sekolah',
      description: 'web ini bertujuan untuk mendata peralatan sekolah yang dapat dipinjam oleh guru,murid,dan staff sekolah.',
      image: '/project1.png', // Add image path
    },
    {
      id: 2,
      title: 'Photography',
      description: 'Human interest fotography.',
      image: '/project4.JPG', // Add image path
    },
    {
      id: 3,
      title: 'E-Commerce',
      description: 'web e-commerce untuk jual beli barang barang.',
      image: '/project3.png', // Add image path
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'Description of Project 4.',
      image: '/user.jpg', // Add image path
    },
  ];

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => handleProjectClick(project.id)}
          >
            <div className="project-image">
              <img src={require(`./image${project.image}`)} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;