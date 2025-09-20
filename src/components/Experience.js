import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";
import OrangeImg from "../Assets/Orange.png";
import BNAImg from "../Assets/BNA.jpg";

function Experience() {
  const experiences = [
    {
      imgPath: OrangeImg,
      title: "DevOps Engineer Intern",
      company: "Orange Digital Center, Tunis",
      period: "07/2025 – 09/2025",
      description: (
        <>
          <strong>Details:</strong>
          <ul>
            <li>Designed and automated a CI/CD pipeline with Azure DevOps for React & NestJS, reducing deployment time by 70%.</li>
            <li>Implemented quality and security tools (SonarQube, Trivy, ESLint, Jest) and automation via Docker & Azure Container Registry.</li>
            <li>Deployed on Azure Container Apps with scalability and high availability.</li>
          </ul>
          <strong>Skills:</strong> Azure DevOps, Docker, NestJS, React, PostgreSQL, GitHub, SonarQube, Trivy, ESLint, Jest, CI/CD
        </>
      ),
    },
    {
      imgPath: BNAImg,
      title: "Full Stack Developer Intern",
      company: "National Agricultural Bank (BNA), Tunis Headquarters",
      period: "06/2024 – 08/2024",
      description: (
        <>
          <strong>Details:</strong>
          <ul>
            <li>Designed and developed a checkbook request module integrated into the Smile banking application, reducing manual processing.</li>
            <li>Front-End development (Angular) and Back-End (Spring Boot) with RESTful API, integrated with existing systems.</li>
            <li>MySQL database management and collaboration with business teams to meet customer needs.</li>
          </ul>
          <strong>Skills:</strong> Spring Boot, Angular, REST API, MySQL, Full Stack Development, System Integration, Database Management
        </>
      ),
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Professional Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here is a summary of my professional experience in internships and projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {experiences.map((exp, index) => (
            <Col md={6} className="mb-4" key={index}>
              <div className="experience-card">
                <div className="experience-header">
                  <div className="company-logo-container">
                    <img 
                      src={exp.imgPath} 
                      alt={exp.company} 
                      className="company-logo"
                    />
                  </div>
                  <div className="experience-title">
                    <h3>{exp.title}</h3>
                    <h5>{exp.company}</h5>
                    <p className="period">{exp.period}</p>
                  </div>
                </div>
                <div className="experience-content">
                  {exp.description}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Styles CSS intégrés */}
      <style>
        {`
          .experience-card {
            background: linear-gradient(145deg, #2c2c3e, #34344a);
            border-radius: 15px;
            padding: 25px;
            height: 100%;
            color: white;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease;
            border: 1px solid #3f3f5a;
          }
          
          .experience-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          }
          
          .experience-header {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid #4a4a6a;
          }
          
          .company-logo-container {
            flex-shrink: 0;
            margin-right: 20px;
          }
          
          .company-logo {
            width: 100px;
            height: 100px;
            object-fit: contain;
            border-radius: 12px;
            background: white;
            padding: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          }
          
          .experience-title {
            flex-grow: 1;
          }
          
          .experience-title h3 {
            color: #9f7aea;
            margin-bottom: 5px;
            font-size: 1.4rem;
            font-weight: 600;
          }
          
          .experience-title h5 {
            color: #d6bcfa;
            margin-bottom: 5px;
            font-size: 1.1rem;
            font-weight: 500;
          }
          
          .experience-title .period {
            color: #a0aec0;
            margin-bottom: 0;
            font-size: 0.9rem;
          }
          
          .experience-content {
            line-height: 1.6;
          }
          
          .experience-content strong {
            color: #9f7aea;
            display: block;
            margin-bottom: 8px;
          }
          
          .experience-content ul {
            padding-left: 20px;
            margin-bottom: 15px;
          }
          
          .experience-content li {
            margin-bottom: 6px;
            color: #e2e8f0;
          }
          
          @media (max-width: 768px) {
            .experience-header {
              flex-direction: column;
              text-align: center;
            }
            
            .company-logo-container {
              margin-right: 0;
              margin-bottom: 15px;
            }
            
            .company-logo {
              width: 80px;
              height: 80px;
            }
            
            .experience-title h3 {
              font-size: 1.2rem;
            }
            
            .experience-title h5 {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </Container>
  );
}

export default Experience;