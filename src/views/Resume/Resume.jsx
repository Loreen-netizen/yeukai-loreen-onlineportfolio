import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { RESUME_DATA } from "../../utils/resumeData";
import {
  EDUCATION_MAP,
  WORK_EXPERIENCE_MAP,
} from "../../utils/skillsAndLanguages";
import { CustomTimeline, TimeLine } from "../../components/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import "./Resume.css";
import { CustomTimeLineSeperator } from "../../components/Timeline/TimeLine";
import TimelineContent from "@material-ui/lab/TimelineContent";
import styled from "styled-components";


const StyledWorkOutlineOutlinedIcon = styled(WorkOutlineOutlinedIcon)`
&&{
    color:white;
}`;
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
      <Grid item className="section_title mb_30">
        <span className="title_span"></span>
        <h6 className="title_text">Resume</h6>
      </Grid>

      <Grid item xs={12}>
        <Grid container>
          {/* experience */}
          <Grid item sm={12} md={6}>
            <TimeLine
              title="Work Experience"
              icon={<StyledWorkOutlineOutlinedIcon />}
            >
              {WORK_EXPERIENCE_MAP.map((workExperience) => {
                return (
                  <TimelineItem>
                    <CustomTimeLineSeperator />
                    <TimelineContent>
                      <Typography>{workExperience.title}</Typography>
                      <Typography variant="caption">
                        {workExperience.date}
                      </Typography>
                      <Typography variant="body2">
                        {workExperience.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                );
              })}
            </TimeLine>
          </Grid>

          {/* Education */}
          <Grid item sm={12} md={6}>
            <TimeLine
              title="Work Experience"
              icon={<StyledWorkOutlineOutlinedIcon />}
            >
              {EDUCATION_MAP.map((education) => {
                return (
                  <TimelineItem>
                    <CustomTimeLineSeperator />
                    <TimelineContent>
                      <Typography>{education.name}</Typography>
                      <Typography variant="body2">
                        {education.location}
                      </Typography>
                      <Typography variant="caption">
                        {education.year}
                      </Typography>
                      <Typography variant="body2">
                        {education.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                );
              })}
            </TimeLine>
          </Grid>
        </Grid>
      </Grid>

      {/* Skills */}
      <Grid container className="section"></Grid>

      {/* Contact */}
      <Grid container className="section"></Grid>
    </>
  );
};

export default Resume;
