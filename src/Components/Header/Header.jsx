import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import logo from "../../Images/AIT-white.jpg";
import "./Header.css"; // Create a separate CSS file for styling

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="">
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="ml-auto custom-nav"> {/* Add custom class for styling */}
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/feedback">Feedback</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
