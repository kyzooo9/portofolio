import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Example project data (replace with real data or fetch from an API)
  const projects = [
    { id: 1, title: 'Project 1', description: 'Detailed description of Project 1.' },
    { id: 2, title: 'Project 2', description: 'Detailed description of Project 2.' },
    { id: 3, title: 'Project 3', description: 'Detailed description of Project 3.' },
    { id: 4, title: 'Project 4', description: 'Detailed description of Project 4.' },
  ];

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section id="project-details">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <button onClick={() => navigate(-1)}>Back to Projects</button>
    </section>
  );
}

export default ProjectDetails;