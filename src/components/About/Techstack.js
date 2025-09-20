import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiPython, DiHtml5, DiCss3 } from "react-icons/di";
import { 
  SiSpringboot, 
  SiAngular, 
  SiMongodb, 
  SiMysql,
  SiDatabricks,
  SiPostgresql 
} from "react-icons/si";

function Techstack() {
  const skills = [
    { icon: <span style={{ fontWeight: "bold", fontSize: "2rem" }}>C</span>, name: "C" },
    { icon: <DiJavascript1 size={50} />, name: "JavaScript" },
    { icon: <DiPython size={50} />, name: "Python" },
    { icon: <DiHtml5 size={50} />, name: "HTML5" },
    { icon: <DiCss3 size={50} />, name: "CSS3" },
    { icon: <DiReact size={50} />, name: "React.js" },
    { icon: <DiNodejs size={50} />, name: "Node.js" },
    { icon: <SiSpringboot size={50} />, name: "Spring Boot" },
    { icon: <SiAngular size={50} />, name: "Angular" },
    { icon: <SiMongodb size={50} />, name: "MongoDB" },
    { icon: <SiMysql size={50} />, name: "MySQL" },
    { icon: <SiPostgresql size={50} />, name: "PostgreSQL" },
    { icon: <SiDatabricks size={50} />, name: "H2 Database" },

  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill, index) => (
        <Col xs={4} md={2} className="tech-icons text-center mb-4" key={index}>
          {skill.icon}
          <p style={{ marginTop: "8px", fontSize: "0.9rem", color: "white" }}>{skill.name}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
