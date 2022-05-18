import React from "react";
import "./About.css";
import data from "./content";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import { Image } from "mui-image";
import pic from "./picture.jpg";
import { Grid } from "@mui/material";

function About() {
  const about = data.about;
  var i = 0;
  return (
    <div style={{ background: "#fff" }} className="about">
      <div className="partition">
        <Grid container spacing={{ xs: 2, md: 6 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={5} md={5}>
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
          </Grid>
          <Grid item xs={4} md={7}>
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
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default About;
