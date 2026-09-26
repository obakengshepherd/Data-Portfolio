import { experience } from "../data/portfolioData";

function Experience() {
  return (
    <section className="content-section experience-section" id="experience">
      <div className="container narrow">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>
            Hands-on work in research, insight, and business decision support.
          </h2>
        </div>

        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-card" key={item.role}>
              <div className="experience-topline">
                <span className="experience-period">{item.period}</span>
                <span className="experience-company">{item.company}</span>
              </div>

              <h3>{item.role}</h3>
              <p className="experience-summary">{item.summary}</p>

              <ul>
                {item.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
