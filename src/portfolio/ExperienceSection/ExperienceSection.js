import "./ExperienceSection.css";
import { Briefcase } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const experiences = [
{
company: "Famelyn",
role: "Software Engineer",
period: "June 2025 – Present",
projects: [
{
name: "LexFactos – Legal Services Platform",
bullets: [
"Built a legal services marketplace connecting clients and lawyers",
"Implemented authentication, lawyer verification, job posting, appointment scheduling",
],
tech: ["React.js", "FastAPI", "PostgreSQL", "JWT"],
},
{
name: "Fliplyn Ecosystem",
bullets: [
"B2B Corporate Cafeteria & Wallet Platform",
"Built automated wallet crediting using cron jobs",
"Implemented payment gateway using Cashfree",
"Developed admin dashboard for platform management",
],
tech: ["React.js", "FastAPI", "PostgreSQL"],
},
],
},
{
company: "TechSilicon",
role: "Freelance Full Stack Developer",
period: "April 2025 – June 2025",
projects: [
{
name: "Freelance Web Projects",
bullets: [
"Built SEO-friendly websites",
"Developed full eCommerce platform with vendor-customer roles",
],
tech: ["React.js", "FastAPI", "PostgreSQL"],
},
],
},
{
company: "Bmdpe Technologies",
role: "Backend Engineer Intern",
period: "Dec 2024 – Mar 2025",
projects: [
{
name: "Grocify",
bullets: [
"Developed backend APIs for vendor and customer workflows",
],
tech: ["Flask", "Python", "MongoDB"],
},
],
},
{
company: "TEK STRUCTURES",
role: "Frontend Engineering Intern",
period: "May 2024 – Oct 2024",
projects: [
{
name: "CRM Web Application & Scheduling Mobile App",
bullets: [
"Built CRM Web Application",
"Developed Scheduling Mobile App using React Native and Expo Calendar API",
],
tech: ["React.js", "React Native", "Expo"],
},
],
},
];

const ExperienceSection = () => {

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

if (ref.current) observer.observe(ref.current);

return () => observer.disconnect();

}, []);

return (

<section id="experience" className="experience-section" ref={ref}>

<div className="experience-container">

<div className={`experience-header ${visible ? "show" : ""}`}>

<Briefcase className="experience-icon" />

<h2 className="experience-title">Work Experience</h2>

<div className="experience-line"></div>

</div>

<div className="timeline">

{experiences.map((exp, i) => (

<div
key={i}
className={`timeline-item ${visible ? "show" : ""}`}
style={{ transitionDelay: `${i * 0.15}s` }}
>

<div className="timeline-dot"></div>

<div className="experience-card">

<div className="experience-top">

<div>

<h3 className="company">{exp.company}</h3>

<p className="role">{exp.role}</p>

</div>

<span className="period">{exp.period}</span>

</div>

{exp.projects.map((proj, j) => (

<div key={j} className="project">

<p className="project-name">{proj.name}</p>

<ul className="project-bullets">

{proj.bullets.map((b, k) => (

<li key={k}>
<span className="bullet">▸</span>
{b}
</li>

))}

</ul>

<div className="tech-stack">

{proj.tech.map((t, index) => (

<span key={index} className="tech-tag">
{t}
</span>

))}

</div>

</div>

))}

</div>

</div>

))}

</div>

</div>

</section>

);

};

export default ExperienceSection;