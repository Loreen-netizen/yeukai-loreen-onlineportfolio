import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { RESUME_DATA } from "../../utils/resumeData";
import "./Resume.css"

export const Resume = () => {
  return (
    <>
      {/* About Me */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span className="title_span"></span>
          <h6 className="title_text">About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="aboutme_text">
            {RESUME_DATA.AboutMe1}
            <br />
            {RESUME_DATA.AboutMe2}
          </Typography>
        </Grid>
      </Grid>

      {/* Education And Experience */}
      <Grid container className="section"></Grid>

      {/* Skills */}
      <Grid container className="section"></Grid>

      {/* Contact */}
      <Grid container className="section"></Grid>
    </>
  );
};

export default Resume;
