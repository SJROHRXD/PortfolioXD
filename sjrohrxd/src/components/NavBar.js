import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavLink from 'react-bootstrap/NavLink'

export default function NavBar() {
    return (
        <div class = "NavProblems">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="">Sarah Jeanne Rohr</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Navbar className="me-auto">
                            <NavLink><a href="https://sjrohrxd.github.io/SNEWZ/">SNewZ</a></NavLink>
                            <NavLink><a href="https://gist.github.com/ebfb3f319a9dd019adbb426712b0ff8b">RegEx</a></NavLink>
                            <NavLink><a href="https://zapplicant.herokuapp.com/applicant">Zapplicant</a></NavLink>
                            </Navbar>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};