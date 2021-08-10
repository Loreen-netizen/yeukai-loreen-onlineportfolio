import React from "react";
import { v4 as createID } from "uuid";
import styled from "styled-components";
import { SERVICES_MAP, TECH_STACK_MAP } from "../../utils/skillsAndLanguages";
import tokens from "../../data/tokens";
import { Grid, Typography, Icon, Paper } from "@material-ui/core";
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
  width: auto;
  border-radius: ${tokens.radius.circle};
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
  && {
    flex-direction: column;
  }
`;

export const SkillsAndLanguages = () => {
  return (
    <StyledContainer>
      {/* Skills */}
 <Grid container>
        <Grid item className="section_title mb_30">
          <span className="title_span"></span>
          <h6 className="title_text">Skills And Languages</h6>
        </Grid>
        <Grid
          container
          spacing={3}
          justifyContent="space-between"
          className="pb_45"
        >
          {TECH_STACK_MAP.map((skill) => {
            return (
              <Grid item xs={12} s={6} md={3}>
                <Paper elevation={0}>
                  <StyledTypographyTitle variant="h6">
                    {skill.title}
                  </StyledTypographyTitle>
                   <div>
                     {skill.description.map((language) => {
                      return(
                        <Grid
                          item
                          className="mb_60"
                          justifyContent="space-between"
                        >
                          <ul>
                            <li>
                      
                              {language.name}
                              <img
                                src={language.logo_src}
                                alt="language logo"
                                height="50px"
                                width="auto"
                              />
                            </li>
                          </ul>
                          </Grid>
                      )
                         })}
                   </div>
                </Paper>
        </Grid>)})}
        </Grid>
      

      {/* <Grid container xs={12}>
        <Grid item className="section_title mb_60 top_60">
          <span className="title_span"></span>
          <h6 className="title_text">Tech Stack</h6>
        </Grid>
        {TECH_STACK_MAP.map((object) => {
         return Object.values(object.description).map((language) => {
           {console.log(language)}
           return (
             <Grid item className="mb_60" justifyContent="space-between">
               <img
                 src={language.logo_src}
                 alt="language logo"
                 height="50px"
                 width="auto"
               />
               <ul>
                 <li> {language.name}</li>
               </ul>
             </Grid>
           );
         });
        })}
      </Grid> */}

      {/* {TECH_STACK_MAP.map((object)=>{(object.description).map((skill)=>{ */}

      <Grid container>
        <Grid item className="section_title mb_60 top_60">
          <span className="title_span"></span>
          <h6 className="title_text">My Services</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container justifyContent="space-between">
            {SERVICES_MAP.map((service) => {
              return (
                <Grid item xs={12} sm={6} md={3}>
                  <StyledServiceIcon>{service.icon}</StyledServiceIcon>
                  <StyledTypographyTitle variant="h6">
                    {service.title}
                  </StyledTypographyTitle>
                  <StyledTypographyDescription variant="body2">
                    {service.description}
                  </StyledTypographyDescription>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        </Grid>
     </Grid>
    </StyledContainer>
  );
};

export default SkillsAndLanguages;
