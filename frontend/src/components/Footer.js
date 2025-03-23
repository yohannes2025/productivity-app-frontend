import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer bg-success text-light py-3 mt-auto">
      <Container>
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; 2025 Code Institute</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
