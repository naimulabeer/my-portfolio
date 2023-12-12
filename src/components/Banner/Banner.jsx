/* eslint-disable react/no-unescaped-entities */
import bannerImage from "../../assets/banner/banner2.jpg";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";

function Banner() {
  return (
    <Parallax
      bgImage={bannerImage}
      strength={-300}
      blur={{ min: -25, max: 15 }}
    >
      <div className="bg-cover bg-center relative h-60 md:h-[80vh]">
        <motion.div
          className="absolute md:left-[40vw] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white"
          initial={{ y: "100vw" }}
          animate={{ y: -50, x: -100 }}
          transition={{ type: "spring", delay: 0.5 }}
        >
          <h1 className="lg:text-5xl md:text-3xl font-light mb-5">
            Hi, I'm{" "}
            <motion.span
              animate={{
                color: "#09318a",
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 0.2,
                type: "tween",
                stiffness: 120,
              }}
            >
              Naimul Haq Abeer
            </motion.span>
          </h1>
          <h3 className="text-lg text-slate-300">Web Developer</h3>
        </motion.div>
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
    </Parallax>
  );
}

export default Banner;
