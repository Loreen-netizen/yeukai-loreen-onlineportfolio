import React from "react";
import { v4 as createID } from "uuid";
import styled from "styled-components";
import { SERVICES_MAP, LANGUAGES_MAP } from "../../utils/skillsAndLanguages";
import tokens from "../../data/tokens";
import { Grid, Typography, Icon } from "@material-ui/core";
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";

const StyledServiceIcon = styled(Icon)`
  && {
    color: darkslategray;
  }
`;

const SeeMoreButton = styled.button`
  background: none;
  color: #fb89bc;
  border: none;
  padding: 0;
  font-size: 12px;
`;
const StyledLink = styled.a`
  text-decoration: none;
  color: #fb89bc;
  font-size: 12px;
  &: hover {
    color: #f61379;
  }
`;

const StyledTypographyAboutMe = styled(Typography)`
  && {
    color: darkslategray;
    font-size: 13px;
    line-height: 32px;
    white-space: pre-line;
  }
`;

const StyledTypographyTitle = styled(Typography)`
  && {
    font-size: 15px;
    font-weight: 500;
    color: #f83a90;
  }
`;

const StyledTypographyDate = styled(Typography)`
  && {
    color: darkslategray;
  }
`;
const StyledTypographyDescription = styled(Typography)`
  && {
    color: gray;
    font-size: small;
    margin-top: 10px;
  }
`;




const StyledLogo = styled.img`
height: ${tokens.images.xxs};
width:auto;
border-radius:${tokens.radius.circle};
`;

const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  
`;
const StyledLi = styled.li`
  flex-basis: 33%;
  padding-top: ${tokens.spacing.xl};
  padding bottom:  ${tokens.spacing.m};
`;

const StyledContainer = styled(Grid)`
&&{
  flex-direction: column;
}
`

export const SkillsAndLanguages = () => {
  return (
    <StyledContainer>
      {/* Skills */}

      <Grid container>
        <Grid item className="section_title mb_30">
          <span className="title_span"></span>
          <h6 className="title_text">Skills And Languages</h6>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item className="mb_60">
          <StyledUl key={createID()}>
            {LANGUAGES_MAP.map((language) => {
              return (
                <StyledLi>
                  <StyledLogo src={language.logo_src} alt="language logo" />
                  {language.name}
                </StyledLi>
              );
            })}
          </StyledUl>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item className="section_title mb_60 top_60">
          <span className="title_span"></span>
          <h6 className="title_text">My Services</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container justifyContent="space-around">{SERVICES_MAP.map((service)=>{
return (
  <Grid item xs={12} sm={6} md={3}>
    <StyledServiceIcon>{service.icon}</StyledServiceIcon>
    <StyledTypographyTitle variant="h6">{service.title}</StyledTypographyTitle>
    <StyledTypographyDescription variant="body2">
      {service.description}
    </StyledTypographyDescription>
  </Grid>
);
          })}</Grid>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default SkillsAndLanguages;
