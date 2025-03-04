import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetails.css'; 

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: 'Inventaris Sekolah',
      image: 'project1.png',
      details: 'Aplikasi inventaris sekolah adalah aplikasi yang digunakan untuk mengelola data barang-barang yang ada di sekolah.Dan juga murid dan guru dapat meminjam barang melalui web ini. Aplikasi ini memiliki fitur CRUD (Create, Read, Update, Delete) yang memudahkan pengguna dalam mengelola data barang. Aplikasi ini dibuat menggunakan php dengan template AdminLte.',
      image2: 'project1-2.png',
      details2: 'pada page pertama terdapat form login untuk masuk kedalam aplikasi,setelah login akan diarahakan pada dasboard aplikasi yang berisi menu menu yang dapat digunakan oleh user.pada web ini admin memiliki akses penuh ke semua fitur,yang dapat mengelola barang user dan lain sebagainya.Jika login sebagai user maka hanya terdapat fitur meminjam saja.Jika login sebagai guru akan terdapat fitur meminjam dan transaksi peminjaman.',
    },
    {
      id: 2,
      title: 'Fotography',
      image: 'project4.JPG',
      details: 'Human Interest',
      image2: 'project4-2.jpg',
      details2:'Human Interest',
    },
    {
      id: 3,
      title: 'E-Commerce',
      image: 'project3.png',
      details: 'pada web ini user dapat membeli barang seperti e-commerce pada umumnya,user dapat memilih barang dan dimasukkan kedalam keranjang belanja dan melakukan pembayaran.',
      image2: 'project3-2.png',
      details2:'',
    },
    {
      id: 4,
      title: 'Project 4',
      image: 'project1.png',
      details: 'More details about Project 3...',
      image2: 'project4-2.jpg',
      details2:'Human Interest',
    },
  ];

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section id="project-details">
      <h2>{project.title}</h2>
      <div className="project-content">
        <div className="image-container">
          <img 
            src={require(`./image/${project.image}`)} 
            alt={project.title} 
            className="full-resolution-image"
          />
        </div>
        <div className="project-info">
          <p>{project.details}</p>          
        </div>
        <div className="image-container">
          <img 
            src={require(`./image/${project.image2}`)} 
            alt={project.title} 
            className="full-resolution-image"
          />
        </div>
        <div className="project-info">
          <p>{project.details2}</p>          
        </div>
        <div>
          <button onClick={() => navigate(-1)}>Back to Projects</button>
          </div>
      </div>
    </section>
  );
}

export default ProjectDetails;