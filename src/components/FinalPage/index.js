import React from "react";
import { Grid, Typography, IconButton } from "@mui/material";
import DataField from "../DataField";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "./FinalPage.css";

const FinalPage = ({ values, setPage, setFinalShowPage, formik }) => {
  return (
    <Grid
      className="FinalPage_container"
      container
      alignItems="center"
      justifyContent="space-between"
      direction="column"
    >
      <Grid container justifyContent="flex-end">
        <IconButton
          onClick={() => {
            formik.setValues({});
            setFinalShowPage(false);
            setPage(0);
          }}
        >
          <CloseRoundedIcon />
        </IconButton>
      </Grid>
      <Typography variant="h3" className="FinalPage_title">
        Kowabunga
      </Typography>
      <Typography variant="h6" className="FinalPage_title">
        Congrats, you joined the audio fold. Added to Felix.fm waitlist
      </Typography>
      <Grid className="FinalPage_summary_container">
        <Typography className="FinalPage_heading" variant="h4">
          Summary
        </Typography>
        <DataField label="Your email" data={values.email} />
        <DataField label="Reserved username" data={values.username} />
        <DataField label="Your fav song" data={values.happySong} />
      </Grid>
      <Typography variant="h6" className="FinalPage_title">
        Skip the line by inviting your bestie and a few close buds.
      </Typography>
      <Grid
        container
        justifyContent="space-between"
        className="FinalPage_footer_container"
      >
        <Grid item>
          <Typography color="white" align="left">
            Your Invite Link:
          </Typography>
          <Typography color="white">felix.fm/rockpower</Typography>
        </Grid>
        <button className="FinalPage_Sharebtn">Share with your besties</button>
      </Grid>
    </Grid>
  );
};

export default FinalPage;
