import Title from "../components/Global/Title";
import { Chrono } from "react-chrono";

const items = [
  {
    title: "Dhaka Residential Model College",
    cardTitle: "Dhaka Residential Model College",
    cardSubtitle: "Secondary School Certificate (SSC) in Science.",
    cardDetailedText: `I excelled academically, graduating with a perfect GPA of 5.00/5.00 in 2013. Actively involved in the Science Club, I showcased my passion for scientific exploration. Beyond academics, I thrived in sports, securing numerous prizes in competitive events and contributing to the vibrant sports culture of the school.`,
    date: "May,2013",
  },
  {
    title: "Dhaka Residential Model College",
    cardTitle: "Dhaka Residential Model College",
    cardSubtitle: "Higher Secondary School Certificate (HSC).",
    cardDetailedText: `In college, I also excelled academically, graduating with GPA: 5.00/5.00 in 2015. I maintained a dedicated academic focus, achieving academic excellence. Additionally, I immersed myself in the Computer Club, channeling my passion for technology and innovation. Simultaneously, I actively contributed to the cultural club, showcasing a well-rounded engagement in both academic and extracurricular pursuits.`,
    date: "July,2015",
  },
  {
    title: "United International University",
    cardTitle: "United International University",
    cardSubtitle: "BSC in Computer Science and Engineering (CSE)",
    cardDetailedText: `During my university years, I evolved into a dedicated reader and honed my skills through active participation in hackathons. While initially taking things slow, my academic commitment intensified over time. Joining the computer club, I eagerly engaged in coding competitions, further enhancing my expertise and contributing to the tech community. `,
    date: "May,2023",
  },
];

function Education() {
  return (
    <div className="mb-10 mt-10 lg:ml-10">
      <Title heading="Education" />
      <div
        id="education"
        className="mt-20 lg:w-[100%] h-screen lg:px-20"
        // style={{ width: "80%", height: "95vh", padding: "20px" }}
      >
        <Chrono
          items={items}
          mode="VERTICAL_ALTERNATING"
          itemWidth={220}
          flipLayout
          hideControls
          activeItemIndex={3}
          cardHeight={250}
          theme={{
            primary: "#00b7c7",
            secondary: "#00b7c7",
            iconBackgroundColor: "#fafafa",
            cardBgColor: "#86848461",
            titleColor: "#fafafa",
            titleColorActive: "#fafafa",
            cardTitleColor: "#fafafa",
            cardSubtitleColor: "#fafafa",
            cardDetailsColor: "#fafafa",
          }}
          classNames="chrono-container"
        >
          <div className="chrono-icons">
            <img
              src="https://img.icons8.com/ios/50/graduation-cap.png"
              alt="school"
            />
            <img
              src="https://img.icons8.com/ios/50/university.png"
              alt="college"
            />
            <img
              src="https://img.icons8.com/ios/50/motarboard.png"
              alt="twitter"
            />
          </div>
        </Chrono>
      </div>
    </div>
  );
}

export default Education;
