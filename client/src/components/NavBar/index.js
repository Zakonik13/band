import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="navbar-content">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/merch">Merch </Nav.Link>
            <div>
              <Navbar.Brand className="navbar-title" href="/">
                *BlueGrass Billies*
              </Navbar.Brand>
            </div>
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
