import React from 'react';
import { Nav,Navbar,Button} from 'react-bootstrap';
import '../header/header.css';
function Header() {
    return (
        <Navbar expand="lg">
        <Navbar.Brand className="ml--1" href="#brand"><img className="img-style" src="https://res.cloudinary.com/dspfh3nrl/image/upload/v1607239213/nurseLogo.png"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ml--5 left-nav">
            <Nav.Link href="#ourapproval">Our Approval</Nav.Link>
            <Nav.Link href="#ourcourses">Our Courses</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#cerequirements">CE Requirements</Nav.Link>
          </Nav>
          <Nav className="right-nav">
            <Nav.Link href="#login" className="">Login</Nav.Link>
            <Nav.Link href="#register" className="">Register</Nav.Link>
            <Button className="btn try-btn round-btn">Try for free</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Header