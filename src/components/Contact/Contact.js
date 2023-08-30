import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Contact/Contact.css";
import Particle from "../Particle";

function Contact() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isFormIncomplete, setIsFormIncomplete] = useState(true);

  useEffect(() => {
    const { name, email, message } = formValues;
    setIsFormIncomplete(!name || !email || !message);
  }, [formValues]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const publicKey = "dODbK528Zdw0AO8BZ";
    emailjs.init(publicKey);

    const serviceID = "service_8u6ry8w";
    const templateID = "template_ayv6gyi";

    emailjs.sendForm(serviceID, templateID, e.target)
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        setIsEmailSent(true);
        setFormValues({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <section className="contact-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="contact-form-col">
            <h1>Contact Me</h1>
            {isEmailSent ? (
              <p className="email-sent-message">Your Email has been sent! 😊</p>
            ) : (
              <p>
                Have any questions or inquiries? Feel free to get in touch with us.
              </p>
            )}
            <Form className="contact-form" onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  placeholder="Enter your name"
                  name="name"
                  value={formValues.name}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  className="input"
                  placeholder="Enter your email"
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  className="input"
                  rows={4}
                  placeholder="Enter your message"
                  name="message"
                  value={formValues.message}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Button className='submitBtn' variant="primary" type="submit" disabled={isFormIncomplete}>
                {isEmailSent ? 'Sent!' : 'Submit'}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Container>
        <Particle/>
      </Container>
    </section>
  );
}

export default Contact;
