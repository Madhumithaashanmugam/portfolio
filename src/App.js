import './App.css';
import Navbar from './portfolio/Header/Header';
import HeroSection from './portfolio/HeroSection/HeroSection';
import AboutSection from './portfolio/AboutSection/AboutSection';
import SkillsSection from './portfolio/SkillsSection/SkillsSection';
import ExperienceSection from './portfolio/ExperienceSection/ExperienceSection';
import ProjectsSection from './portfolio/ProjectsSection/ProjectsSection';
import EducationSection from './portfolio/Education/Education';
import SoftSkillsSection from './portfolio/SoftSkillsSection/SoftSkillsSection';
import ContactSection from './portfolio/ContactSection/ContactSection';

import Footer from './portfolio/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <SkillsSection/>
      <ExperienceSection/>
      <ProjectsSection/>
      <EducationSection/>
      <SoftSkillsSection/>
      <ContactSection/>
      <Footer/>

    </div>
  );
}

export default App;
