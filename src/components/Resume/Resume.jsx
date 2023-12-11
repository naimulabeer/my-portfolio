import resumeImage from "../../assets/banner/banner4.jpg";
import resumePdf from "/Resume.pdf";

function Resume() {
  return (
    <div
      className="relative h-[270px] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${resumeImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold">CHECK OUT MY RÉSUMÉ!</h1>
        <a
          href={resumePdf}
          download="Resume.pdf"
          className="inline-block mt-4 border-2 cursor-pointer border-slate-300 px-6 py-2 bg-background text-white transition-all duration-500 ease-in-out hover:w-40 hover:bg-opacity-75 transform hover:scale-105"
        >
          Download
        </a>
      </div>
    </div>
  );
}

export default Resume;
