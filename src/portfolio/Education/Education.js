import "./Education.css";
import { GraduationCap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const EducationSection = () => {

  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

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

    <section id="education" className="education-section" ref={ref}>

      <div className="education-container">

        <div className={`education-header ${visible ? "show" : ""}`}>

          <GraduationCap className="education-icon" />

          <h2 className="education-title">Education</h2>

          <div className="education-line"></div>

        </div>

        <div className={`education-card ${visible ? "show" : ""}`}>

          <h3 className="degree">
            Bachelor of Computer Applications (BCA)
          </h3>

          <p className="college">
            SDHR Degree and PG College
          </p>

          <p className="university">
            Sri Venkateswara University, Tirupati
          </p>

          <div className="cgpa-box">
            <span>CGPA: 7.93</span>
          </div>

        </div>

      </div>

    </section>

  );
};

export default EducationSection;