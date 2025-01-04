'use client';

import { Image, Container } from 'react-bootstrap'
import { Github, Linkedin, Envelope } from 'react-bootstrap-icons'
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
          <Image src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" style={{ width: '250px', height: '250px' }} alt="picture of me" roundedCircle />
          <p>BlahBlahBlah</p>
        </Container>
     </div>
      <div className="projects">
        <h2>Projects</h2>
        {/* <ProjectCarousel /> */}
      </div>
      <div className="resume">
        <h2>Resume</h2>
      </div>
      <div className="contact">
        <h2>Contact Me</h2>
      </div>

    </>
  );
}
