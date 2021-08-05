import React from "react";
import { v4 as createID } from "uuid";
import styled from "styled-components";
import {LANGUAGES_MAP} from "../../utils/skillsAndLanguages"
import tokens from "../../data/tokens";

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

export const SkillsAndLanguages = () => {
  return (
    <div>
      <h1>Skills </h1>
      <h4>And Languages</h4>
     
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
      
    </div>
  );
};

export default SkillsAndLanguages;
