/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
'use client';

import { Image, Container } from 'react-bootstrap'
import { Github, Linkedin, Envelope, ArrowRight } from 'react-bootstrap-icons'
import ContactMe from '@/components/ContactMe'
// import ProjectCarousel from '@/components/ProjectCarousel'

export default function Home() {
  return (
    <>
      <div className="general-info">
        <Container>
          <h1 style={{ width: '100%', fontSize: "10rem", textAlign: 'center'}}>Dhaniel Bolosan</h1>
          <div style={{ width: "100%", display: "flex", flexDirection: "row"}}>
            <div className="me-auto" style={{ paddingLeft: '5rem', paddingTop: '0.75rem' }}>
              <a href="mailto:dhaniel@hawaii.edu" target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem' }}><Envelope size={25} /></a>
              <a href="https://github.com/dhanielbolosan" target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem' }}><Github size={25} /></a>
              <a href="https://www.linkedin.com/in/dhaniel-bolosan/" target="_blank" rel="noopener noreferrer"><Linkedin size={25} /></a>
            </div>
            <p className="ms-auto" style={{ fontSize: '2rem', paddingRight: '5rem' }}>Student & Aspiring Software Engineer</p>
          </div>
        </Container>
      </div>
      <div className="about-me">
        <Container>
          <h2>About Me</h2>
          {/* <Image src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" style={{ width: '250px', height: '250px' }} alt="picture of me" roundedCircle /> */}
          <div className="about-me-par">
            <p style={{fontSize: '5vw'}}>Hello! I'm Dhaniel Bolosan, a student and aspiring software engineer with an interest in both game design and web development.</p>
          </div>
        </Container>
     </div>
      <div className="projects">
        <Container>
          <div className="project-header" style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
            <h2 className="me-auto">Projects</h2>
            <a href="/projects" className="view-more">
              <h2 className="ms-auto">
                View More <ArrowRight />
              </h2>
            </a>
          </div>
        </Container>
        {/* <ProjectCarousel /> */}
      </div>
      <div className="resume">
        <Container>
          <h2>Resume</h2>
        </Container>
      </div>
      <div className="contact">
        <Container>
          <h2>Contact Me</h2>
          <ContactMe />
        </Container>
      </div>
    </>
  );
}
