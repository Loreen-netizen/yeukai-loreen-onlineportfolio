import React, { useState } from "react";
import { Grid, Typography, Tabs, Tab } from "@material-ui/core";
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
                  tabValue === { tag }
                    ? "customTabs_item active"
                    : "customTabs_item"
                }
              ></Tab>
            );
          })}
        </Tabs>
      </Grid>
   
   Projects
    </Grid>
  );
};

export default Portfolio;
