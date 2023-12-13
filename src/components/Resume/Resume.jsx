import resumeImage from "../../assets/banner/banner4.jpg";
import resumePdf from "/Resume.pdf";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";

function Resume() {
  return (
    <Parallax bgImage={resumeImage} strength={300}>
      <div className="h-64 flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold">CHECK OUT MY RÉSUMÉ!</h1>
          <motion.a
            whileHover={{
              scale: 1.2,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 10px rgba(98, 105, 105, 0.808)",
            }}
            animate={{ boxShadow: "0 0 4px #323030" }}
            transition={{ type: "spring" }}
            href={resumePdf}
            download="Resume.pdf"
            className="inline-block mt-4 border-2 cursor-pointer border-slate-300 px-6 py-2 bg-transparent"
          >
            Download
          </motion.a>
        </div>
      </div>
    </Parallax>
  );
}

export default Resume;
