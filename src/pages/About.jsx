import { FaCode, FaPaintBrush } from "react-icons/fa";
import Title from "../components/Global/Title";
import avatarImage from "../assets/avatarImage.png";

function About() {
  return (
    <div id="about" className="text-center py-12 mt-10 mb-10">
      <Title heading="About Me" />

      <div className="mb-10">
        <img
          src={avatarImage}
          alt="Avatar"
          className="rounded-full w-40 h-40 mx-auto"
        />
      </div>

      <span className="border-l-2 border-[#00b7c7] inline-block h-fit md:h-44 animate-border">
        <p className="max-w-xl mx-auto px-2 text text-left mb-8 ml-5 relative overflow-hidden">
          Recent Computer Science graduate from{" "}
          <span className="text-[#00b7c7]">
            United International University
          </span>{" "}
          and web development enthusiast with a Mediator personality.
          Specializing in the MERN stack, driven by an intuitive approach. With
          a feeling orientation, crafting harmonious digital experiences and
          embracing flexibility in a prospecting style. Currently immersed in
          mastering Next.js, bringing a determined spirit to shape the future of
          web development with innovation and accuracy.
        </p>
      </span>
      <div className="lg:w-1/3 md:w-1/2 mx-auto p-8">
        <h2 className="text-xl font-bold mb-6">SELF PROCLAMATIONS:</h2>

        <div className="flex justify-around">
          <div className="flex flex-col items-center gap-4">
            <FaCode className="text-2xl mr-2" />
            <p>Web Developer</p>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <FaPaintBrush className="text-2xl mr-2" />
            <p>UX Enthusiast</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
