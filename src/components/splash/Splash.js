import React, {Component} from "react";
import { init } from 'ityped'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Icon, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import FileOpenIcon from '@mui/icons-material/FileOpen';
import './Splash.css'
import SubHeading from "./Typed";
import pdf from './Resume_Josue.pdf'



function Splash() {

  const iconSize = {fontSize: 40}

  return (
    <div style={{ background: "#24527a" }} className="header">
      <h1 className="item2">Josue Proano</h1>
      
      <div>
        <SubHeading/>
      </div>
      <div className="header-icons">
        <div className="icon">
          <IconButton
            onClick={() =>
              window.open("https://www.linkedin.com/in/josueproano/")
            }
            sx={{ color: "white" }}
          >
            <LinkedInIcon sx={ iconSize } />
          </IconButton>
            <div className="label">LinkedIn</div>
        </div>
        &nbsp; &nbsp;
        <div className="icon">
          <IconButton onClick={() => window.open("https://github.com/jpsphaxer")} sx={{ color: "white" }}>
            <GitHubIcon
              
              sx={ iconSize }
            />
          </IconButton>
            <div className="label">GitHub</div>
        </div>
        &nbsp; &nbsp;
        <div className="icon">
          <IconButton onClick={() => window.open("mailto:jos.proano@gmail.com")} sx={{ color: "white" }}>
            <EmailIcon
              
              sx={ iconSize }
            />
          </IconButton>
            <div className="label">Email</div>
        </div>
        &nbsp; &nbsp;
        <div className="icon">
          <IconButton onClick={() => window.open(pdf)} sx={{ color: "white" }}>
            <FileOpenIcon
              
              sx={ iconSize }
            />
          </IconButton>
            <div className="label">Resume</div>
        </div>
      </div>
    </div>
  );
}



export default Splash;
