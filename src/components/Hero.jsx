import { ArrowRight, Download, MessageSquareText } from "lucide-react";
import { heroStats, profile } from "../data/portfolioData";
import profilePhoto from "../assets/pro pic.jpeg";

function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Data Analyst | Research & Insights</p>
          <h1>Turning operational complexity into clear business decisions.</h1>
          <p className="value-proposition">
            “I turn complex operational and customer data into clear
            recommendations that drive decisions — combining analytical rigour
            with production-grade systems thinking.”
          </p>
          <p className="current-role">
            Currently: Data Analytics Intern – Research & Insight at FNB
          </p>

          <div className="cta-row">
            <a className="button" href="#projects">
              <span>View Projects</span>
              <ArrowRight size={18} strokeWidth={2.25} />
            </a>
            <a
              className="button button-secondary"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Download size={18} strokeWidth={2.25} />
              <span>Download Resume</span>
            </a>
            <a className="button button-ghost" href="#contact">
              <MessageSquareText size={18} strokeWidth={2.25} />
              <span>Contact</span>
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Profile summary">
          <div className="profile-card">
            <img
              className="profile-photo"
              src={profilePhoto}
              alt={profile.name}
            />
            <div>
              <p className="profile-label">Profile</p>
              <h2>{profile.name}</h2>
            </div>
          </div>

          <div className="meta-list">
            <div>
              <span>Location</span>
              <strong>{profile.location}</strong>
            </div>
            <div>
              <span>Current role</span>
              <strong>{profile.role}</strong>
            </div>
            <div>
              <span>Core focus</span>
              <strong>Insight, analytics, systems thinking</strong>
            </div>
          </div>

          <div className="stats-grid" aria-label="Professional highlights">
            {heroStats.map((stat) => (
              <div className="stat-box" key={stat.label}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
