import projectsData from "/projects.json";
import Title from "../components/Global/Title";
import { motion } from "framer-motion";

function Work() {
  return (
    <div
      id="work"
      className="flex flex-col items-center p-10 md:p-4 space-y-10 mt-10 mb-20"
    >
      <Title heading="Projects" />
      {projectsData.map((project, index) => (
        <div
          key={project.id}
          className="max-w-screen-xl w-full flex flex-col items-center"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-1300px h-600px object-cover rounded-md shadow-md cursor-pointer"
          />
          <div className="flex flex-col items-start mt-4 w-full">
            <h1 className="lg:text-3xl text-lg md:text-2xl font-bold">
              {project.title}
            </h1>
            <p className="text-gray-700 my-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 py-2">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="border bg-slate-600 text-slate-300 rounded-md p-2"
                >
                  {tech}
                </div>
              ))}
            </div>
            <div className="flex gap-5 mt-4 w-full">
              <motion.a
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgb(255,255,255)",
                  boxShadow: "0px 0px 10px rgb(23, 185, 188)",
                }}
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-[#00b7c7] font-bold  px-6 py-2 hover:bg-[#00b7c7] hover:text-white transition-all duration-300"
              >
                Live
              </motion.a>
              <motion.a
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgb(255,255,255)",
                  boxShadow: "0px 0px 10px rgb(23, 185, 188)",
                }}
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-[#00b7c7] font-bold px-6 py-2 hover:bg-[#00b7c7] hover:text-white transition-all duration-300"
              >
                Code
              </motion.a>
            </div>
          </div>
          {index < projectsData.length - 1 && (
            <div className="w-28 h-1 self-start bg-[#00b7c7] mt-10"></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Work;
