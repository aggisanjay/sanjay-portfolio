
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import { FiSend } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Particle from "../Particle";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_emkg51q", "template_ohu9fua", formData, "OAsnjk-0SpLa5V0ys")
      .then((response) => {
        console.log("Email successfully sent!", response.status, response.text);
        toast.success("Email successfully sent!");  // Show success toast
        // Reset form after successful submission
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("Failed to send email. Error: ", err);
        toast.error("Failed to send email. Please try again.");  // Show error toast
      });
  };

  return (
    <Container fluid className="contact-section" id="contact">
      <div className="particle-container">
        <Particle />
      </div>

      <h1 className="contact-heading">
        Get in <strong className="purple">Touch</strong>
      </h1>

      <Form onSubmit={handleSubmit} style={{ maxWidth: "600px", margin: "auto" }}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Your Name"
            name="name"
            className="change"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="email"
            placeholder="Your Email"
            name="email"
            className="change"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Your Message"
            name="message"
            className="change"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button className="button" variant="primary" type="submit">
          <FiSend className="gap" />
          Send Message
        </Button>
      </Form>

      {/* Toast Container to display notifications */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick />
    </Container>
  );
}

export default Contact;
