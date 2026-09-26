import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Pricing from "./components/Pricing";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ProjectCaseStudy from "./components/ProjectCaseStudy";
import { projects } from "./data/portfolioData";
import "./App.css";

function App() {
  const projectRoute = window.location.pathname.match(
    /^\/projects\/([^/]+)\/?$/,
  );
  const project = projectRoute
    ? projects.find((item) => item.slug === projectRoute[1])
    : null;

  return (
    <div className="page-shell">
      <Header isCaseStudy={Boolean(projectRoute)} />
      <main>
        {projectRoute ? (
          <ProjectCaseStudy project={project} />
        ) : (
          <>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Pricing />
            <Skills />
            <ContactForm />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
