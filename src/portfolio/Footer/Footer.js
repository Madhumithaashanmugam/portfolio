import "./Footer.css";
import { ArrowUp, Linkedin, Globe } from "lucide-react";

const Footer = () => {

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/madhumithashanmugam/",
      label: "LinkedIn"
    },
    {
      icon: Globe,
      href: "https://madhumithashanmugam.netlify.app/",
      label: "Portfolio"
    }
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
              target="_blank"
              rel="noopener noreferrer"
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