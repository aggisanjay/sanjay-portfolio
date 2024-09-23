import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sanjay  </span>
            from <span className="purple"> Telangana, India.</span>
            <br />
            I have completed my Computer Science degree at ATRI.
            <br />
            I am currently learning the MERN stack.
            <br />
            I am actively looking for job opportunities where I can apply my skills and grow as a developer.
            <br/>
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sanjay</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
