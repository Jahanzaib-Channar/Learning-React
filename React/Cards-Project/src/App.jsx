import React from "react";
import Card from "./component/Card";

const App = () => {

const jobs = [
  {
    date: "29 May, 2026",
    companyName: "Google",
    role: "Frontend Developer",
    companyLogo: "src/assets/google.jpg",
    tags: ["Full Time", "Senior Level"],
    dollarPerHour: 65,
    location: "New York, NY",
    cardColor: "#C9D9F2",
    tagColor: "#2457A6",
  },

  {
    date: "02 June, 2026",
    companyName: "Microsoft",
    role: "Software Engineer",
    companyLogo: "src/assets/Microsoft.png",
    tags: ["Full Time", "Junior Level"],
    dollarPerHour: 55,
    location: "New York, NY",
    cardColor: "#C5E3DC",
    tagColor: "#176B5C",
  },

  {
    date: "08 June, 2026",
    companyName: "Apple",
    role: "UI/UX Designer",
    companyLogo: "src/assets/apple.png",
    tags: ["Part Time", "Senior Level"],
    dollarPerHour: 60,
    location: "San Francisco, CA",
    cardColor: "#D6D6D6",
    tagColor: "#4A4A4A",
  },

  {
    date: "15 June, 2026",
    companyName: "Meta",
    role: "React Developer",
    companyLogo: "src/assets/meta.png",
    tags: ["Full Time", "Junior Level"],
    dollarPerHour: 50,
    location: "New York, NY",
    cardColor: "#C6DCF3",
    tagColor: "#2459A6",
  },

  {
    date: "21 June, 2026",
    companyName: "Amazon",
    role: "Backend Developer",
    companyLogo: "src/assets/amzon.png",
    tags: ["Full Time", "Senior Level"],
    dollarPerHour: 70,
    location: "Seattle, WA",
    cardColor: "#F0D5AD",
    tagColor: "#A85D08",
  },

  {
    date: "28 June, 2026",
    companyName: "Netflix",
    role: "Full Stack Developer",
    companyLogo: "src/assets/netflex.jpg",
    tags: ["Full Time", "Senior Level"],
    dollarPerHour: 75,
    location: "Los Angeles, CA",
    cardColor: "#E9BFC3",
    tagColor: "#B51E2B",
  },

  {
    date: "05 July, 2026",
    companyName: "Adobe",
    role: "Product Designer",
    companyLogo: "src/assets/adobe.png",
    tags: ["Part Time", "Junior Level"],
    dollarPerHour: 45,
    location: "San Francisco, CA",
    cardColor: "#F0CACA",
    tagColor: "#B43B32",
  },

  {
    date: "12 July, 2026",
    companyName: "Spotify",
    role: "Web Developer",
    companyLogo: "src/assets/spotify.png",
    tags: ["Full Time", "Junior Level"],
    dollarPerHour: 48,
    location: "New York, NY",
    cardColor: "#BFE2CF",
    tagColor: "#167344",
  },

  {
    date: "19 July, 2026",
    companyName: "Tesla",
    role: "Software Engineer",
    companyLogo: "src/assets/Microsoft.png",
    tags: ["Full Time", "Senior Level"],
    dollarPerHour: 68,
    location: "Austin, TX",
    cardColor: "#D0D0D0",
    tagColor: "#8B1E1E",
  },

  {
    date: "26 July, 2026",
    companyName: "Shopify",
    role: "Frontend Engineer",
    companyLogo: "src/assets/spotify.png",
    tags: ["Part Time", "Junior Level"],
    dollarPerHour: 42,
    location: "New York, NY",
    cardColor: "#BFDCD2",
    tagColor: "#176B58",
  },
];

  return (
    <div className="parent">
      {jobs.map(function (el, idx) {
        return (
          <div key={idx}>
            <Card
              date={el.date}
              company={el.companyName}
              role={el.role}
              logo={el.companyLogo}
              hour={el.dollarPerHour}
              loc={el.location}
              tag_1={el.tags[0]}
              tag_2={el.tags[1]}
              cardcolor = {el.cardColor}
              tagcolor = {el.tagColor}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
