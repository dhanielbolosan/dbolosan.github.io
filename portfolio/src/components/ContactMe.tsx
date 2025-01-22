'use client';

import { Container, Button, Form } from 'react-bootstrap';
import { useState } from 'react';

const ContactMe = () => {
    const [name, setName ] = useState('')
    const [email, setEmail ] = useState('')
    const [message, setMessage ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Data', name, email, message)
        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter name" 
                        value={name}
                        onChange = {(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange = {(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Enter message" 
                        value={message}
                        onChange = {(e) => setMessage(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default ContactMe;