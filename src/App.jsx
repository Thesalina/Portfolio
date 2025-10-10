import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div>
      <Navbar />

      <section id="home">
        <HeroSection />
      </section>

      <section id="services">
        <Services />
      </section>
      
      <section id="skills">
        <Skills />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="contact">
        <Contact />
      </section>
      <section id="Footer">
        <Footer/>
      </section>
    </div>
  );
};

export default App;
