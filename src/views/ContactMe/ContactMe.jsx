import React from "react";
import styled from "styled-components";
import { RESUME_DATA } from "../../utils/resumeData";
import { Grid, Typography, TextField } from "@material-ui/core";
import CustomButton from "../../components/CustomButton";



const StyledTypographyContact = styled(Typography)`
  && {
    color: #787878;
    font-size: 14px;
  }
`;

const StyledSocialsGrid = styled(Grid)`
  && {

    margin-top: 25px;
  }
`;

const StyledContainer = styled(Grid)`
  && {
    padding-top: 50px;
    padding-right: 10px;
    padding-left: 10px;
  }
`;


const StyledSpan = styled.span`
 color:black;
 font-weight: 500;
`;
const StyledLink = styled.a`
  font-size: 10px;
  margin-right: 10px;
  color: #fa75b1;
  &: hover {
    color: #ec096f;
  }
`;
const StyledEmailLink = styled.a`
  text-decoration: none;
  color: #fa75b1;
  cursor: pointer;
  &: hover {
    color: #ec096f;
  }
`;



export const ContactMe = () => {
  return (
    <StyledContainer container>
      {/* Contact Form */}
      {/* <Grid container xs={12} lg={8}>
        <Grid item xs={12} lg={7} className="pb_45">
          <Grid container>
            <Grid item className="section_title mb_30">
              <span className="title_span"></span>
              <h6 className="title_text">Contact Form</h6>
            </Grid>
            {/* forms */}
      {/* <Grid item xs={12}>
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
                </Grid> */}
      {/* <Grid item xs={12}>
                  <CustomButton text="submit" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid> */}

      {/* Contact information */}
      <Grid container xs={12} className="margin-100">
        <Grid item>
          <Grid container>
            <Grid item className="section_title mb_30">
              <span className="title_span"></span>
              <h6 className="title_text">Contact Information</h6>
            </Grid>

            {/* contact details */}
            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <StyledTypographyContact>
                    <StyledSpan>Address:</StyledSpan>
                    {` ${RESUME_DATA.Address}`}
                  </StyledTypographyContact>
                </Grid>
                <Grid item xs={12}>
                  <StyledTypographyContact>
                    <StyledSpan>Phone:</StyledSpan>
                    {` ${RESUME_DATA.cellphoneNumber}`}
                  </StyledTypographyContact>
                </Grid>
                <Grid item xs={12}>
                  <StyledTypographyContact>
                    <StyledSpan>Email:</StyledSpan>
                    <StyledEmailLink href={`mailto:${RESUME_DATA.emailAdress}`}>
                      {` ${RESUME_DATA.emailAdress}`}
                    </StyledEmailLink>
                  </StyledTypographyContact>
                </Grid>
              </Grid>

              {/* socials */}
              <StyledSocialsGrid item xs={12}>
                <Grid container>
                  {Object.keys(RESUME_DATA.socials).map((social) => {
                    return (
                      <Grid item>
                        <StyledLink
                          href={RESUME_DATA.socials[social].link}
                          target="_blank"
                        >
                          {RESUME_DATA.socials[social].icon}
                        </StyledLink>
                      </Grid>
                    );
                  })}
                </Grid>
              </StyledSocialsGrid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default ContactMe;
