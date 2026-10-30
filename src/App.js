import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';
import { FaArrowRight, FaCompass, FaUser, FaWandMagicSparkles, FaBookOpen, FaScroll, FaEnvelope } from 'react-icons/fa6';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Certificate from './Components/Certificate';
import SocialMedia from './Components/SocialMedia';
import ProjectDetails from './Components/ProjectDetails';
import logo from './Components/image/logo.jpg';
import profilePhoto from './Components/image/ji.jpg';
import './App.css';

const menuItems = [
  { path: '/about', number: '01', title: 'About the Wanderer', subtitle: 'The person behind the journey', icon: <FaUser /> },
  { path: '/skills', number: '02', title: 'Skills & Artifacts', subtitle: 'Tools, craft, and disciplines', icon: <FaWandMagicSparkles /> },
  { path: '/projects', number: '03', title: 'Quest Archive', subtitle: 'Selected works and projects', icon: <FaBookOpen /> },
  { path: '/certificates', number: '04', title: 'Achievements', subtitle: 'Records collected along the way', icon: <FaScroll /> },
  { path: '/contact', number: '05', title: 'Send a Message', subtitle: 'Open a path of communication', icon: <FaEnvelope /> },
];

function SiteHeader() {
  return (
    <header className="site-header">
      <Link to="/" className="brand">
        <span className="brand-seal"><img src={logo} alt="" /></span>
        <span><strong>JOURNAL OF ALFARIZZI</strong><small>WANDERER · DEVELOPER</small></span>
      </Link>
      <Link to="/" className="header-home-link"><FaCompass /> MAIN MENU</Link>
    </header>
  );
}

function PageHeading({ eyebrow, title, description, number }) {
  return (
    <div className="inner-page-heading">
      <div className="page-index">{number}</div>
      <div>
        <p className="page-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {description && <p className="page-description">{description}</p>}
      </div>
      <span className="heading-rune">✧</span>
    </div>
  );
}

function HomePage() {
  return (
    <main className="home-screen">
      <section className="home-hero">
        <div className="home-copy">
          <p className="chapter-label"><span /> A RECORD OF CURIOSITY AND CREATION</p>
          <p className="hero-overline">WELCOME TO MY JOURNAL</p>
          <h1>HELLO, Traveler!<br /></h1>
          <p className="hero-summary">
            I am Ahmad Alfarizzi, an Internet Engineering Technology student with a passion for exploring Cloud Computing and Cybersecurity.
            Currently learning how cloud infrastructure works, how systems communicate, and how to make digital environments more secure.
          </p>
          <div className="home-stamp">FIELD JOURNAL <b>✧</b> VOL. 01</div>
        </div>
        <div className="home-portrait-stage">
          <div className="portrait-orbit orbit-one" />
          <div className="portrait-orbit orbit-two" />
          <div className="home-portrait"><img src={profilePhoto} alt="Portrait" /></div>
          <span className="portrait-note note-one">CURIOUS BY NATURE</span>
          <span className="portrait-note note-two">ENTHUSIASTIC LEARNER</span>
          <span className="portrait-star star-one">✧</span>
          <span className="portrait-star star-two">✦</span>
        </div>
      </section>

      <section className="game-menu-section">
        <div className="menu-heading">
          <p>SELECT A DESTINATION</p>
          <h2>Journey Menu</h2>
          <span>Choose an entry to continue exploring</span>
        </div>
        <nav className="game-options" aria-label="Main navigation">
          {menuItems.map((item) => (
            <Link className="game-option" to={item.path} key={item.path}>
              <span className="option-number">{item.number}</span>
              <span className="option-icon">{item.icon}</span>
              <span className="option-copy"><strong>{item.title}</strong><small>{item.subtitle}</small></span>
              <FaArrowRight className="option-arrow" />
            </Link>
          ))}
        </nav>
      </section>
    </main>
  );
}

function ContentPage({ children, eyebrow, title, description, number }) {
  return (
    <main className="content-page">
      <Link to="/" className="back-to-menu">← BACK TO JOURNEY MENU</Link>
      <PageHeading eyebrow={eyebrow} title={title} description={description} number={number} />
      <div className="page-content-panel">{children}</div>
      <div className="page-bottom-nav">
        <Link to="/">RETURN TO MAIN MENU <FaCompass /></Link>
      </div>
    </main>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

function MainLayout() {
  return (
    <div className="fantasy-site">
      <div className="page-grain" aria-hidden="true" />
      <SiteHeader />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={
          <ContentPage number="01" eyebrow="THE TRAVELLER" title="About the Wanderer" description="A little about the person behind the work.">
            <AboutMe />
          </ContentPage>
        } />
        <Route path="/skills" element={
          <ContentPage number="02" eyebrow="THE ARTIFACTS OF THE CRAFT" title="Skills & Tools" description="Technologies and disciplines I continue to explore.">
            <Skills />
          </ContentPage>
        } />
        <Route path="/projects" element={
          <ContentPage number="03" eyebrow="THE QUEST ARCHIVE" title="Selected Projects" description="A collection of experiments, builds, and completed work.">
            <Projects />
          </ContentPage>
        } />
        <Route path="/certificates" element={
          <ContentPage number="04" eyebrow="MARKS ALONG THE WAY" title="Achievements" description="Certificates and milestones collected through learning.">
            <Certificate />
          </ContentPage>
        } />
        <Route path="/contact" element={
          <ContentPage number="05" eyebrow="LET OUR PATHS CROSS" title="Contact" description="Choose a channel and get in touch.">
            <SocialMedia />
          </ContentPage>
        } />
        <Route path="/project/:id" element={
          <main className="content-page project-route">
            <Link to="/projects" className="back-to-menu">← BACK TO QUEST ARCHIVE</Link>
            <ProjectDetails />
          </main>
        } />
        <Route path="*" element={
          <main className="content-page not-found">
            <PageHeading number="?" eyebrow="UNKNOWN DESTINATION" title="Page not found" description="This path does not exist in the journal." />
            <Link to="/" className="back-to-menu">RETURN TO MAIN MENU →</Link>
          </main>
        } />
      </Routes>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Alfarizzi · PERSONAL JOURNAL</span>
        <Link to="/">RETURN TO MAIN MENU ↑</Link>
      </footer>
    </div>
  );
}

export default function App() {
  return <Router><MainLayout /></Router>;
}
