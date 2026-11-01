import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProjectDetails.css';

const projects = [
  {
    id: 1,
    title: 'School Inventory Management System',
    shortTitle: 'School Inventory',
    image: 'project1.png',
    imageWidth: 1897,
    imageHeight: 1079,
    imageAlt: 'School equipment inventory table with item availability and record actions',
    imageCaption: 'Inventory dashboard · equipment records and availability',
    screenshots: [
      { file: 'project1-2.png', width: 1919, height: 1199, alt: 'Signed-in account profile with administrator role', caption: 'Account profile · user details and assigned role' },
    ],
    category: 'Web application',
    status: 'Completed',
    summary: 'A PHP-based school inventory system for managing equipment and borrowing requests across administrator, teacher, and student accounts.',
    overview: 'The application centralizes school equipment records and borrowing activity. Administrators manage inventory and accounts, students request available equipment, and teachers review borrowing requests.',
    challenge: 'Schools need current equipment records and a clear borrowing process. Without a shared workflow, it is harder to check item availability, track requests, and give each user the right access.',
    approach: 'I developed a web-based inventory application with three account roles. Role-specific access separates administration from student borrowing and teacher review.',
    flowTitle: 'Borrowing workflow',
    flow: ['Student browses available equipment', 'Student submits a borrowing request', 'Teacher reviews the request', 'Teacher approves or rejects it'],
    features: [
      { title: 'Inventory management', text: 'Administrators can add, update, and remove equipment records and manage item availability.' },
      { title: 'Role-based access', text: 'Administrator, teacher, and student accounts receive access to the features for their responsibilities.' },
      { title: 'Borrowing requests', text: 'Students browse available equipment and submit requests; teachers review, approve, or reject them.' },
      { title: 'Account management', text: 'Administrators manage accounts and oversee administrative functions.' },
    ],
    implementation: 'The application uses PHP, with the AdminLTE dashboard template for the administrative interface. Role-based permissions separate inventory and account management from student requests and teacher approvals.',
    contributions: [
      'Developed the PHP inventory management application using the AdminLTE dashboard template.',
      'Implemented role-specific access for administrator, teacher, and student accounts.',
      'Built equipment record management and the borrowing request review workflow.',
    ],
    technologyGroups: [
      { label: 'Application', items: ['PHP', 'HTML', 'CSS', 'JavaScript'] },
      { label: 'Interface', items: ['AdminLTE'] },
    ],
  },
  {
    id: 2,
    title: 'Outdoor Equipment Rental Portal',
    shortTitle: 'Outdoor Rental Portal',
    image: 'p2.jpg',
    imageWidth: 1600,
    imageHeight: 944,
    imageAlt: 'Outdoor equipment rental storefront',
    imageCaption: 'Rental storefront · equipment and booking entry point',
    screenshots: [
      { file: 'p2-2.jpg', width: 1600, height: 944, alt: 'Rental management dashboard for orders and business activity', caption: 'Operations dashboard · orders, inventory, and financial records' },
    ],
    category: 'Web application',
    status: 'In progress',
    summary: 'A PHP-based rental portal for browsing outdoor equipment, placing bookings, and paying online, with a separate administrative dashboard.',
    overview: 'Customers browse outdoor equipment, select items, place rental orders, and make online payments. Administrators use a separate interface to manage orders, inventory, and financial records.',
    challenge: 'Rental operations connect several tasks: presenting available equipment, processing bookings and payments, and keeping inventory and financial records current.',
    approach: 'I developed a customer-facing rental flow alongside an administrative dashboard. The two account roles have separate interfaces for booking and payment activity or operational management.',
    flowTitle: 'Customer and operations flow',
    flow: ['Browse equipment and item details', 'Select items and review an order', 'Submit the rental and complete payment', 'Administrators manage orders, inventory, and finances'],
    features: [
      { title: 'Equipment catalogue', text: 'Customers browse available outdoor gear and review item details before choosing equipment.' },
      { title: 'Rental orders', text: 'Customers select equipment, review their order, and submit a rental request.' },
      { title: 'Online payment', text: 'A payment gateway integration supports payment during the order process.' },
      { title: 'Operations dashboard', text: 'Administrators manage orders and inventory and review financial records.' },
    ],
    implementation: 'The application was developed using PHP. Customer pages handle equipment browsing, rental orders, and payment processing; administrator pages support order, inventory, and financial management. The available project information does not identify the payment provider.',
    contributions: [
      'Developed the PHP rental portal and its customer-facing equipment browsing and booking flow.',
      'Integrated the online payment gateway described for rental orders.',
      'Built administrative workflows for orders, inventory, and financial records.',
    ],
    technologyGroups: [
      { label: 'Application', items: ['PHP', 'HTML', 'CSS', 'JavaScript'] },
      { label: 'Integration', items: ['Payment gateway'] },
    ],
  },
  {
    id: 3,
    title: 'Photography E-commerce Platform',
    shortTitle: 'Photography E-commerce',
    image: 'project3.png',
    imageWidth: 1920,
    imageHeight: 1200,
    imageAlt: 'Photography equipment storefront',
    imageCaption: 'Storefront · photography equipment catalogue',
    screenshots: [
      { file: 'project3-2.png', width: 1920, height: 1200, alt: 'Photography store shopping experience', caption: 'Shopping experience · product selection and review' },
    ],
    category: 'Web application',
    status: 'In progress',
    summary: 'An experimental photography platform connecting educational articles and equipment recommendations to an online product catalogue.',
    overview: 'The platform brings photography articles, equipment recommendations, and product listings together. Readers can move from learning about photography to discovering and shopping for related equipment.',
    challenge: 'Photography enthusiasts often use separate sources to learn techniques, discover suitable equipment, and find products. The project explores bringing those steps into one experience.',
    approach: 'I developed a content-to-commerce journey: photography articles introduce topics and recommendations, which lead readers to relevant products in the equipment catalogue.',
    flowTitle: 'Content-to-commerce journey',
    flow: ['Explore a photography article', 'Discover related equipment recommendations', 'Browse product information', 'Continue to the shopping experience'],
    features: [
      { title: 'Photography articles', text: 'Readers explore articles about photography equipment, techniques, and related topics.' },
      { title: 'Equipment recommendations', text: 'Articles connect readers with equipment relevant to the subject they are exploring.' },
      { title: 'Product catalogue', text: 'Visitors browse photography equipment and review product information.' },
      { title: 'Content and product management', text: 'Administrator accounts manage articles and products; regular accounts browse content and shop.' },
    ],
    implementation: 'This experimental web project combines content management and e-commerce functionality. It connects photography articles and product recommendations to an equipment catalogue, with separate administrator and regular-user access.',
    contributions: [
      'Developed the photography article and equipment catalogue experience.',
      'Connected article recommendations with product discovery and shopping.',
      'Included administrator workflows for managing site content and products.',
    ],
    technologyGroups: [],
  },
  {
    id: 4,
    title: 'AWS Cloud Infrastructure & CI/CD',
    shortTitle: 'AWS Infrastructure & CI/CD',
    image: 'p4.jpeg',
    imageWidth: 1600,
    imageHeight: 1034,
    imageAlt: 'AWS infrastructure architecture diagram',
    imageCaption: 'Infrastructure architecture · VPC, application hosting, and AWS services',
    screenshots: [
      { file: 'p4-2.jpeg', width: 1600, height: 872, alt: 'AWS CI/CD deployment workflow diagram', caption: 'Deployment workflow · source, build, and release stages' },
    ],
    category: 'Cloud computing',
    status: 'Completed',
    summary: 'An AWS deployment project combining public and private network segments, application hosting services, and an automated CI/CD workflow integrated with GitHub.',
    overview: 'The project combines an AWS VPC, EC2, S3, RDS, Elastic Load Balancing, and Auto Scaling for application hosting. A CI/CD pipeline connects GitHub with AWS developer services to automate builds and deployments.',
    challenge: 'Cloud deployment requires clear network boundaries, controlled access between resources, and a repeatable way to move application changes from source code to deployment.',
    approach: 'I configured an AWS environment with public and private subnets and least-privilege security groups. I also integrated GitHub with AWS CodePipeline, CodeCommit, CodeBuild, and CodeDeploy for the application delivery workflow.',
    flowTitle: 'Automated deployment workflow',
    flow: ['Code changes are pushed to GitHub', 'AWS CodePipeline coordinates the workflow', 'CodeCommit and CodeBuild handle source and build stages', 'CodeDeploy releases the application to EC2'],
    features: [
      { title: 'VPC network segmentation', text: 'Public and private subnets separate externally accessible components from internal resources.' },
      { title: 'Application hosting', text: 'EC2 instances host the application; RDS provides database services and S3 provides object storage.' },
      { title: 'Traffic and capacity', text: 'Elastic Load Balancing distributes application traffic, while Auto Scaling adjusts EC2 capacity according to configured policies.' },
      { title: 'Restricted network access', text: 'Security groups follow least-privilege rules and allow only the communication required by each component.' },
      { title: 'CI/CD pipeline', text: 'GitHub is integrated with CodePipeline, CodeCommit, CodeBuild, and CodeDeploy to coordinate source, build, and deployment stages.' },
    ],
    implementation: 'The infrastructure runs within an AWS VPC with public and private subnets. EC2 hosts the application, RDS provides database services, and S3 provides object storage. Elastic Load Balancing distributes incoming application traffic, while Auto Scaling manages EC2 capacity according to configured policies. Security groups restrict communication to the ports and services needed by each component. The CI/CD workflow integrates GitHub with AWS CodePipeline, CodeCommit, CodeBuild, and CodeDeploy. The available project description does not specify the placement of gateways or database subnets.',
    contributions: [
      'Configured the AWS VPC with public and private subnet segmentation.',
      'Set up EC2, RDS, S3, Elastic Load Balancing, and Auto Scaling for the described hosting environment.',
      'Configured least-privilege security group access for application components.',
      'Integrated GitHub with AWS CodePipeline, CodeCommit, CodeBuild, and CodeDeploy.',
    ],
    technologyGroups: [
      { label: 'Infrastructure', items: ['Amazon VPC', 'Amazon EC2', 'Amazon RDS', 'Amazon S3'] },
      { label: 'Traffic and capacity', items: ['Elastic Load Balancing', 'Auto Scaling'] },
      { label: 'Delivery', items: ['GitHub', 'CodePipeline', 'CodeCommit', 'CodeBuild', 'CodeDeploy'] },
    ],
  },
];

const projectSequence = [4, 1, 2, 3];
const orderedProjects = projectSequence.map((projectId) => projects.find((project) => project.id === projectId)).filter(Boolean);

function ProjectGallery({ project, openLightbox }) {
  if (!project.screenshots.length) return null;

  return (
    <section className="case-section gallery-section" aria-labelledby="application-gallery-title">
      <div className="section-heading-row">
        <div>
          <p className="case-kicker">Application gallery</p>
          <h2 id="application-gallery-title">Screens from the project</h2>
        </div>
        <p className="gallery-help">Select an image to enlarge it.</p>
      </div>
      <div className="case-gallery-grid">
        {project.screenshots.map((shot, index) => (
          <figure className="case-gallery-figure" key={shot.file}>
            <button
              className="screenshot-trigger"
              type="button"
              onClick={() => openLightbox(index + 1)}
              aria-label={`Enlarge screenshot: ${shot.caption}`}
            >
              <img src={require(`./image/${shot.file}`)} alt={shot.alt} width={shot.width} height={shot.height} loading="lazy" />
            </button>
            <figcaption>{shot.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function ProjectLightbox({ project, index, onClose, onChange }) {
  const dialogRef = useRef(null);
  const current = index === null ? null : [
    { file: project.image, alt: project.imageAlt, caption: project.imageCaption },
    ...project.screenshots,
  ][index];
  const images = [{ file: project.image, alt: project.imageAlt, caption: project.imageCaption }, ...project.screenshots];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index !== null && !dialog.open) dialog.showModal();
    if (index === null && dialog.open) dialog.close();
  }, [index]);

  const step = (direction) => onChange((index + direction + images.length) % images.length);
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      step(-1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      step(1);
    }
  };

  return (
    <dialog
      className="project-lightbox"
      ref={dialogRef}
      aria-label={`${project.title} screenshot viewer`}
      onClose={onClose}
      onCancel={onClose}
      onKeyDown={handleKeyDown}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
    >
      {current && (
        <div className="lightbox-content">
          <div className="lightbox-toolbar">
            <p>{project.title}</p>
            <button className="lightbox-close" type="button" onClick={onClose} autoFocus aria-label="Close screenshot viewer">Close</button>
          </div>
          <div className="lightbox-image-row">
            {images.length > 1 && <button className="lightbox-nav" type="button" onClick={() => step(-1)} aria-label="Previous screenshot">Previous</button>}
            <img src={require(`./image/${current.file}`)} alt={current.alt} width={current.width ?? project.imageWidth} height={current.height ?? project.imageHeight} />
            {images.length > 1 && <button className="lightbox-nav" type="button" onClick={() => step(1)} aria-label="Next screenshot">Next</button>}
          </div>
          <p className="lightbox-caption">{current.caption} · {index + 1} of {images.length}</p>
        </div>
      )}
    </dialog>
  );
}

function ProjectNavigation({ project }) {
  const index = orderedProjects.findIndex((item) => item.id === project.id);
  const previous = orderedProjects[index - 1];
  const next = orderedProjects[index + 1];

  return (
    <nav className="project-navigation" aria-label="Project navigation">
      {previous ? (
        <Link className="project-nav-link previous-project" to={`/project/${previous.id}`}>
          <span className="project-nav-direction">← Previous project</span>
          <span className="project-nav-content">
            <img src={require(`./image/${previous.image}`)} alt="" width={previous.imageWidth} height={previous.imageHeight} loading="lazy" />
            <span><small>Project {String(index).padStart(2, '0')}</small><strong>{previous.shortTitle}</strong></span>
          </span>
        </Link>
      ) : <span className="project-nav-empty" />}
      <Link className="project-archive-link" to="/projects">Back to project archive</Link>
      {next ? (
        <Link className="project-nav-link next-project" to={`/project/${next.id}`}>
          <span className="project-nav-direction">Next project →</span>
          <span className="project-nav-content">
            <span><small>Project {String(index + 2).padStart(2, '0')}</small><strong>{next.shortTitle}</strong></span>
            <img src={require(`./image/${next.image}`)} alt="" width={next.imageWidth} height={next.imageHeight} loading="lazy" />
          </span>
        </Link>
      ) : <span className="project-nav-empty" />}
    </nav>
  );
}

function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === Number(id));
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const projectNumber = projectSequence.indexOf(project?.id) + 1;

  useEffect(() => {
    if (!project) return undefined;
    const previousTitle = document.title;
    document.title = `${project.title} · Alfarizzi`;
    return () => { document.title = previousTitle; };
  }, [project]);

  if (!project) {
    return (
      <section className="project-details-page project-not-found">
        <h1>Project not found</h1>
        <p>This project is not in the archive.</p>
        <Link className="case-action-link" to="/projects">Back to projects</Link>
      </section>
    );
  }

  const technologies = project.technologyGroups.flatMap((group) => group.items);

  return (
    <article className="project-details-page">
      <header className="project-hero">
        <div className="project-hero-copy">
          <p className="project-label">Project archive / Project {String(projectNumber).padStart(2, '0')}</p>
          <h1>{project.title}</h1>
          <p className="detail-summary">{project.summary}</p>
          {technologies.length > 0 && (
            <ul className="hero-tech-list" aria-label="Technologies used">
              {technologies.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
          )}
        </div>
        <aside className="project-meta-panel" aria-label="Project details">
          <dl>
            <div><dt>Category</dt><dd>{project.category}</dd></div>
            <div><dt>Status</dt><dd>{project.status}</dd></div>
          </dl>
        </aside>
      </header>

      <figure className="featured-project-figure">
        <button className="screenshot-trigger featured-screenshot-trigger" type="button" onClick={() => setLightboxIndex(0)} aria-label={`Enlarge featured image: ${project.imageCaption}`}>
          <img src={require(`./image/${project.image}`)} alt={project.imageAlt} width={project.imageWidth} height={project.imageHeight} fetchPriority="high" />
        </button>
        <figcaption>{project.imageCaption}</figcaption>
      </figure>

      <section className="case-section overview-section" aria-labelledby="project-overview-title">
        <div className="section-heading-row">
          <div><p className="case-kicker">The project</p><h2 id="project-overview-title">Project overview</h2></div>
          <p className="overview-lead">{project.overview}</p>
        </div>
      </section>

      <div className="challenge-approach-grid">
        <section className="case-section challenge-block" aria-labelledby="project-challenge-title">
          <p className="case-kicker">The context</p>
          <h2 id="project-challenge-title">The challenge</h2>
          <p>{project.challenge}</p>
        </section>
        <section className="case-section approach-block" aria-labelledby="project-approach-title">
          <p className="case-kicker">The response</p>
          <h2 id="project-approach-title">The approach</h2>
          <p>{project.approach}</p>
        </section>
      </div>

      <section className="case-section feature-section" aria-labelledby="project-features-title">
        <div className="section-heading-row">
          <div><p className="case-kicker">What it does</p><h2 id="project-features-title">Core features</h2></div>
          {project.id === 1 && <p className="feature-aside">Three account roles shape how equipment and borrowing requests move through the system.</p>}
        </div>
        {project.id === 1 && (
          <div className="role-strip" aria-label="Account roles">
            <div><h3>Administrator</h3><p>Manages inventory records and user accounts.</p></div>
            <div><h3>Teacher</h3><p>Reviews borrowing requests and approves or rejects them.</p></div>
            <div><h3>Student</h3><p>Browses available equipment and submits requests.</p></div>
          </div>
        )}
        <div className="feature-list">
          {project.features.map((feature, index) => (
            <article className="feature-item" key={feature.title}>
              <span className="feature-number">{String(index + 1).padStart(2, '0')}</span>
              <div><h3>{feature.title}</h3><p>{feature.text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="case-section implementation-section" aria-labelledby="project-implementation-title">
        <div className="section-heading-row">
          <div><p className="case-kicker">Under the surface</p><h2 id="project-implementation-title">Technical implementation</h2></div>
          <p className="implementation-copy">{project.implementation}</p>
        </div>
        <div className="workflow-panel">
          <h3>{project.flowTitle}</h3>
          <ol className="workflow-list">
            {project.flow.map((step) => <li key={step}>{step}</li>)}
          </ol>
        </div>
      </section>

      <ProjectGallery project={project} openLightbox={setLightboxIndex} />

      <section className="case-section contributions-section" aria-labelledby="project-contributions-title">
        <div className="section-heading-row">
          <div><p className="case-kicker">My work</p><h2 id="project-contributions-title">My contributions</h2></div>
          <p className="contributions-intro">Work documented for this project.</p>
        </div>
        <ul className="contribution-list">
          {project.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
        </ul>
      </section>

      {project.technologyGroups.length > 0 && (
        <section className="case-section stack-section" aria-labelledby="technology-stack-title">
          <div className="section-heading-row">
            <div><p className="case-kicker">Built with</p><h2 id="technology-stack-title">Technology stack</h2></div>
          </div>
          <div className="stack-groups">
            {project.technologyGroups.map((group) => (
              <div className="stack-group" key={group.label}>
                <h3>{group.label}</h3>
                <ul>{group.items.map((technology) => <li key={technology}>{technology}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>
      )}

      <ProjectNavigation project={project} />
      <ProjectLightbox project={project} index={lightboxIndex} onClose={() => setLightboxIndex(null)} onChange={setLightboxIndex} />
    </article>
  );
}

export default ProjectDetails;
