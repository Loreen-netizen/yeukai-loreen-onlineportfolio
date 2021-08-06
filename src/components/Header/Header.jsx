import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
// import {BrowserRouter as Router} from "react-router-dom";
import { HomeRounded } from "@material-ui/icons";

export const Header = (props) => {
  const pathName = props?.location?.pathname;
  return (
    <Navbar expand="lg" sticky="top">
      {/* Home link */}
      <Nav.Link to="/">
        <Navbar.Brand>
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          {/* Resume link */}
          <Nav.Link to="/" active={pathName === "/" ? true : false}>
           Resume
          </Nav.Link>
          {/* Porfolio link */}
          <Nav.Link to="/portfolio" active={pathName === "/" ? true : false}>
          Portfolio
          </Nav.Link>
          {/* Skills */}
          <Nav.Link to="/skills" active={pathName === "/" ? true : false}>
            Skills
          </Nav.Link>

          {/* Experience */}
          <Nav.Link to="/Experience" active={pathName === "/" ? true : false}>
            Experience
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      {/* </Navbar.Toggle> */}
    </Navbar>
  );
};

export default Header;
