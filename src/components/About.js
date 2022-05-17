import React from "react";
import "./About.css";
import data from "./content";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import { Image } from "mui-image";
import pic from "./picture.jpg";

function About() {
  const about = data.about;
  var i = 0;
  return (
    <div style={{ background: "#fff" }} className="about">

      <div className="partition">
        <div className="left">
        <div className="title-container">
        <h1 className="about-title">
          <SentimentVerySatisfiedIcon sx={{ fontSize: 45 }} /> About Me
        </h1>
      </div>

          {about.map((sentence) => (
            <p className="sentence" key={i++}>
              {sentence}
            </p>
          ))}
        </div>
        <div className="right">
          <Image
            fit="cover"
            shift="left"
            distance="100px"
            shiftDuration={900}
            src={pic}
            width="300px"
            height="400px"
          />
     
        </div>
      </div>
    </div>
  );
}

export default About;
