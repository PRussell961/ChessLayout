import { Component } from "react";
import "../componentcss/NavBar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from "react-bootstrap/esm/NavLink";
import React from 'react'
//Nav Bar

function NavigationBar() {
  document.title ="SP-14 Red Chess AI";
  return (
    <>
    <Navbar style={{backgroundColor: "#03261D", position: "sticky"}} expand="lg" sticky="top" variant="dark" id="navbar">
      <Container sticky="top">
        <Navbar.Brand><p className="navText">SP-14 Red Chess AI </p></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href='#Welcome'><p className="navText"> Welcome </p></Nav.Link>         
          <Nav.Link href='#AboutUs'><p className="navText"> About Us </p></Nav.Link> 
          <Nav.Link href='#Play'><p className="navText"> Play </p></Nav.Link>     
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavigationBar;
