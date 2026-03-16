import "./Footer.css";
import { ArrowUp, Github, Linkedin, Globe } from "lucide-react";

const Footer = () => {

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Globe, href: "#", label: "Portfolio" }
  ];

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        <p className="footer-text">
          © {new Date().getFullYear()} Madhumitha Shanmugam. All rights reserved.
        </p>

        <div className="footer-socials">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="footer-icon-link"
            >
              <Icon className="footer-icon"/>
            </a>
          ))}
        </div>

        <button
          onClick={scrollTop}
          className="footer-top-btn"
          aria-label="Back to top"
        >
          <ArrowUp className="footer-arrow"/>
        </button>

      </div>

    </footer>
  );
};

export default Footer;