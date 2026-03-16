import "./ProjectsSection.css";
import { FolderOpen } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "LexFactos",
    subtitle: "Legal Marketplace",
    description:
      "End-to-end legal services marketplace connecting clients with verified lawyers. Includes lawyer onboarding, job posting, appointment scheduling, and role-based dashboards.",
    tech: ["React.js", "FastAPI", "PostgreSQL", "JWT"],
  },
  {
    title: "Fliplyn B2B",
    subtitle: "Corporate Cafeteria & Wallet Platform",
    description:
      "Corporate cafeteria system allowing companies to provide subsidized or free meals. Includes automated wallet crediting using cron jobs and Cashfree payment integration.",
    tech: ["React.js", "FastAPI", "PostgreSQL", "Cashfree", "Cron Jobs"],
  },
  {
    title: "Fliplyn B2C",
    subtitle: "Kiosk Ordering System",
    description:
      "Self-service kiosk food ordering system enabling customers to browse menus, place orders, and complete payments directly from kiosk devices.",
    tech: ["React.js", "FastAPI", "PostgreSQL"],
  },
  {
    title: "Fliplyn FindCaterer",
    subtitle: "Caterer Discovery Platform",
    description:
      "Discovery platform helping users find caterers using location-based search. Includes caterer profiles and direct customer messaging features.",
    tech: ["React.js", "FastAPI", "PostgreSQL"],
  },
  {
    title: "Fliplyn Admin Platform",
    subtitle: "Centralized Admin Dashboard",
    description:
      "Central admin dashboard managing companies, caterers, users, wallets, and transactions across all Fliplyn products with role-based access control.",
    tech: ["React.js", "FastAPI", "PostgreSQL", "RBAC"],
  },
  {
    title: "Grocify",
    subtitle: "Food Delivery Backend",
    description:
      "Backend API platform supporting vendor and customer workflows for a grocery and food delivery application.",
    tech: ["Flask", "Python", "MongoDB"],
  },
  {
    title: "E-Commerce Platform",
    subtitle: "Vendor-Customer Marketplace",
    description:
      "Full-stack eCommerce platform with vendor and customer roles, product management, order processing, and secure payment flows.",
    tech: ["React.js", "FastAPI", "PostgreSQL"],
  },
  {
    title: "CRM Web Application",
    subtitle: "Client Relationship Management",
    description:
      "CRM system allowing businesses to manage clients, workflows, and internal operations with role-based authentication.",
    tech: ["React.js", "FastAPI", "PostgreSQL"],
  },
  {
    title: "Scheduling Mobile App",
    subtitle: "React Native Calendar App",
    description:
      "Mobile application with event scheduling using Expo Calendar API and theme management using Context API.",
    tech: ["React Native", "JavaScript", "Expo"],
  },
];

const ProjectsSection = () => {

  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();

  }, []);

  return (

    <section id="projects" className="projects-section" ref={ref}>

      <div className="projects-container">

        <div className={`projects-header ${visible ? "show" : ""}`}>
          <FolderOpen className="projects-icon" />
          <h2 className="projects-title">Projects</h2>
          <div className="projects-line"></div>
        </div>

        <div className="projects-grid">

          {projects.map((proj, index) => (

            <div
              key={index}
              className={`project-card ${visible ? "show" : ""}`}
              style={{ transitionDelay: `${index * 0.12}s` }}
            >

              <h3 className="project-title">{proj.title}</h3>

              <p className="project-subtitle">{proj.subtitle}</p>

              <p className="project-description">
                {proj.description}
              </p>

              <div className="tech-stack">

                {proj.tech.map((tech, i) => (

                  <span key={i} className="tech-badge">
                    {tech}
                  </span>

                ))}

              </div>

              {/* <button className="project-button">
                <ExternalLink size={14} />
                View Project
              </button> */}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default ProjectsSection;