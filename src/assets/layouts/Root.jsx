import Banner from "../../components/Banner/Banner";
import NavBar from "../../components/NavBar/NavBar";
import About from "../pages/About";

function Root() {
  return (
    <div>
      <NavBar />
      <Banner />
      <About />
    </div>
  );
}

export default Root;
