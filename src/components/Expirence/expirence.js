import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Expirence() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Row>
        <Col md={12} className="about-heading">
          <h1>Experience</h1>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="about-body">
          <h3>Software Engineer Intern at WooJoo Universe</h3>
          <ul>
            <li>Contributed to cross-platform mobile app development using React.js, React Native, Java, and Android Studio.</li>
            <li>Elevated user engagement by 30%.</li>
            <li>Implemented GraphQL for faster data querying.</li>
            <li>Enhanced SQL database efficiency by 25%.</li>
            <li>Conducted API testing with Insomnia, ensuring a 95% error-free interface.</li>
            <li>Streamlined build processes in a full-stack environment.</li>
            <li>Deployed landing webpage on Vercel.</li>
          </ul>
          {/* Add more experiences below */}
        </Col>
      </Row>
      {/* Add more rows for additional experiences */}
    </Container>
  );
}

export default Expirence;
