/* eslint-disable react/no-unescaped-entities */
import bannerImage from "../../assets/banner/banner2.jpg";

function Banner() {
  return (
    <div
      className="bg-cover bg-center relative h-60 md:h-[80vh]"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="lg:text-5xl md:text-3xl font-light mb-5">
          Hi, I'm Naimul Haq Abeer
        </h1>
        <h3 className="text-lg text-slate-300">Web Developer</h3>
      </div>
    </div>
  );
}

export default Banner;
