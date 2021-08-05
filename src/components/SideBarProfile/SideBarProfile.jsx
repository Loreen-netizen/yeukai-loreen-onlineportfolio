import React from 'react';
import { Typography } from "@material-ui/core";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

import tokens from "../../data/tokens";
import styled from "styled-components";
import ProfileCss from "./Profile.css";


import CustomTimeLine, { CustomTimeLineSeperator } from "../Timeline/TimeLine";
import { RESUME_DATA } from "../../utils/resumeData"
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from "@material-ui/lab/TimelineItem";


const ProfileDiv = styled.div`
display: inline-block;
background-color: ${tokens.colors.white};
border-radius:${tokens.radius.subtle};
width: 100%;
`
const ProfileName = styled.div`
  line-height: ${tokens.spacing.m};
  padding: ${tokens.spacing.l};
`;

const StyledTypography = styled(Typography)`
  font-size: ${tokens.text.m.size};
  font-weight: ${tokens.text.m.weight};
  font-spacing: ${tokens.text.m.spacing};
  line-height: ${tokens.text.m.height};
  color: ${tokens.colors.black} ${tokens.opacity.medium};
`;

const CustomTimeLineItem = ({title, text, link}) =>{
  return(
        <TimelineItem>
      <CustomTimeLineSeperator />
      <TimelineContent>
        {link ? (
          <Typography>
            <span>{title}:</span>
            <a href={link} target="_blank">
              {text}
            </a>
          </Typography>
        ) : (
          <Typography>
            <span>{title}:</span>
            {text}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  )
   
}

export const SideBarProfile = () => {
    return (
      <ProfileDiv>
        <ProfileName>
          <Typography className="name">{RESUME_DATA.name}</Typography>
          <Typography className="title">{RESUME_DATA.title}</Typography>
        </ProfileName>

        <figure className="profile_image">
          <img
            src={`${process.env.PUBLIC_URL}/images/Yeukai.LoreenProfesionalPhoto.jpg`}
            alt="YeukaiLoreenProfesionalPhoto"
          ></img>
        </figure>

        <div className="profile_information">
          <CustomTimeLine icon={<PersonOutlineIcon />}>
          <CustomTimeLineItem title="Name" text={RESUME_DATA.name} />
          <CustomTimeLineItem title="Title" text={RESUME_DATA.title} />
          <CustomTimeLineItem title="Email" text={RESUME_DATA.emailAdress} />
          </CustomTimeLine>
          <br />
          <button>click me!</button>
        </div>
      </ProfileDiv>
    );
}

export default SideBarProfile
