import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Innovative AI Engineer at RadicalX, specializing in AI coaching with
            ReX. Cross-platform Software Engineer Intern at WooJoo Universe,
            adept in React.js, React Native, Java, and Android Studio.
            Experienced in GraphQL, SQL optimization, and API testing. Strong
            foundation in web development and pursuing a Bachelor's in Computer
            Science at The University of Texas at Dallas. Passionate about
            creating impactful products that solve real-world problems and
            improve lives. .
          </p>
          <p>
            Apart from coding I play basketball, write poetry, cook, do
            calligraphy, and currently taking Arabic and Urdu classes
          </p>
          <p style={{ color: "#6be7d9" }}>
            "A Muslim should be best at everthing he does"{" "}
          </p>
          <footer className="blockquote-footer">Muhammad Ali</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
