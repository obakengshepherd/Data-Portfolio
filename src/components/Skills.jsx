import { skillGroups } from "../data/portfolioData";

function Skills() {
  return (
    <section className="content-section" id="skills">
      <div className="container">
        <div className="section-heading centered">
          <p className="eyebrow">Skills</p>
          <h2>Analytical capability across the full insight lifecycle.</h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
