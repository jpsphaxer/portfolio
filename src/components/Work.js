import React from "react";
import JobListing from "./JobListing";
import data from "./content";
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { Box, makeStyles, Tab, Tabs } from "@mui/material";
import './Work.css'

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
      <h1 className="title"><WorkHistoryIcon sx={{fontSize:45}}/> Work Experience</h1>
        <div className="top-row">
          <div className="menu">
            <Box
              sx={{
                flexGrow: 1,
                bgcolor: "primary",
                display: "inline-block",
                width: 300,
                height: 224,
              }}
            >
              <Tabs
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
                    className="hello"
                    key={i++}
                    label={x.workplace}
                    sx={{
                      fontFamily: "Roboto",
                      fontSize: "20px",
                      fontWeight: 600,
                    }}
                  ></Tab>
                ))}
              </Tabs>
            </Box>
          </div>
          <div className="listing">{<JobListing data={value} />}</div>
        </div>
      </div>
    </div>
  );
}

export default Work;
