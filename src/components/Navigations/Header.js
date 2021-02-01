import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Navbar
        variant="dark"
        expand="lg"
        collapseOnSelect
        style={{ background: "#ffffff" }}
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>robinSwing</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <img
              src="https://img.icons8.com/cute-clipart/64/000000/menu.png"
              alt="Drop down menu"
              className="mt-3"
            />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/">
                <Nav.Link style={{ color: "black !important" }}>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/chat-room">
                <Nav.Link style={{ color: "black !important" }}>
                  Chat Room
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/posts">
                <Nav.Link style={{ color: "black !important" }}>Blogs</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/encryption-info">
                <Nav.Link style={{ color: "black !important" }}>
                  Why Encryption?
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about-us">
                <Nav.Link style={{ color: "black !important" }}>
                  About Robinswing
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
