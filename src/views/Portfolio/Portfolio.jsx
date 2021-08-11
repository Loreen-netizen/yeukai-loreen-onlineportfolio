import React, { useState } from "react";
import {
  Grid,
  Typography,
  Tabs,
  Tab,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grow,
} from "@material-ui/core";
import { Projects } from "../../utils/resumeData";
import "./Portfolio.css";
export const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");

  const tabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <Grid className="section pb_45 pt_45">
      {/* title */}
      <Grid item className="section_title mb_30">
        <span className="title_span"></span>
        <h6 className="title_text">Portfolio</h6>
      </Grid>
      {/* Tabs */}
      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor="pink"
          className="custom_tabs"
          onChange={() => tabChange()}
        >
          <Tab
            label="All"
            value="All"
            className={
              tabValue === "All" ? "customTabs_item active" : "customTabs_item"
            }
          ></Tab>

          {[...new Set(Projects.map((item) => item.tag))].map((tag) => {
            return (
              <Tab
                label={tag}
                value={tag}
                  className={
              tabValue === "All" ? "customTabs_item active" : "customTabs_item"
            
                }
              ></Tab>
            );
          })}
        </Tabs>
      </Grid>

      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {Projects.map((project) => (
            <>
              {tabValue === project.tag || tabValue === "All" ? (  <Grid item>
                  <Grow in timeout={1000}>
                    <Card>
                      <CardActionArea>
                        <CardMedia />
                        <CardContent>
                          <Typography>{project.title}</Typography>
                          <Typography>{project.description}</Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>) : null}
              
            </>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
