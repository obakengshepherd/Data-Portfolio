import { profile } from "../data/portfolioData";

function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a
          className="brand"
          href="#top"
          aria-label="Obakeng Shepherd Tsaagane homepage"
        >
          <span className="brand-mark">OST</span>
          <span>
            <strong>{profile.name}</strong>
            <small>{profile.title}</small>
          </span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="button button-small button-ghost"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
    </header>
  );
}

export default Header;
