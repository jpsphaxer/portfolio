import React from "react";
import "./Courses.css";
import SchoolIcon from "@mui/icons-material/School";
import CoursesTable from "./CoursesTable";

function Courses() {
  var i = 0;
  return (
    <div style={{ background: "#fff" }} className="courses">
      <div className="partition">
        <div className="title-container">
          <h1 className="courses-title">
            <SchoolIcon sx={{ fontSize: 45 }} />
            Relevant Courses
          </h1>
          <div >
            <span className="info">Courses Taken at the University of Maryland - Hover Over Course Name for More Info</span>
          </div>
        </div>
      </div>
        <div className="tables">
          <CoursesTable/>
        </div>
    </div>
  );
}

export default Courses;
