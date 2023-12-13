/* eslint-disable react/no-unescaped-entities */
import Title from "../components/Global/Title";
import { motion } from "framer-motion";

// Import skills images
import Skill1 from "../assets/skills/react.svg";
import Skill2 from "../assets/skills/nodejs.svg";
import Skill3 from "../assets/skills/expressjs.svg";
import Skill4 from "../assets/skills/mongodb.svg";
import Skill5 from "../assets/skills/nextjs.svg";
import Skill6 from "../assets/skills/html.svg";
import Skill7 from "../assets/skills/css.svg";
import Skill8 from "../assets/skills/js.svg";
import Skill9 from "../assets/skills/cplusplus.svg";
import Skill10 from "../assets/skills/python.svg";
import Skill11 from "../assets/skills/sass.svg";
import Skill12 from "../assets/skills/tailwind.svg";
import Skill13 from "../assets/skills/redux.svg";
import Skill14 from "../assets/skills/git.svg";
import Skill15 from "../assets/skills/github.svg";

const skillImages = [
  Skill1,
  Skill2,
  Skill3,
  Skill4,
  Skill5,
  Skill6,
  Skill7,
  Skill8,
  Skill9,
  Skill10,
  Skill11,
  Skill12,
  Skill13,
  Skill14,
  Skill15,
];

function Skills() {
  return (
    <div id="skills" className="mt-10 text-center mb-10">
      <Title heading="Skills" />

      <p className="my-4 px-2">
        I've been doing web development for about 3 years now, and I'm always
        eager to learn more in this fast-paced industry.
      </p>

      <h2 className="md:text-xl font-bold my-4 mt-5">
        SOME TECHNOLOGIES I'VE WORKED WITH:
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 lg:w-1/2 mx-auto gap-10 md:p-10">
        {skillImages.map((image, index) => (
          <div key={index} className="items-center">
            <motion.img
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              src={image}
              alt={`Skill ${index + 1}`}
              className="w-16 h-16 mx-auto transition-opacity duration-300 group-hover:opacity-80 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
