import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import InputField from "../inputField";
import RadioItem from "../radioItems";
import "./StepFour.css";

const StepFour = ({ formik }) => {
  useEffect(() => {
    console.log("values", formik.values);
  }, [formik]);
  return (
    <Grid item xs={12} container justifyContent="center" alignContent="center">
      <Typography variant="h4">
        Homestretch. Just a few more questions
      </Typography>
      <Grid
        item
        xs={12}
        direction="column"
        container
        justifyContent="center"
        alignItems="flex-start"
      >
        <Typography variant="body">
          How Long does it take for you to get ready for work?
        </Typography>
        <InputField
          name="readyTime"
          placeholder="*Yawn* I usually.."
          value={formik.values.readyTime}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.readyTime && formik.errors.readyTime && (
          <Typography className="StepTwo_error" variant="caption">
            Required
          </Typography>
        )}
      </Grid>
      <Grid
        item
        xs={12}
        direction="column"
        container
        justifyContent="center"
        alignItems="flex-start"
      >
        <Typography variant="body">
          What is your go to song that makes you feel happy?
        </Typography>
        <InputField
          name="happySong"
          placeholder="Your favourite song"
          value={formik.values.happySong}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.happySong && formik.errors.happySong && (
          <Typography className="StepTwo_error" variant="caption">
            Required
          </Typography>
        )}
      </Grid>
      <Grid
        item
        xs={12}
        direction="column"
        container
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid>
          <Typography variant="body">
            Are you available for survey + early product releases?
          </Typography>
        </Grid>
        <Grid role="group" direction="row" container>
          <RadioItem
            value="Yes"
            id="survey_yes"
            name="survey"
            onChange={formik.handleChange}
            defaultChecked={formik.values.survey === "Yes"}
          />
          <RadioItem
            value="Maybe"
            id="survey_maybe"
            name="survey"
            onChange={formik.handleChange}
            defaultChecked={formik.values.survey === "Maybe"}
          />
          <RadioItem
            value="No"
            id="survey_no"
            name="survey"
            onChange={formik.handleChange}
            defaultChecked={formik.values.survey === "No"}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StepFour;
