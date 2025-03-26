// import React from "react";
// import { Link } from "react-router-dom";
// import { Navbar, Nav } from "react-bootstrap"; // Import Bootstrap components
// //import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
// import headerstyle from '../styles/components/headerstyle.css';



// const Header = () => {
//   return (
//     <Navbar bg="success" className="header" variant="dark" expand="lg">
//       {" "}
//       {/* Change bg to "primary" and add variant="dark" for better text contrast */}
//       <Navbar.Brand as={Link} to="/">
//         Productivity App
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ml-auto">
//           {" "}
//           {/* Align items to the right */}
//           <Nav.Link as={Link} to="/">
//             Home
//           </Nav.Link>
//           <Nav.Link as={Link} to="/tasks">
//             Tasks
//           </Nav.Link>
//           <Nav.Link as={Link} to="/profile">
//             Profile
//           </Nav.Link>
//           <Nav.Link as={Link} to="/logout">
//             Logout
//           </Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default Header;


import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap"; // Import Bootstrap components
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS (ensure this is included somewhere globally)
import headerstyle from "../styles/components/headerstyle.css";

const Header = () => {
  return (
    <Navbar bg="success" variant="dark" expand="lg" sticky="top">
      {" "}
      {/* Sticky to keep it at the top */}
      <Navbar.Brand as={Link} to="/" className="font-weight-bold">
        Productivity App
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            as={Link}
            to="/"
            className="text-light"
            activeClassName="active"
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/tasks"
            className="text-light"
            activeClassName="active"
          >
            Tasks
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/profile"
            className="text-light"
            activeClassName="active"
          >
            Profile
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/logout"
            className="text-light"
            activeClassName="active"
          >
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;