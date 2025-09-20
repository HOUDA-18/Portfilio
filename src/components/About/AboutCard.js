import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Houda Chaanbi</span>,
            from <span className="purple">Tunisia</span>.<br />
            I am currently a 3rd Year Engineering student at <b className="purple">ESPRIT</b>, 
specializing in <b className="purple">DevOps and Full Stack Development</b>.<br />
I have a strong passion for <i><b className="purple">CI/CD automation, Cloud Computing, Microservices, and Web Development</b></i>. 
I enjoy designing and deploying innovative solutions that combine modern architectures with performance, scalability, and security.<br />
I am particularly interested in <b className="purple">AI & Data Science</b> projects, as well as 
building real-world applications using <b className="purple">Spring Boot, React, Angular, Docker, and Jenkins</b>.<br />
I also love exploring new technologies, contributing to collaborative projects, and challenging myself with complex engineering problems.

          </p>

          <p>Some of my hobbies and personal activities include:</p>
          <ul>
            
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading and self-learning
            </li>
            <li className="about-activity">
              <ImPointRight /> Music and creative arts
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Houda Chaanbi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
