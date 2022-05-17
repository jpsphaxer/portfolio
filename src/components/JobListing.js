import React from "react";
import "./JobListing.css";

import data from "./content";
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
function JobListing(props) {

var i = 0; 
 const workplace = data.work
  const style = {
    height: 100,
    width: 1000,
    margin: "1em",
    textAlign: "left",
    display: "inline-block",
  };

  return (
    <div className="job-listing-card">
      <div className="card">
          
          <div className="heading">
            <span className="job">{workplace[props.data].position}</span>
          
            <span className="date">{workplace[props.data].date}</span></div>
          
          <span className="job-desc">
            {workplace[props.data].desc.map(item => 
                <div className="bull" key={i++}>
                <ArrowForwardSharpIcon/><p key={i++}>{item}</p>
                </div>
            )}

          </span>
      </div>
    </div>
  );
}

export default JobListing;

