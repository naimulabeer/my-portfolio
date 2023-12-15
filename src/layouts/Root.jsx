import Banner from "../components/Banner/Banner";
import NavBar from "../components/NavBar/NavBar";
import Resume from "../components/Resume/Resume";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Education from "../pages/Education";
import Footer from "../pages/Footer";
import Skills from "../pages/Skills";
import Work from "../pages/Work";
import { motion, useScroll, useSpring } from "framer-motion";

function Root() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scaleX }}
        />
      </svg>

      <NavBar />
      <Banner />
      <About />
      <Skills />
      <Resume />
      <Work />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default Root;
