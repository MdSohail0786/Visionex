import { useState, useEffect } from "react";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about-one" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
  { label: "Jobs", href: "#jobs" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="#home" className="navbar__logo">
          <span className="navbar__logo-mark">V</span>
          <span className="navbar__logo-text">isionex</span>
        </a>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={"navbar__hamburger" + (menuOpen ? " navbar__hamburger--open" : "")}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={"navbar__mobile-menu" + (menuOpen ? " navbar__mobile-menu--open" : "")}>
        <ul className="navbar__mobile-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="navbar__mobile-link" onClick={handleLinkClick}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
