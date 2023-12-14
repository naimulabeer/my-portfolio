/* eslint-disable react/no-unescaped-entities */

import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import { Typewriter } from "react-simple-typewriter";

function Banner() {
  return (
    <div className="relative h-[100vh]">
      <div className="hidden animate-border lg:block absolute top-14 left-[180px] h-60 w-60 border-l-[20px] border-t-[20px] border-[#00b7c7] p-4 rounded-t-xl rounded-r-xl rounded-b-xl rounded-l-xl px-5"></div>
      <div className="hidden animate-border lg:block absolute bottom-14 right-[180px] h-60 w-60 border-r-[20px] border-b-[20px] border-[#00b7c7] p-4 rounded-t-xl rounded-r-xl rounded-b-xl rounded-l-xl px-5"></div>

      <motion.div
        className="absolute md:left-[35vw] w-max top-1/2 left-1/2 text-center "
        initial={{ y: "100vw" }}
        animate={{ y: -50, x: -100 }}
        transition={{ type: "spring", delay: 0.5 }}
      >
        <h1 className="lg:text-6xl md:text-3xl text-lg font-light md:mb-5">
          Hi, I'm{" "}
          <span className="text-[#00b7c7] font-bold animate-color-change">
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
      <h3 className="md:text-2xl text-center absolute md:top-[55vh] top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Web Developer
      </h3>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
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
