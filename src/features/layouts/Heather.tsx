import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Heather = () => {
  return (
    <header>
      <Navbar expand="xxl" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <NavLink to="/" className="navbar-brand">
              Home
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" to="/cards">
                Cards
              </NavLink>
              <NavLink className="nav-link" to="/hand-fusion-tool">
                Hand Fusion Tool
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Heather;
