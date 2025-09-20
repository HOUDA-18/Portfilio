import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/houda.jpg"; // Remplace par ton avatar si tu as
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import {AiOutlineMail} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi everyone! I am <span className="purple">Houda Chaanbi</span> from <span className="purple">Tunisia</span>.
              <br />
              <br />
              I am a <b className="purple">3rd Year Engineering Student</b> at <b className="purple">ESPRIT</b>, specializing in <b className="purple">Devops  and Full Stack Development</b>.
              <br />
              <br />
              I am passionate about <i><b className="purple">CI/CD, Cloud Computing, Microservices, and Web Development</b></i>, and I enjoy  designing and deploying modern applications while integrating  <b className="purple">automation, scalability, and security</b>.
  <br />
              <br />
              I have hands-on experience with <b className="purple">Spring Boot, Angular, React, Node.js, Docker, Jenkins, and Prometheus</b>, 
  gained through academic projects and professional internships at <b className="purple">Orange Digital Center</b> 
  and <b className="purple">Banque Nationale Agricole</b>.

              <br />
              <br />
              Whenever possible, I explore <i><b className="purple">AI and Data Science</b></i> projects, 
  applying machine learning models with <b className="purple">Python & Scikit-learn</b> to solve real-world challenges.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/HOUDA-18"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/houda-chaanbi-29a8a4283/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
             <li className="social-icons">
  <a
    href="mailto:chambihouda@gmail.com"
    className="icon-colour home-social-icons"
  >
    <AiOutlineMail />
  </a>
</li>


            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
