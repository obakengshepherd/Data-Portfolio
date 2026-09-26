import { profile } from "../data/portfolioData";

function About() {
  return (
    <section className="content-section" id="about">
      <div className="container narrow">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2>Research-led analysis with practical commercial impact.</h2>
        </div>

        <div className="about-grid">
          <div>
            <p>
              I am a Data Analyst with a strong focus on research, insight
              generation, and decision support. My work sits at the intersection
              of data, operations, and business understanding — helping teams
              turn raw information into actions that improve customer outcomes
              and performance.
            </p>
            <p>
              I am currently completing a Data Analytics Intern role in Research
              & Insight at FNB, where I am building hands-on experience in
              analytical problem solving, operational reporting, and
              systems-based thinking. I enjoy unpacking complex data sets to
              uncover patterns, explain drivers, and communicate recommendations
              clearly to stakeholders.
            </p>
          </div>

          <div className="about-card">
            <h3>Professional positioning</h3>
            <ul>
              <li>Data Analyst | Research & Insights</li>
              <li>Systems-thinking approach to business problems</li>
              <li>Fintech and operational context</li>
              <li>
                Strong grounding in analytical rigour and production-grade
                thinking
              </li>
            </ul>
            <div className="contact-inline">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <span>•</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
