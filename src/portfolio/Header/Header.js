import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "./Header.css";

const links = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">

        <button
          className="logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          M<span className="logo-highlight">S</span>
        </button>

        <div className="nav-links">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="nav-link"
            >
              {link}
            </button>
          ))}
        </div>

        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      <div className={`mobile-menu ${open ? "mobile-open" : ""}`}>
        {links.map((link) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            className="mobile-link"
          >
            {link}
          </button>
        ))}
      </div>

    </nav>
  );
};

export default Navbar;