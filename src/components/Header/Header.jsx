import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
// import {BrowserRouter as Router} from "react-router-dom";
import { HomeRounded, Telegram } from "@material-ui/icons";
import { RESUME_DATA } from "../../utils/resumeData";
import CustomButton from "../../components/CustomButton";
import { withRouter } from "react-router";
import uuid from "react-uuid";
import tokens from "../../data/tokens"

import styled from "styled-components";

const StyledNavbar = styled(Navbar)`
  && {
    margin-bottom: 30px;
    background-color:white;
    padding:0 22px 0 0;
    border-radius: 6px;
    box-shadow: 0px 2px 92px 0px rgba(0, 0, 0, 0.07)
  }`;

  const StyledNavLink = styled(Nav.Link)`
    && {
      font-weight: 500;
      color: darkslategrey;
      // &:hover {
      //   background: ${tokens.colors.flickrPink};
      // }
      // &:active {
      //   background: ${tokens.colors.flickrPink};
      // }
    }
  `;




export const Header = (props) => {
  const pathName = props?.location?.pathname;
  return (
    <StyledNavbar expand="lg" sticky="top">
      {/* Home link */}
      <StyledNavLink href="/">
        <Navbar.Brand>
          <HomeRounded />
        </Navbar.Brand>
      </StyledNavLink>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          {/* Resume link */}
          <StyledNavLink href="/" active={pathName === "/" ? true : false}>
            Resume
          </StyledNavLink>
          {/* Porfolio link */}
          <StyledNavLink
            href="/portfolio"
            active={pathName === "/portfolio" ? true : false}
          >
            Portfolio
          </StyledNavLink>
          {/* Skills */}
          <StyledNavLink
            href="/skills"
            active={pathName === "/skills" ? true : false}
          >
            Skills
          </StyledNavLink>

          {/* Experience */}
          <StyledNavLink
            href="/experience"
            active={pathName === "/experience" ? true : false}
          >
            Experience
          </StyledNavLink>
        </Nav>
        <div>
          {Object.keys(RESUME_DATA.socials).map((socialMedia) => {
            return (
              <a
                href={RESUME_DATA.socials[socialMedia].link}
                alt={RESUME_DATA.socials[socialMedia].text}
                target="_blank"
                key={uuid()}
              >
                {RESUME_DATA.socials[socialMedia].icon}
              </a>
            );
          })}
          <CustomButton text="Hire Me" icon={<Telegram />} />
        </div>
      </Navbar.Collapse>
      {/* </Navbar.Toggle> */}
    </StyledNavbar>
  );
};

export default withRouter(Header);
