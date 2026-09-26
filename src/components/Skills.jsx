import {
  Database,
  BarChart3,
  FileSpreadsheet,
  TrendingUp,
  Code2,
  BrainCircuit,
} from "lucide-react";
import { SiPython, SiReact, SiGoogleanalytics } from "react-icons/si";
import { skillGroups } from "../data/portfolioData";

const toolIcons = {
  "Analysis & BI": BarChart3,
  "Data & SQL": Database,
  "Programming & Automation": Code2,
  "Tools & Other": TrendingUp,
  SQL: Database,
  Python: SiPython,
  Tableau: BarChart3,
  "Power BI": TrendingUp,
  Excel: FileSpreadsheet,
  React: SiReact,
  "Google Analytics": SiGoogleanalytics,
  Strategy: BrainCircuit,
  "Data Storytelling": Code2,
};

function Skills() {
  return (
    <section className="content-section" id="skills">
      <div className="container">
        <div className="section-heading centered">
          <p className="eyebrow">Skills</p>
          <h2>Analytical capability across the full insight lifecycle.</h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => {
            const Icon = toolIcons[group.title] || BarChart3;

            return (
              <div className="skill-card" key={group.title}>
                <div className="skill-card-header">
                  <span className="skill-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <h3>{group.title}</h3>
                </div>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
