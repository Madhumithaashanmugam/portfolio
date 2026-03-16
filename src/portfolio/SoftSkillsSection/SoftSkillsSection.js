import "./SoftSkillsSection.css";
import { Heart, Users, Lightbulb, MessageCircle, CodeXml } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const softSkills = [
  { name: "Team Collaboration", icon: Users },
  { name: "Problem Solving", icon: Lightbulb },
  { name: "Effective Communication", icon: MessageCircle },
  { name: "Clean & Scalable Code", icon: CodeXml },
];

const SoftSkillsSection = () => {

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

    <section className="softskills-section" ref={sectionRef}>

      <div className="softskills-container">

        <div className={`softskills-header ${visible ? "show" : ""}`}>

          <Heart className="softskills-main-icon" />

          <h2 className="softskills-title">Soft Skills</h2>

          <div className="softskills-line"></div>

        </div>

        <div className="softskills-grid">

          {softSkills.map((skill, index) => {

            const Icon = skill.icon;

            return (

              <div
                key={skill.name}
                className={`softskill-card ${visible ? "show" : ""}`}
                style={{ transitionDelay: `${index * 0.12}s` }}
              >

                <div className="softskill-icon-box">

                  <Icon className="softskill-icon" />

                </div>

                <p className="softskill-name">{skill.name}</p>

              </div>

            );

          })}

        </div>

      </div>

    </section>

  );
};

export default SoftSkillsSection;