import "./SkillsSection.css";
import { Code2, Database, Wrench, Palette, BarChart3, Globe2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const skillCategories = [
  { title: "Languages", icon: Code2, skills: ["JavaScript", "Python"] },
  { title: "Frameworks", icon: Globe2, skills: ["React.js", "React Native", "FastAPI", "Flask"] },
  { title: "Web Technologies", icon: Globe2, skills: ["HTML5", "CSS", "RESTful APIs"] },
  { title: "Databases", icon: Database, skills: ["PostgreSQL", "MongoDB", "SQL"] },
  { title: "Tools", icon: Wrench, skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook"] },
  { title: "Design", icon: Palette, skills: ["Tailwind CSS", "Sass"] },
  { title: "Domain Skills", icon: BarChart3, skills: ["Domain Mapping", "Requirement Analysis", "System Planning"] }
];

const SkillsSection = () => {

  const sectionRef = useRef(null);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();

  }, []);

  return (

    <section id="skills" className="skills-section" ref={sectionRef}>

      <div className="skills-container">

        <div className={`skills-header ${visible ? "show" : ""}`}>

          <Code2 className="skills-main-icon" />

          <h2 className="skills-title">Technical Skills</h2>

          <div className="skills-line"></div>

        </div>

        <div className="skills-grid">

          {skillCategories.map((cat, index) => {

            const Icon = cat.icon;

            return (

              <div
                key={index}
                className={`skill-card ${visible ? "show" : ""}`}
                style={{ transitionDelay: `${index * 0.12}s` }}
              >

                <div className="skill-card-header">

                  <div className="skill-icon-box">
                    <Icon size={16} />
                  </div>

                  <h3>{cat.title}</h3>

                </div>

                <div className="skill-list">

                  {cat.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </section>

  );
};

export default SkillsSection;