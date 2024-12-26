import { 
    Container,
    Navbar,
    Nav,
    NavbarBrand,
    NavbarToggle,
    NavbarCollapse,
    NavLink
} from 'react-bootstrap';
import React from 'react';

const PortfolioNavbar: React.FC = () => {
    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <NavbarBrand href="/" className="me-auto">Dhaniel Bolosan</NavbarBrand>
                <NavbarToggle aria-controls="basic-navbar-nav" />
                <NavbarCollapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink href="#about-me">About Me</NavLink>
                        <NavLink href="#projects">Projects</NavLink>
                        <NavLink href="#resume">Resume</NavLink>
                        <NavLink href="#contact">Contact</NavLink>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    );
}

export default PortfolioNavbar;