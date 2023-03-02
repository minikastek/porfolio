import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nicolas Olivera </span>
            from <span className="purple"> La Rioja, Argentina.</span>
            <br />I am a SemiSenior developer pursuing my degree in programing
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Ever tried? Ever failed? No matter. Try again. Fail again. Fail better”{" "}
          </p>
          <br/>
          <footer className="blockquote-footer">Samuel Beckett</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
