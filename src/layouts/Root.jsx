import Banner from "../components/Banner/Banner";
import NavBar from "../components/NavBar/NavBar";
import Resume from "../components/Resume/Resume";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Education from "../pages/Education";
import Footer from "../pages/Footer";
import Skills from "../pages/Skills";
import Work from "../pages/Work";

function Root() {
  return (
    <div>
      <NavBar />
      <Banner />
      <About />
      <Skills />
      <Resume />
      <Work />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default Root;
