import { Globe, BriefcaseBusiness, Mail, FileText } from "lucide-react";
import { profile } from "../data/portfolioData";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-name">{profile.name}</p>
          <p className="footer-title">{profile.title}</p>
          <a href={`mailto:${profile.email}`} className="footer-mail-link">
            <Mail size={15} strokeWidth={2} />
            <span>{profile.email}</span>
          </a>
        </div>

        <div className="footer-links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <BriefcaseBusiness size={16} strokeWidth={2} />
            <span>LinkedIn</span>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Globe size={16} strokeWidth={2} />
            <span>GitHub</span>
          </a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            <FileText size={16} strokeWidth={2} />
            <span>Resume</span>
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
