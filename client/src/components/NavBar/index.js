import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"

const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container className="navbar-content">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Merch </Nav.Link>
            <Navbar.Brand className="navbar-title" href="#home">
              {"  "}
              BlueGrass Billies
            </Navbar.Brand>
            <Nav.Link href="#link">Newsletter</Nav.Link>
            <Nav.Link href="#link">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
