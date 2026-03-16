import "./HeroSection.css";
import {  FileText, Mail, Github, Linkedin, Globe } from "lucide-react";

const HeroSection = () => {

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section id="hero" className="hero-section">

      <div className="hero-background"></div>
      <div className="hero-circle hero-circle-one"></div>
      <div className="hero-circle hero-circle-two"></div>

      <div className="hero-container">

        <p className="hero-intro fade-in">Hi, my name is</p>

        <h1 className="hero-name fade-in delay1">
          Madhumitha <span>Shanmugam</span>
        </h1>

        <p className="hero-title fade-in delay2">
          Software Engineer | Full Stack Developer
        </p>

        <p className="hero-description fade-in delay3">
          Building scalable web applications with React.js, FastAPI, and PostgreSQL
        </p>

        <div className="hero-buttons fade-in delay4">

          <button
            className="primary-btn"
            onClick={() => scrollTo("projects")}
          >
            View Projects
          </button>

          <button
            className="outline-btn"
            onClick={downloadResume}
          >
            <FileText size={16} />
            Download Resume
          </button>

          <button
            className="outline-btn"
            onClick={() => scrollTo("contact")}
          >
            <Mail size={16} />
            Contact Me
          </button>

        </div>

        <div className="hero-socials fade-in delay5">

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-icon"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="social-icon"
          >
            <Github size={20} />
          </a>

          <a
            href="https://yourportfolio.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Portfolio"
            className="social-icon"
          >
            <Globe size={20} />
          </a>

        </div>

        {/* <div className="scroll-indicator">
          <ArrowDown size={20} />
        </div> */}

      </div>

    </section>
  );
};

export default HeroSection;