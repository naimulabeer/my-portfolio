/* eslint-disable react/no-unescaped-entities */

import { FaChevronDown, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function Banner() {
  return (
    <div className="relative h-[100vh]">
      <div className="hidden animate-border xl:block absolute top-14 left-[270px] h-72 w-72 border-l-[20px] border-t-[20px] border-[#00b7c7] p-4 rounded-t-xl rounded-r-xl rounded-b-xl rounded-l-xl px-5"></div>
      <div className="hidden animate-border xl:block absolute bottom-14 right-[270px] h-72 w-72 border-r-[20px] border-b-[20px] border-[#00b7c7] p-4 rounded-t-xl rounded-r-xl rounded-b-xl rounded-l-xl px-5"></div>

      <motion.div
        className="absolute md:left-[35vw] w-max top-1/2 left-1/2 text-center "
        initial={{ y: "100vw" }}
        animate={{ y: -50, x: -100 }}
        transition={{ type: "spring", delay: 0.5 }}
      >
        <h1 className="xl:text-6xl lg:text-4xl md:text-3xl text-lg font-light md:mb-5">
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
      <div className="absolute hidden lg:block bottom-24 right-[320px] text-right text-sm ">
        &copy; {new Date().getFullYear()} naimulabeer.com
      </div>
      <motion.a
        whileHover={{
          scale: 1.2,
        }}
        href="mailto:naimul.h.abeer@gmail.com"
        className="absolute z-10 hidden lg:block top-32 right-[440px] cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiGmail style={{ fontSize: "1.5rem" }} />
      </motion.a>
      <motion.a
        whileHover={{
          scale: 1.2,
        }}
        href="https://github.com/naimulabeer"
        className="absolute z-10 hidden lg:block top-32 right-[390px] cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub style={{ fontSize: "1.5rem" }} />
      </motion.a>

      <motion.a
        whileHover={{
          scale: 1.2,
        }}
        href="https://www.linkedin.com/in/naimul-haq-abeer-5b3a311bb/"
        className="absolute z-10 hidden lg:block top-32 right-[340px] cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin style={{ fontSize: "1.5rem" }} />
      </motion.a>
    </div>
  );
}

export default Banner;
