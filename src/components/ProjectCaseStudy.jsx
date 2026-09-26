import { ArrowLeft } from "lucide-react";

function ProjectCaseStudy({ project }) {
  if (!project) {
    return (
      <section className="case-study-missing container">
        <p className="eyebrow">Case study</p>
        <h1>Project not found</h1>
        <a className="text-link" href="/#projects">
          <ArrowLeft size={17} />
          Back to projects
        </a>
      </section>
    );
  }

  const sections = [
    { title: "Project context", content: project.caseStudy.context },
    { title: "The challenge", content: project.caseStudy.challenge },
    { title: "Approach", content: project.caseStudy.approach },
    { title: "Illustrative outcome", content: project.caseStudy.outcome },
  ];

  return (
    <article className="case-study-page">
      <section className="case-study-intro">
        <div className="container">
          <a className="case-study-back" href="/#projects">
            <ArrowLeft size={17} strokeWidth={2} />
            All projects
          </a>
          <p className="eyebrow">Case study / {project.category}</p>
          <h1>{project.title}</h1>
          <p className="case-study-lede">{project.description}</p>
          <div
            className={`project-visual case-study-visual project-${project.accent}`}
            aria-label={`${project.category} project banner`}
            role="img"
          >
            <span>{project.category}</span>
          </div>
          <div className="case-study-meta">
            <span>
              Format <strong>Project preview</strong>
            </span>
            <span>
              Focus <strong>{project.category}</strong>
            </span>
            <span>
              Status <strong>Placeholder content</strong>
            </span>
          </div>
        </div>
      </section>

      <div className="container case-study-content">
        <div className="case-study-sections">
          {sections.map((section, index) => (
            <section className="case-study-section" key={section.title}>
              <p className="eyebrow">0{index + 1}</p>
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </section>
          ))}
        </div>

        <aside className="case-study-aside">
          <p className="eyebrow">Methods & materials</p>
          <h2>Areas covered</h2>
          <ul>
            {project.caseStudy.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
          <p className="case-study-note">
            This page uses illustrative placeholder copy. Project-specific
            evidence, visuals, and results can replace it as they become
            available.
          </p>
        </aside>
      </div>

      <div className="container case-study-return">
        <a className="text-link" href="/#projects">
          <ArrowLeft size={17} />
          Back to all projects
        </a>
      </div>
    </article>
  );
}

export default ProjectCaseStudy;
