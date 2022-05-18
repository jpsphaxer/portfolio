import React, { useState } from "react";
import "./Projects.css";
import CodeIcon from "@mui/icons-material/Code";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions, Grow } from "@mui/material";
import Divider from "@mui/material/Divider";
import portImg from "./portfolio.png";
import threes from "./threes.png";
import run from "./RunningApp.png";

function Projects() {
  return (
    <div style={{ background: "#fff" }} className="projects">
      <div className="partition-proj">
        <div className="title-container">
          <h1 className="proj-title">
            <CodeIcon sx={{ fontSize: 45 }} />
            Projects
          </h1>
          <div>
            <span className="info">
              The Following are Projects I have Worked On
            </span>
          </div>
        </div>
        <div className="projects-cards">
          <div className="card-container">
            <Card
              className="cards"
              sx={{ maxWidth: 400, maxHeight: 600 }}
              elevation={2}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="365"
                  image={portImg}
                  alt="portfolio"
                />
                <CardContent>
                  <Divider></Divider>
                  <h3>Porfolio Website</h3>
                  <span>
                    Portfolio website built using React.js, Material-UI, and
                    Javascript.
                  </span>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" variant="contained" color="primary"  onClick={() =>
                    window.open("https://github.com/jpsphaxer/portfolio")
                  }>
                  <span className="button-card">Go To Repository</span>
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="card-container">
            <Card
              className="cards"
              sx={{ maxWidth: 400, maxHeight: 600 }}
              elevation={2}
            >
              <CardActionArea>
                <CardMedia height="330">
                  <img className="pictures" src={threes}></img>
                </CardMedia>
                <CardContent>
                  <Divider></Divider>
                  <h3>Threes Game (iOS)</h3>
                  <span>
                    This a customized 'Threes' clone. Inside the app you will be
                    able to play Threes, try out a drawing canvas, and look be
                    able to look at a scoreboard keeping track of all your
                    games! Coded in Swift.
                  </span>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={() =>
                    window.open("https://github.com/jpsphaxer/Threes")
                  }>
                  <span className="button-card">Go To Repository</span>
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="card-container">
            <Card
              className="cards"
              sx={{ maxWidth: 400, maxHeight: 600 }}
              elevation={6}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="330"
                  image={run}
                  alt="portfolio"
                />
                <CardContent>
                  <Divider></Divider>
                  <h3>Running App (iOS)</h3>
                  <span>
                    Like running? Running App is the App for you! Running App is
                    run tracking application that helps you record your jogs.
                    This project is coded in Swift and optimized for iOS 15.4.
                    It also relies on FireBase so data is persistent.
                  </span>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" variant="contained" color="primary" onClick={() =>
                    window.open("https://github.com/jpsphaxer/RunningApp")
                  }>
                  <span className="button-card">Go To Repository</span>
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
