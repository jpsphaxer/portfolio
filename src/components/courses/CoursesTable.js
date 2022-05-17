import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from '@mui/material/Typography';


import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import courseData from "./CourseData";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

function CoursesTable() {
  const data = courseData.courses;
  var i = 0 
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="table-heading"><div className="head">Course Name</div></TableCell>
            <TableCell className="table-heading"><div className="head">Course Code</div></TableCell>
            <TableCell className="table-heading"><div className="head">Programming Languages</div></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row) => (
            <TableRow key={row.code}>
              <HtmlTooltip
                key={row.code}
                title={<React.Fragment>
                  <Typography color='inherit' fontWeight={600}>{row.name}</Typography>
                  {row.desc}
                </React.Fragment>}
                placement="right"
                arrow
              >
                <TableCell component="th" scope="row" width={300}>
                  <div className="class-name">{row.name}</div>
                </TableCell>
              </HtmlTooltip>
              <TableCell component="th" scope="row">
                {row.code}
              </TableCell>
              <TableCell component="th" scope="row">
                <Stack direction="row" key={row.name+row.code} spacing={1}>
                  {row.languages.map((lang) => (
                    <Chip key={i++} size="large" color="primary" label={<div className="lang" >{lang}</div>}/>
                  ))}
                  
                </Stack>
                
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CoursesTable;
