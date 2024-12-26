'use client';

import { Image, Container } from 'react-bootstrap'
import { Github, Linkedin, Envelope } from 'react-bootstrap-icons'
import ProjectCarousel from '@/components/ProjectCarousel'

export default function Home() {
  return (
    <>
    <Container>
    <div className="general-info">
        <Image src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" style={{ width: '250px', height: '250px' }} alt="picture of me" roundedCircle />
        <h1>Dhaniel Bolosan</h1>
        <p>Student</p>
        <Envelope /> <Github /> <Linkedin />
    </div>
    <div className="about-me">
      <h2>About Me</h2>
      <p>BlahBlahBlah</p>
    </div>
    <div className="projects">
      <h2>Projects</h2>
      <ProjectCarousel />
    </div>
    <div className="resume">
      <h2>Resume</h2>
    </div>
    <div className="contact">
      <h2>Contact Me</h2>
    </div>
    </Container>
    </>
  );
}
