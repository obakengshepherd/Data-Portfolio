import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Pricing from "./components/Pricing";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Pricing />
        <Skills />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
