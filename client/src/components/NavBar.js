import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import Auth from "../utils/Auth.js"
//Components
import NavBadge from "./NavBadge.js"

const NavBar = () => {
  const handleLogOut = event => {
    event.preventDefault()
    Auth.logout()
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container className="navbar-content">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            {Auth.loggedIn() && (
              <Nav.Link style={{ color: "blue" }} href="/admin-edit">
                Edit
              </Nav.Link>
            )}
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/merch">Merch </Nav.Link>
            <Nav.Link href="/media">Media </Nav.Link>

            <div>
              <Navbar.Brand className="navbar-title" href="/">
                *BlueGrass Billies*
              </Navbar.Brand>
            </div>
            <Nav.Link href="/tour">Tour</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/cart">
              Cart
              <NavBadge></NavBadge>
            </Nav.Link>
            {Auth.loggedIn() && (
              <Nav.Link style={{ color: "blue" }} href="/" onClick={handleLogOut}>
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
