import { useState } from "react";
import projectsData from "/projects.json";
import Title from "../components/Global/Title";
import { motion } from "framer-motion";

function Work() {
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);

  const handleTabClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div id="work" className="mt-10">
      <Title heading="Projects" />
      <div className="flex flex-col lg:flex-row lg:px-[220px] mt-10">
        <div className="lg:w-1/3 mt-20 lg:-mr-20">
          <h2 className="text-2xl font-bold p-4 mb-5">My Projects</h2>
          <div className="border-t-2 border-l-2 rounded-tl-xl w-20 h-20 absolute left-45 border-[#00b7c7] lg:block hidden animate-border" />
          <div className="flex lg:flex-col absolute lg:px-5 lg:py-5">
            {projectsData.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.05 }}
                className={`p-4 cursor-pointer ${
                  selectedProject.id === project.id &&
                  "underline underline-offset-8 decoration-[#00b7c7] w-28 md:w-fit"
                }`}
                onClick={() => handleTabClick(project)}
              >
                {project.title}
              </motion.div>
            ))}
          </div>
        </div>
        {/* Left side content */}
        <div className="flex-1 md:p-20 px-4 py-4 space-y-10 mt-20 md:mt-0 mb-20">
          <div className="max-w-screen-sm w-full lg:mr-20 lg:px-2">
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 md:h-80 object-cover rounded-md shadow-md mb-4"
            />
            <div className="flex flex-col items-start">
              <h1 className="lg:text-3xl text-lg md:text-2xl font-bold mb-2">
                {selectedProject.title}
              </h1>
              <p className=" mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 py-2">
                {selectedProject.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="border border-[#00b7c7] rounded-md p-2 animate-border"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <div className="flex gap-5 mt-4">
                <motion.a
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0px 0px 8px #fafafa",
                    boxShadow: "0px 0px 10px rgb(23, 185, 188)",
                  }}
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="  font-bold px-6 py-2 bg-[#00b7c7]  transition-all duration-300"
                >
                  Live
                </motion.a>
                <motion.a
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0px 0px 8px #fafafa",
                    boxShadow: "0px 0px 10px rgb(23, 185, 188)",
                  }}
                  href={selectedProject.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold px-6 py-2 bg-[#00b7c7] transition-all duration-300"
                >
                  Code
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        {/* Right side tabs */}
      </div>
    </div>
  );
}

export default Work;
