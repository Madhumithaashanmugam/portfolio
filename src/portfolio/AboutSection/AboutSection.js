import "./AboutSection.css";
import { User } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const AboutSection = () => {

  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="about-section">

      <div className="about-container">

        <div className={`about-header ${visible ? "show" : ""}`}>
          <User className="about-icon" />

          <h2 className="about-title">About Me</h2>

          <div className="about-line"></div>
        </div>

        <div className={`about-card ${visible ? "show" : ""}`}>

          <p className="about-text">

            Results-driven Software Engineer with
            <span className="highlight"> 2+ years </span>

            of hands-on experience as an Individual Contributor across product development and freelance projects.

            Experienced in managing the entire software lifecycle including planning, full-stack development,
            deployment, and production support.

            Specialized in building scalable web applications using

            <span className="tech"> React.js</span>,
            <span className="tech"> FastAPI</span>, and
            <span className="tech"> PostgreSQL</span>.

          </p>

        </div>

      </div>

    </section>
  );
};

export default AboutSection;