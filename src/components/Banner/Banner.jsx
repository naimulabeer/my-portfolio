/* eslint-disable react/no-unescaped-entities */

import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import { Typewriter } from "react-simple-typewriter";

function Banner() {
  return (
    <div className="relative h-60 md:h-[80vh]">
      <motion.div
        className="absolute md:left-[40vw] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white"
        initial={{ y: "100vw" }}
        animate={{ y: -50, x: -100 }}
        transition={{ type: "spring", delay: 0.5 }}
      >
        <h1 className="lg:text-5xl md:text-3xl font-light mb-5">
          Hi, I'm{" "}
          <span className="text-[#0fa461e9] font-bold">
            <Typewriter
              words={["Naimul Haq Abeer"]}
              loop={2}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
      </motion.div>
      <h3 className="text-lg md:text-2xl text-slate-300 text-center absolute md:top-[45vh] top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Web Developer
      </h3>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <Link
          to="about"
          smooth
          duration={500}
          className="cursor-pointer text-2xl opacity-40 hover:opacity-100"
        >
          <FaChevronDown />
        </Link>
      </div>
    </div>
  );
}

export default Banner;
