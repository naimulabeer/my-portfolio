import Title from "../components/Global/Title";
import bannerImage from "../assets/banner/banner1.jpg";
import { Parallax } from "react-parallax";

const educationData = [
  {
    id: 1,
    school: "Dhaka Residential Model College",
    certificate: "Secondary School Certificate (SSC) in Science ",
    graduationGPA: "Graduated with GPA: 5.00/5.00",
    date: "2013",
  },
  {
    id: 2,
    school: "Dhaka Residential Model College ",
    certificate: "Higher Secondary School Certificate (HSC)",
    graduationGPA: "Graduated with GPA: 5.00/5.00",
    date: "2015",
  },
  {
    id: 3,
    school: "United International University",
    certificate: "BSC in Computer Science and Engineering",
    date: "2023",
  },
];

function Education() {
  return (
    <div id="education" className=" flex flex-col items-center justify-center">
      <div className="mt-20">
        <Title heading="Education" />
      </div>
      {educationData?.map((education) => (
        <div
          key={education?.id}
          className="float-right flex flex-row items-center justify-between relative bg-[#1b1b1b] rounded-md m-2 p-6 w-1/2 opacity-85 transition-all hover:bg-[#434242] duration-300"
        >
          <div className="flex flex-col gap-5">
            <h2 className="font-bold lg:text-lg">{education?.school}</h2>
            <p className="text-sm">{education?.certificate}</p>
            <p className="text-sm">{education?.graduationGPA}</p>
          </div>
          <div>
            <p className="text-sm">{education?.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Education;
