import React from "react";
import JobListing from "./JobListing";
import data from "./content";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import { Box, Grid, makeStyles, Tab, Tabs, Item } from "@mui/material";
import "./Work.css";

function Work() {
  const [value, setValue] = React.useState(0);
  const workplace = data.work;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  var i = 0;

  return (
    <div style={{ background: "#fff" }} className="work">
      <div className="order-rows">
        <h1 className="title">
          <WorkHistoryIcon sx={{ fontSize: 45 }} /> Work Experience
        </h1>

        <Grid className="grid"
          container
          direction="row"
          spacing={{ xs: 1 }}
          columns={{ xs: 3, sm: 5, md: 12 }}
        >
          <Grid item xs={3} sm={4} md={2}>
            <div className="menu">
              <Tabs
                className="labels"
                indicatorColor="primary"
                textColor="primary"
                value={value}
                onChange={handleChange}
                orientation="vertical"
                variant="fullWidth"
                sx={{
                  fontSize: 40,
                  borderRight: 1,
                  borderColor: "divider",
                }}
              >
                {workplace.map((x, i) => (
                  <Tab 
                    key={i++}
                    label={<div className="labels">{x.workplace}</div>}
                    sx={{
                      fontFamily: "Roboto",
                      fontSize: "20px",
                      fontWeight: 600,
                    }}
                  ></Tab>
                ))}
              </Tabs>
            </div>
          </Grid>
            <Grid item xs={3} sm={5} md={9.5}>
              <div className="listing">{<JobListing data={value} />}</div>
            </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Work;
