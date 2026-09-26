import { useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../data/portfolioData";

function Header({ isCaseStudy = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a
          className="brand"
          href={isCaseStudy ? "/#top" : "#top"}
          aria-label="Obakeng Shepherd Tsaagane homepage"
        >
          <span className="brand-mark">OST</span>
          <span>
            <strong>{profile.name}</strong>
            <small>{profile.title}</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav
          className={`main-nav${isMenuOpen ? " is-open" : ""}`}
          id="main-navigation"
          aria-label="Main navigation"
        >
          <a href={isCaseStudy ? "/#about" : "#about"} onClick={closeMenu}>
            About
          </a>
          <a href={isCaseStudy ? "/#experience" : "#experience"} onClick={closeMenu}>
            Experience
          </a>
          <a href={isCaseStudy ? "/#projects" : "#projects"} onClick={closeMenu}>
            Projects
          </a>
          <a href={isCaseStudy ? "/#pricing" : "#pricing"} onClick={closeMenu}>
            Pricing
          </a>
          <a href={isCaseStudy ? "/#contact" : "#contact"} onClick={closeMenu}>
            Contact
          </a>
          {!isCaseStudy && (
            <a
              className="button button-small button-ghost menu-resume"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              Resume
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
