import Banner from "../components/Banner/Banner";
import NavBar from "../components/NavBar/NavBar";
import About from "../pages/About";
import Skills from "../pages/Skills";

function Root() {
  return (
    <div>
      <NavBar />
      <Banner />
      <About />
      <Skills />
    </div>
  );
}

export default Root;
