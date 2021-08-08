import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { RESUME_DATA } from "../../utils/resumeData";

export const Resume = () => {
  return (
    <>
      {/* About Me */}
      <Grid container>
        <Grid item xs={12}>
          <span></span>
          <Typography variant="h6">About Me</Typography>
        </Grid>
        <Grid item xs={12}>
          {RESUME_DATA.AboutMe}
        </Grid>
      </Grid>

      {/* Education And Experience */}
      <Grid container></Grid>

      {/* Skills */}
      <Grid container></Grid>

      {/* Contact */}
      <Grid container></Grid>
    </>
  );
};

export default Resume;
