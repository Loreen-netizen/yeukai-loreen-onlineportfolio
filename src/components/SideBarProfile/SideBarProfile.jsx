import { Typography } from '@material-ui/core'
import React from 'react';

import tokens from "../../data/tokens"
import styled from "styled-components"

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
  && {
    font-size: ${tokens.text.m.size};
    font-weight: ${tokens.text.m.weight};
    font-spacing: ${tokens.text.m.spacing};
    font-height: ${tokens.text.m.height};
    color: ${tokens.colors.vividSkyBlue} ${tokens.opacity.medium};
  }
`;

export const SideBarProfile = () => {
    return (
      <ProfileDiv>
        <ProfileName>
          <StyledTypography>YEU</StyledTypography>
          <StyledTypography>title</StyledTypography>
        </ProfileName>

        <figure className="profile_image">
          <img src="" alt=""></img>
        </figure>

        <div className="profile_information">
          TIMELINE
          <br />
          <button>click me!</button>
        </div>
      </ProfileDiv>
    );
}

export default SideBarProfile
