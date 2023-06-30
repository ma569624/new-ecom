import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BiLogIn } from "react-icons/bi";

const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link>Home</Nav.Link>
                            <Nav.Link>Product</Nav.Link>
                            <Nav.Link>about</Nav.Link>
                            <Nav.Link>contact</Nav.Link>
                           
                        </Nav>
                        <div className="d-flex gap-2">
                            <Button className='px-3' variant="outline-success">
                                <BiLogIn className='me-1'></BiLogIn>
                                cart (0) </Button>
                            <Button className='px-3' variant="outline-success">
                                <BiLogIn className='me-1'></BiLogIn>
                                register</Button>
                            <Button className='px-3' variant="success">
                                <BiLogIn className='me-1'></BiLogIn>
                                login</Button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header