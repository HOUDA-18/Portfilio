import React, { useState } from "react";
import { Container, Row, Col, Button, Modal, Card, Tooltip, OverlayTrigger, Badge, Pagination } from "react-bootstrap";
import { FiGithub, FiExternalLink, FiFileText, FiDownload, FiCode, FiEye, FiPlus, FiUsers, FiSliders, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Particle from "../Particle";

// Images pour tes projets
import BookImg from "../../Assets/Projects/Book.png";
import HRImg from "../../Assets/Projects/HR.png";
import DevopsImg from "../../Assets/Projects/devops.png";
import MLImg from "../../Assets/Projects/ML.png";
// Utilisez une image existante comme placeholder pour blood-management
import BloodManagementImg from "../../Assets/Projects/blood-management.png .png"; // Placeholder

// Import du rapport
import RapportML from "../../Assets/Rapport_ML.pdf";

// Composant pour l'affichage des technologies avec tooltip
const TechnologyBadge = ({ technology }) => (
  <OverlayTrigger
    placement="top"
    overlay={<Tooltip>{technology}</Tooltip>}
  >
    <span className="tech-tag">
      {technology}
    </span>
  </OverlayTrigger>
);

// Nouveau composant ProjectCard avec boutons corrigés
const ProjectCard = ({ imgPath, title, technologies, role, details, methodology, ghLink, demoLink, presentationLink, onViewReport }) => {
  const [showAllTech, setShowAllTech] = useState(false);

  return (
    <Col md={6} lg={4} className="mb-4"> {/* Changé de lg={3} à lg={4} pour 3 cartes par ligne */}
      <Card className="h-100 modern-project-card">
        <div className="card-image-container">
          <Card.Img variant="top" src={imgPath} />
          <div className="action-indicators">
            {ghLink && (
              <a href={ghLink} target="_blank" rel="noopener noreferrer" className="indicator github-indicator">
                <FiGithub />
                <span className="indicator-text">Code</span>
              </a>
            )}
            {demoLink && (
              <a href={demoLink} target="_blank" rel="noopener noreferrer" className="indicator demo-indicator">
                <FiExternalLink />
                <span className="indicator-text">Demo</span>
              </a>
            )}
            {presentationLink && (
              <a href={presentationLink} target="_blank" rel="noopener noreferrer" className="indicator presentation-indicator">
                <FiSliders />
                <span className="indicator-text">Presentation</span>
              </a>
            )}
            {onViewReport && (
              <button onClick={onViewReport} className="indicator report-indicator">
                <FiFileText />
                <span className="indicator-text">Report</span>
              </button>
            )}
          </div>
        </div>
        
        <Card.Body className="d-flex flex-column">
          <div className="technologies-container">
            <div className="technologies mb-2">
              {technologies.slice(0, showAllTech ? technologies.length : 4).map((tech, index) => (
                <TechnologyBadge key={index} technology={tech} />
              ))}
            </div>
            {technologies.length > 4 && (
              <Button 
                variant="link" 
                className="show-more-btn p-0"
                onClick={() => setShowAllTech(!showAllTech)}
              >
                <FiPlus size={14} />
                <span className="ms-1">{showAllTech ? 'Less' : `+${technologies.length - 4}`}</span>
              </Button>
            )}
          </div>
          
          <Card.Title className="project-title">{title}</Card.Title>
          <div className="project-role">{role}</div>
          
          {/* Badge de méthodologie */}
          {methodology && (
            <div className="methodology-badge mb-2">
              <Badge bg="info" className="d-inline-flex align-items-center">
                <FiUsers className="me-1" size={14} />
                {methodology}
              </Badge>
            </div>
          )}
          
          <Card.Text className="project-description">
            {details}
          </Card.Text>
          
          <div className="action-buttons mt-auto">
            {ghLink && (
              <Button 
                variant="outline-dark" 
                size="sm" 
                className="action-btn"
                href={ghLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiCode className="me-1" />
                Code
              </Button>
            )}
            {demoLink && (
              <Button 
                variant="outline-primary" 
                size="sm" 
                className="action-btn"
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiEye className="me-1" />
                Demo
              </Button>
            )}
            {presentationLink && (
              <Button 
                variant="outline-warning" 
                size="sm"
                className="action-btn"
                href={presentationLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiSliders className="me-1" />
                Presentation
              </Button>
            )}
            {onViewReport && (
              <Button 
                variant="outline-success" 
                size="sm"
                className="action-btn"
                onClick={onViewReport}
              >
                <FiFileText className="me-1" />
                Report
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

// Composant de pagination personnalisé
const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  
  // Calcul des pages à afficher
  let startPage = Math.max(1, currentPage - 1);
  let endPage = Math.min(totalPages, startPage + 2);
  
  if (endPage - startPage < 2) {
    startPage = Math.max(1, endPage - 2);
  }
  
  for (let i = startPage; i <= endPage; i++) {
    pages.push(
      <Pagination.Item
        key={i}
        active={i === currentPage}
        onClick={() => onPageChange(i)}
      >
        {i}
      </Pagination.Item>
    );
  }
  
  return (
    <Pagination className="justify-content-center mt-4">
      <Pagination.Prev
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <FiChevronLeft className="me-1" />
        Previous
      </Pagination.Prev>
      
      {startPage > 1 && (
        <>
          <Pagination.Item onClick={() => onPageChange(1)}>1</Pagination.Item>
          {startPage > 2 && <Pagination.Ellipsis />}
        </>
      )}
      
      {pages}
      
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <Pagination.Ellipsis />}
          <Pagination.Item onClick={() => onPageChange(totalPages)}>
            {totalPages}
          </Pagination.Item>
        </>
      )}
      
      <Pagination.Next
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
        <FiChevronRight className="ms-1" />
      </Pagination.Next>
    </Pagination>
  );
};

function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3; // ⭐ CHANGÉ DE 2 À 3 ⭐

  const projects = [
    
  
    {
      imgPath: HRImg,
      title: "SmartHR Platform",
      technologies: ["React", "Node.js", "Flask", "Python", "Scikit-learn", "Machine Learning", "Deep Learning", "Face Recognition", "Rasa", "Chatbot", "CI/CD"],
      role: "Full Stack & DevOps & ML Engineer",
      methodology: "Agile/Scrum",
      details: "HR platform with predictive analytics, face recognition, and AI chatbot developed using Scrum methodology.",
      ghLink: "https://github.com/HOUDA-18/HR-Mangement",
      demoLink: "https://www.linkedin.com/posts/wassef-ammar-56313a237_hrtech-aiinhr-reactjs-ugcPost-7330740241827328001-zKUW",
      presentationLink: "https://www.canva.com/design/DAGmV4PT8PE/EyLD-dG1ENOG8Hm3a7KeGQ/edit"
    },
    {
      imgPath: DevopsImg,
      title: "Kaddem CI/CD",
      technologies: ["Jenkins", "Docker", "Spring Boot", "DevOps", "Docker Compose", "SonarQube", "Nexus", "Grafana", "Prometheus"],
      role: "DevOps Engineer",
      details: "Complete CI/CD pipeline implemented using Agile methodology with containerization and monitoring.",
      ghLink: "https://github.com/HOUDA-18/ProjetDevops/tree/houda",
      demoLink: null,
      presentationLink: null
    },
      {
      imgPath: BookImg,
      title: "Library Management System",
      technologies: ["Spring Boot", "Microservices", "React", "Keycloak", "Eureka Server", "API Gateway", "RabbitMQ", "Config Server"],
      role: "Full Stack Developer",
      methodology: "Agile/Scrum",
      details: "Microservices-based library system developed using Agile methodology with book management and authentication.",
      ghLink: "https://github.com/HOUDA-18/Gestion-biblioth-que",
      demoLink: null,
      presentationLink: null
    },
    {
      imgPath: MLImg,
      title: "SmartHR ML Report",
      technologies: ["Python", "Machine Learning", "Scikit-learn", "Data Analysis", "PCA", "Random Forest", "SVM", "Predictive Analytics"],
      role: "ML Engineer",
      methodology: "CRISP-DM",
      details: "Comprehensive ML analysis for HR decision support systems developed using Scrum methodology.",
      ghLink: null,
      demoLink: "https://www.canva.com/design/DAGn-jS5b1s/re2JiQTs7zMEiWAFBUSWkA/edit",
      hasReport: true,
      presentationLink: "https://www.canva.com/design/DAGnipTmg9s/dHZSR9dwmtuBC01EGb26dg/edit"
    },
    {
      imgPath: BloodManagementImg,
      title: "Blood Transfusion Management System",
      technologies: ["C Programming", "Glade", "Ubuntu", "Linux", "GTK+", "MySQL"],
      role: "Software Developer",
      details: "Developed a C application for managing blood transfusion centers in Tunisia with database integration and GUI.",
      ghLink: null,
      demoLink: null,
      presentationLink: "https://www.canva.com/design/DAF2nNffqHg/6vSsDMMmmfm-xIJ2fClgag/edit"
    }
  ];

  // Calcul des projets à afficher pour la page courante
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll vers le haut de la section projets
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShowModal = () => {
    setShowModal(true);
    setFullscreen(true);
  };
  
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = RapportML;
    link.download = "Rapport_ML_SmartHR.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div className="text-center mb-5">
          <h1 className="project-heading">
            My Recent <strong className="purple">Works</strong>
          </h1>
          <p className="project-subheading">
            Here are some projects I've worked on recently  .
          </p>
        </div>
        
        {/* Modal pour visualiser le rapport */}
        <Modal 
          show={showModal} 
          onHide={handleCloseModal} 
          fullscreen={fullscreen}
          centered
          className="custom-modal"
        >
          <Modal.Header className="modal-header-custom">
            <Modal.Title>SmartHR ML Report</Modal.Title>
            <Button variant="close" onClick={handleCloseModal}>
              &times;
            </Button>
          </Modal.Header>
          <Modal.Body className="p-0">
            <div className="pdf-container">
              <iframe 
                src={RapportML} 
                title="Rapport ML SmartHR"
                width="100%"
                height="100%"
                frameBorder="0"
              />
            </div>
          </Modal.Body>
          <Modal.Footer className="modal-footer-custom">
            <Button variant="outline-secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleDownload}>
              <FiDownload className="me-2" />
              Download PDF
            </Button>
          </Modal.Footer>
        </Modal>

        {/* CORRECTION ICI : Utiliser currentProjects au lieu de projects */}
        <Row className="justify-content-center">
          {currentProjects.map((project, index) => (
            <ProjectCard
              key={index}
              imgPath={project.imgPath}
              title={project.title}
              technologies={project.technologies}
              role={project.role}
              methodology={project.methodology}
              details={project.details}
              ghLink={project.ghLink}
              demoLink={project.demoLink}
              presentationLink={project.presentationLink}
              onViewReport={project.hasReport ? handleShowModal : null}
            />
          ))}
        </Row>

        {/* Pagination */}
        {totalPages > 1 && (
          <CustomPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </Container>
      
      {/* Styles CSS intégrés */}
      <style>
        {`
          .project-section {
            padding: 80px 0;
          }
          
          .project-heading {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            font-weight: 700;
          }
          
          .project-subheading {
            color: #6c757d;
            font-size: 1.1rem;
            max-width: 600px;
            margin: 0 auto;
          }
          
          .modern-project-card {
            border: none;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.07);
            transition: all 0.3s ease;
          }
          
          .modern-project-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          }
          
          .card-image-container {
            position: relative;
            overflow: hidden;
            height: 220px; /* Augmenté la hauteur pour des cartes plus grandes */
          }
          
          .card-image-container img {
            object-fit: cover;
            height: 100%;
            width: 100%;
          }
          
          .action-indicators {
            position: absolute;
            top: 15px;
            right: 15px;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          
          .action-indicators a, .action-indicators button {
            display: flex;
            align-items: center;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 500;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
            opacity: 0.95;
            border: none;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.2s ease;
          }
          
          .action-indicators a:hover, .action-indicators button:hover {
            opacity: 1;
            transform: scale(1.05);
          }
          
          .github-indicator {
            background: #333;
            color: white;
          }
          
          .demo-indicator {
            background: #0d6efd;
            color: white;
          }
          
          .presentation-indicator {
            background: #ffc107;
            color: #000;
          }
          
          .report-indicator {
            background: #198754;
            color: white;
          }
          
          .indicator-text {
            margin-left: 6px;
          }
          
          .technologies-container {
            position: relative;
          }
          
          .technologies {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 8px;
          }
          
          .tech-tag {
            background: #f1f3f5;
            color: #495057;
            padding: 4px 10px;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
          }
          
          .tech-tag:hover {
            background: #e9ecef;
            transform: translateY(-2px);
          }
          
          .show-more-btn {
            font-size: 0.8rem;
            color: #6f42c1;
            text-decoration: none;
            display: flex;
            align-items: center;
          }
          
          .show-more-btn:hover {
            color: #5a32a3;
          }
          
          .project-title {
            font-size: 1.3rem; /* Taille de police légèrement augmentée */
            font-weight: 600;
            margin: 12px 0 6px;
            color: #212529;
          }
          
          .project-role {
            color: #6f42c1;
            font-weight: 500;
            margin-bottom: 10px;
            font-size: 0.95rem;
          }
          
          .methodology-badge {
            margin-bottom: 12px;
            display: flex;
            justify-content: center;
          }
          
          .methodology-badge .badge {
            font-size: 0.8rem;
            padding: 6px 12px;
          }
          
          .project-description {
            color: #6c757d;
            font-size: 0.95rem; /* Taille de police légèrement augmentée */
            flex-grow: 1;
            line-height: 1.5;
          }
          
          .action-buttons {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            justify-content: center;
          }
          
          .action-btn {
            border-radius: 20px;
            padding: 6px 14px; /* Padding légèrement augmenté */
            font-size: 0.9rem; /* Taille de police légèrement augmentée */
            display: flex;
            align-items: center;
            transition: all 0.2s ease;
          }
          
          .action-btn:hover {
            transform: translateY(-2px);
          }
          
          .btn-outline-warning {
            color: #ffc107;
            border-color: #ffc107;
          }
          
          .btn-outline-warning:hover {
            background-color: #ffc107;
            color: #000;
          }
          
          .custom-modal .modal-content {
            border-radius: 0;
            border: none;
          }
          
          .modal-header-custom {
            background: #6f42c1;
            color: white;
            border: none;
            padding: 12px 20px;
          }
          
          .modal-footer-custom {
            border: none;
            padding: 12px 20px;
            justify-content: space-between;
            background: #f8f9fa;
          }
          
          .pdf-container {
            height: calc(100vh - 130px);
          }
          
          /* Styles pour la pagination */
          .pagination {
            margin-top: 2rem;
          }
          
          .page-item .page-link {
            color: #6f42c1;
            border: 1px solid #dee2e6;
            padding: 0.5rem 0.75rem;
          }
          
          .page-item.active .page-link {
            background-color: #6f42c1;
            border-color: #6f42c1;
            color: white;
          }
          
          .page-item.disabled .page-link {
            color: #6c757d;
          }
          
          .page-link:hover {
            background-color: #e9ecef;
            color: #6f42c1;
          }
          
          @media (max-width: 992px) {
            .project-heading {
              font-size: 2rem;
            }
          }
          
          @media (max-width: 768px) {
            .project-section {
              padding: 60px 0;
            }
            
            .card-image-container {
              height: 200px;
            }
            
            .indicator-text {
              display: none;
            }
            
            .action-indicators a, .action-indicators button {
              padding: 8px;
              border-radius: 50%;
            }
            
            .action-buttons {
              justify-content: center;
            }
            
            .technologies {
              gap: 6px;
            }
            
            .tech-tag {
              font-size: 0.7rem;
              padding: 3px 8px;
            }
            
            .pagination {
              flex-wrap: wrap;
            }
            
            .page-item .page-link {
              padding: 0.375rem 0.5rem;
              font-size: 0.875rem;
            }
          }
        `}
      </style>
    </Container>
  );
}

export default Projects;