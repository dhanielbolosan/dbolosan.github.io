import React, { useState } from 'react';
import { Image, Carousel } from 'react-bootstrap';

const ProjectCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: React.SetStateAction<number>) => {
        setIndex(selectedIndex);
    }

    const projects = [
        {
            title: 'TextSwap',
            description: 'Platform for students to purchase and sell textbooks',
            icon: 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg',
            link: '/projects/textswap'
        },
        {
            title: 'Space Adventurer',
            description: '2D Platformer Video Game',
            icon: 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg',
            link: '/projects/space-adventurer'
        },
        {
            title: 'Rock Paper Scissors',
            description: 'First User Interface',
            icon: 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg',
            link: '/projects/rock-paper-scissors'
        },
    ];
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {projects.map((project, index) => (
                <Carousel.Item key={index}>
                    <Image
                        className="d-block w-100"
                        src={project.icon}
                        alt={project.title}
                    />
                    <Carousel.Caption>
                        <a href={project.link}><h3>{project.title}</h3></a>
                        <p>{project.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
        
    );   
}

export default ProjectCarousel;