import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "./Particle";

function Education() {
  const educationData = [
    {
      school: "Higher Private School of Engineering and Technologies (ESPRIT), Tunis",
      degree: "Engineering Cycle - Computer Science",
      diploma: "Computer Engineering Diploma",
      period: "2023–2026",
    },
    {
      school: "Higher School of Sciences and Technologies of Hammam Sousse",
      extra: "Admitted through national entrance exam to engineering schools",
      period: "2021–2022",
    },
    {
      school: "Abu Kacem Chebbi High School, Tozeur",
      degree: "Mathematics Baccalaureate",
      period: "2019–2020",
    },
  ];

  const cardStyle = {
    backgroundColor: "#2c2c3e",
    color: "white",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
    minHeight: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const handleHover = (e, hover) => {
    e.currentTarget.style.transform = hover ? "scale(1.03)" : "scale(1)";
    e.currentTarget.style.boxShadow = hover
      ? "0 8px 25px rgba(0,0,0,0.5)"
      : "0 4px 15px rgba(0,0,0,0.3)";
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Education</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here is a summary of my academic background and achievements.
        </p>
        <Row style={{ justifyContent: "center", gap: "20px", paddingBottom: "50px" }}>
          {educationData.map((edu, index) => (
            <Col md={4} key={index}>
              <Card
                style={cardStyle}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
              >
                <Card.Body>
                  <Card.Title style={{ color: "#9f7aea", fontSize: "1.4em", marginBottom: "15px" }}>
                    {edu.school}
                  </Card.Title>
                  <Card.Text style={{ marginTop: "10px", lineHeight: "1.6" }}>
                    <strong style={{ color: "#d6bcfa" }}>Program:</strong> {edu.degree} <br />
                    {edu.diploma && (
                      <>
                        <strong style={{ color: "#d6bcfa" }}>Diploma:</strong> {edu.diploma} <br />
                      </>
                    )}
                    {edu.extra && (
                      <>
                        <strong style={{ color: "#d6bcfa" }}>Achievement:</strong> {edu.extra} <br />
                      </>
                    )}
                    <strong style={{ color: "#d6bcfa" }}>Period:</strong> {edu.period}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Education;