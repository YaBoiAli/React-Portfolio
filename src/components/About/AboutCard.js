import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Having embarked on my coding odyssey during middle school, I've
            nurtured an unswerving ardor for programming that's only grown
            stronger over time. From crafting rudimentary games to architecting
            sophisticated applications, my journey reflects a lifelong devotion
            to the art of coding.
          </p>
          <p>Apart from coding I play basketball, write poetry, cook, do calligraphy, and took classes to learn Arabic</p>
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
