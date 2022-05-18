import React from "react";
import "./Courses.css";
import SchoolIcon from "@mui/icons-material/School";
import CoursesTable from "./CoursesTable";
import { Grid } from "@mui/material";

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
          <div>
            <span className="info">
              Courses Taken at the University of Maryland - Hover Over Course
              Name for More Info
            </span>
          </div>
        </div>
      </div>
      <div className="tables">
        <Grid
          container
          direction="row"
          spacing={{ xs: 1 }}
          columns={{ xs: 3, sm: 10, md: 12 }}
        >
          <Grid item xs={3} sm={10} md={11.2}>
            <CoursesTable />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Courses;
