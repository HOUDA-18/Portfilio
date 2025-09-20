import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Houda Chaanbi</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} HC</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/HOUDA-18"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/houda-chaanbi-29a8a4283/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
           <li className="social-icons">
  <a
    href="mailto:chambihouda@gmail.com"
  style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
  >
    <AiOutlineMail />
  </a>
</li>

          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
