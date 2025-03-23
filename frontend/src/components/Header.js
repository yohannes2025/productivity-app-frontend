import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap"; // Import Bootstrap components
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS


const Header = () => {
  return (
    <Navbar bg="success" variant="dark" expand="lg">
      {" "}
      {/* Change bg to "primary" and add variant="dark" for better text contrast */}
      <Navbar.Brand as={Link} to="/">
        Productivity App
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {" "}
          {/* Align items to the right */}
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/tasks">
            Tasks
          </Nav.Link>
          <Nav.Link as={Link} to="/profile">
            Profile
          </Nav.Link>
          <Nav.Link as={Link} to="/logout">
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

