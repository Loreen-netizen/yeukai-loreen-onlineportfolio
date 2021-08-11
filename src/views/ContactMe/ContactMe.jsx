import React from "react";
import styled from "styled-components";
import { RESUME_DATA } from "../../utils/resumeData";
import { Grid, Typography, Icon, Paper, TextField } from "@material-ui/core";
import TimelineDot from "@material-ui/lab/TimelineDot";
import CustomButton from "../../components/CustomButton";

const StyledServiceIcon = styled(Icon)`
  && {
    color: darkslategray;
  }
`;

const StyledTypographyTitle = styled(Typography)`
  && {
    margin-bottom: 2rem;
    font-size: 15px;
    font-weight: 500;
    color: #f83a90;
  }
`;

const StyledTypographyDescription = styled(Typography)`
  && {
    color: gray;
    font-size: small;
    margin-top: 10px;
  }
`;

const StyledTimelineDot = styled(TimelineDot)`
  && {
    border-color: pink;
    padding: 2px;
    margin-right: 5px;
  }
`;

const StyledPaper = styled(Paper)`
&&{

  border-radius: 8px;
padding: 20px;
box-shadow: 0px 0px 48px 0px rgba(4, 6, 4, 0.08)
min-height: 186px;
height: 100%
}`;
const StyledSkillTypography = styled(Typography)`
  && {
    display: flex;
    align-items: center;
    color: #989898;
    font-weight: 400;
    line-height: 18px;
  }
`;

const StyledContainer = styled(Grid)`
  && {
    flex-direction: row;
    padding: 50px;
  }
`;
const StyledLogo = styled.img`
  height: 62px;
  width: auto;
  border-radius: 50%;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  margin-bottom: 2rem;
`;
const StyledLi = styled.li`
  //  flex: 0 1 calc(20% - 8px);
  padding-top: 2rem;
  padding bottom: 1rem;
  margin: 1rem;
 
`;

const StyledIconsGrid = styled(Grid)`
  && {
    @media (max-width: 991px) {
      display: none;
    }
  }
`;

export const ContactMe = () => {
  return (
    <StyledContainer>
      {/* Contact Form */}
      <Grid container>
        <Grid item xs={12} lg={7} className="pb_45">
          <Grid container>
            <Grid item className="section_title mb_30">
              <span className="title_span"></span>
              <h6 className="title_text">Contact Form</h6>
            </Grid>
            {/* forms */}
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name="name" label="Name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name="email" label="E-mail" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="message"
                    label="Message"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomButton text="submit" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Contact information */}
      <Grid container>
        <Grid item xs={12} lg={5}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <span className="title_span"></span>
              <h6 className="title_text">Contact Information</h6>
            </Grid>

            {/* contact details */}
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography>
                    <span>Address:</span>
                    {` ${RESUME_DATA.Address}`}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    <span>Phone:</span>
                    {` ${RESUME_DATA.cellphoneNumber}`}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    <span>Email:</span>
                    {` ${RESUME_DATA.emailAdress}`}
                  </Typography>
                </Grid>
              </Grid>

              {/* socials */}
              <Grid item xs={12}>
<Grid container>
{RESUME_DATA.socials.map((social)=>{
    return <Grid item></Grid>;
})}
</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default ContactMe;
