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
  DialogTitle,
  DialogContent,
  Dialog,
  DialogActions
} from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import { Projects } from "../../utils/resumeData";
import "./Portfolio.css";


export const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");
 const [projectDialog, setprojectDialog] = useState(false);


 
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
          indicatorColor="white"
          className="custom_tabs"
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label="All"
            value="All"
            className={
              tabValue === "All" ? "customtabs_item_active" : "customtabs_item"
            }
          />

          {[...new Set(Projects.map((item) => item.tag))].map((tag) => {
            return (
              <Tab
                label={tag}
                value={tag}
                className={
                  tabValue === tag
                    ? "customtabs_item_active"
                    : "customtabs_item"
                }
              />
            );
          })}
        </Tabs>
      </Grid>

      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {Projects.map((project) => (
            <>
              {tabValue === project.tag || tabValue === "All" ? (
                <Grid item>
                  <Grow in timeout={1000}>
                    <Card
                      className="custom_card"
                      onClick={() => setprojectDialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className="custom_card_image"
                          image={project.logo_src}
                          title={project.title}
                        />
                        <CardContent>
                          <Typography className="custorm_card_title">
                            {project.title}
                          </Typography>
                          <Typography
                            variant="caption"
                            className="custorm_card_caption"
                          >
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>

      <Dialog open={projectDialog} onClose={() => setprojectDialog(false)}>
        <DialogTitle onClose={() => setprojectDialog(false)}>
          {projectDialog.title}
        </DialogTitle>
        <img src="" alt="" className="projectDialog_image"></img>
        <DialogContent>
          <Typography className="projectDialog_description">
            {projectDialog.description}
          </Typography>
        </DialogContent>
        <DialogActions className="projectDialog_actions">
          {projectDialog?.links?.map((link) => (
            <a
              href={link.link}
              target="_blank"
              className="projectDialog_icon"
            >
              {link.icon}
            </a>
          ))}
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Portfolio;
