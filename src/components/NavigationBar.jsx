import { useImperativeHandle } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../componentcss/NavBar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function NavigationBar() {
  return (
    <>

    <Navbar style={{backgroundColor: "#03261D", position: "sticky"}} expand="lg" sticky="top" variant="dark">
      <Container sticky="top">
        <Navbar.Brand href="#home"><p className="navText">Chess AI </p></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href=""><p className="navText"> Welcome </p></Nav.Link>
            <Nav.Link href=""><p className="navText"> Play</p></Nav.Link>
            <Nav.Link href=""><p className="navText"> About Us</p></Nav.Link>
            <Nav.Link href=""><p className="navText"> About Project</p></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  );
}

function CustomLink({to,children,...props}){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end:true}) 
  return(
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  )
}

export default NavigationBar;
