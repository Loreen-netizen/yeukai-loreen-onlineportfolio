import React from 'react';
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import "./Timeline.css"
import { Typography } from '@material-ui/core';

export const TimeLine = ({title,children, icon}) => {
    return (
      <Timeline className={"timeline"}>
        {/* {item header} */}
        <TimelineItem className={"firstItem"}>
          <TimelineSeparator>
            <TimelineDot className={"headerDot"} />
            {icon}
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" className={"timelineHeader"}>
              {title}
            </Typography>
          </TimelineContent>
        </TimelineItem>
        {children}
        <CustomTimeLineSeperator/>
      </Timeline>
    );
}

export const CustomTimeLineSeperator = () =>{
  return (
   
      <TimelineSeparator className={"seperatorStyling"}>
        <TimelineDot variant="outlined" className={"timelineDot"}/>
        <TimelineConnector />
      </TimelineSeparator>
     
  
  );
}

export default TimeLine
