import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGithub,
  SiLinux,
  SiFigma,
  SiJupyter,
  SiDocker,
  SiJenkins,
  SiSonarqube,
  SiGrafana,
  SiPrometheus,
  SiAzuredevops,
    SiIntellijidea,
  SiApachemaven
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: <SiVisualstudiocode size={50} />, name: "VS Code" },
     { icon: <SiIntellijidea size={50} />, name: "IntelliJ IDEA" },
    { icon: <SiJupyter size={50} />, name: "Jupyter Notebook" },
    { icon: <SiPostman size={50} />, name: "Postman" },
    { icon: <SiGithub size={50} />, name: "GitHub" },
    { icon: <SiLinux size={50} />, name: "Linux" },
    { icon: <SiFigma size={50} />, name: "Figma" },
    { icon: <SiDocker size={50} />, name: "Docker" },
    { icon: <SiJenkins size={50} />, name: "Jenkins" },
    { icon: <SiSonarqube size={50} />, name: "SonarQube" },
    { icon: <SiGrafana size={50} />, name: "Grafana" },
    { icon: <SiPrometheus size={50} />, name: "Prometheus" },
    { icon: <SiAzuredevops size={50} />, name: "Azure DevOps" },
    { icon: <SiApachemaven size={50} />, name: "Nexus (via Maven)" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons text-center mb-4" key={index}>
          {tool.icon}
          <p style={{ marginTop: "8px", fontSize: "0.9rem", color: "white" }}>
            {tool.name}
          </p>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
