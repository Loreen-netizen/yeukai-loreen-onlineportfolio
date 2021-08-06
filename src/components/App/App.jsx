import { StylesProvider } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";

import SideBarProfile from "../SideBarProfile";
import Header from "../Header";
import Portfolio from "../../views/Portfolio";
import Resume from "../../views/Resume";
import SkillsAndLanguages from "../../views/SkillsAndLanguages";
import Experience from "../../views/Experience";
import Footer from "../Footer";
import "./App.css"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const App = () => {
  return (
    <StylesProvider injectFirst>
      <Container className="top_60">
        <Grid container>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <SideBarProfile />
          </Grid>
          <Grid item xs>
            <Router>
              <Header />
              <Switch>
                <Route path="/resume">
                  <Resume />
                </Route>
                <Route path="/skills">
                  <SkillsAndLanguages />
                </Route>
                <Route path="/experience">
                  <Experience />
                </Route>
                <Route path="/">
                  <Portfolio />
                </Route>
              </Switch>
            </Router>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </StylesProvider>
  );
};

export default App;
