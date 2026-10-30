import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetails.css';

const projects = [
  {
    id: 1, title: 'School Inventory', image: 'project1.png',
    details: 'The school inventory application is a program used to manage data on items at the school. Students and teachers can borrow items through this website. The application features CRUD (Create, Read, Update, Delete) functionality, which makes it easy for users to manage item data. The application was developed using PHP with the AdminLTE template.',
    image2: 'project1-2.png',
    details2: 'On the initial page, users are presented with a login form to access the inventory management application. After logging in, they are redirected to a dashboard that displays menus based on their assigned roles. Administrators have full access to manage inventory items and user accounts. Regular users can borrow available items, while teachers can borrow items and view borrowing transactions.'
  },
  { id: 2, title: '(ongoing) POS and Dashboard', image: 'p2.jpg', 
    details: 'The website provides an outdoor equipment rental platform where customers can browse available camping and outdoor gear, check rental prices, and place booking orders. Customers can select equipment based on their needs and submit rental requests through the platform.', 
    image2: 'p2-2.jpg', 
    details2: 'The dashboard functions as a Point of Sale (POS) and rental management system. Administrators can manage customer orders, monitor rental transactions, track the total number of bookings, and view rental revenue. It provides an overview of rental activities and business performance.' },
  { id: 3, title: 'E-Commerce', image: 'project3.png', 
    details: 'The website features an e-commerce platform for photography equipment, where users can browse available products, view product details and prices, and add items to their shopping cart. The shopping cart allows users to review their selected products and view the total purchase amount before proceeding to checkout.', 
    image2: 'project3-2.png', 
    details2: '' },
  { id: 4, title: 'Web Deployment and CI/CD', image: 'p4.jpeg', 
    details: 'The architecture uses Amazon Virtual Private Cloud (VPC) to create an isolated network environment across two Availability Zones. It separates resources into public and private subnets. An Elastic Load Balancer distributes incoming traffic, while an Auto Scaling Group manages EC2 instances across both Availability Zones to maintain application availability and scalability. Amazon S3 provides object storage, while a database service supports data storage.', 
    image2: 'p4-2.jpeg', 
    details2: 'The CI/CD pipeline automates the application deployment process using AWS developer tools. Developers push source code to GitHub, which triggers AWS CodeCommit, AWS CodeBuild, and AWS CodeDeploy to handle source management, application building, and deployment. Build artifacts are stored in Amazon S3 before deployment to EC2 instances. AWS CodePipeline coordinates the workflow, enabling a more consistent and automated deployment process.' },
];

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((item) => item.id === Number(id));

  if (!project) return <section className="project-details-page"><h2>Record not found</h2><button onClick={() => navigate('/')}>Return to journal</button></section>;

  return (
    <section className="project-details-page">
      <div className="detail-overline">FIELD NOTES · PROJECT 0{project.id}</div>
      <h1>{project.title}</h1>
      <div className="detail-divider"><span>✧</span></div>
      <div className="detail-entry">
        <img src={require(`./image/${project.image}`)} alt={project.title} />
        <p>{project.details}</p>
      </div>
      {project.image2 && (
        <div className="detail-entry detail-entry-reverse">
          <img src={require(`./image/${project.image2}`)} alt={`${project.title} additional view`} />
          {project.details2 && <p>{project.details2}</p>}
        </div>
      )}
      <button className="return-button" onClick={() => navigate(-1)}>← Back to projects</button>
    </section>
  );
}
export default ProjectDetails;
