import { Typography } from '@material-ui/core'
import React from 'react';

import tokens from "../../data/tokens";
import styled from "styled-components";
import ProfileCss from "./Profile.css";
import CustomTimeLine from "../Timeline/TimeLine"


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

export const SideBarProfile = () => {
    return (
      <ProfileDiv>
        <ProfileName>
          <Typography className="name">YEU</Typography>
          <Typography className="title">title</Typography>
        </ProfileName>

        <figure className="profile_image">
          <img
            src={`${process.env.PUBLIC_URL}/images/Yeukai.LoreenProfesionalPhoto.jpg`}
            alt="YeukaiLoreenProfesionalPhoto"
          ></img>
        </figure>

        <div className="profile_information">
          <CustomTimeLine/>
          <br />
          <button>click me!</button>
        </div>
      </ProfileDiv>
    );
}

export default SideBarProfile
