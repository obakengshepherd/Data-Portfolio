import { projects } from "../data/portfolioData";

function Projects() {
  return (
    <section className="content-section projects-section" id="projects">
      <div className="container">
        <div className="section-heading centered">
          <p className="eyebrow">Projects</p>
          <h2>Selected Case Studies</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div
                className={`project-visual project-${project.accent}`}
                aria-hidden="true"
              >
                <span>Analytics</span>
              </div>
              <div className="project-body">
                <span className="badge">Case Study</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href="#" className="text-link">
                  View Case Study
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
