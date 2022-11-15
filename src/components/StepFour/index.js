import React from "react";
import { Grid, Typography } from "@mui/material";
import InputField from "../InputField";
import FormHeading from "../FormHeading";
import RadioItem from "../RadioItems";
import "./StepFour.css";

const StepFour = ({ formik }) => {
  return (
    <Grid item xs={12} container justifyContent="center" alignContent="center">
      <FormHeading text=" How Long does it take for you to get ready for work?" />
      <InputField
        name="readyTime"
        placeholder="*Yawn* I usually.."
        value={formik.values.readyTime}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.readyTime && formik.errors.readyTime}
        label="How Long does it take for you to get ready for work?"
        errorMessage=" Required"
      />
      <InputField
        name="happySong"
        placeholder="Your favourite song"
        value={formik.values.happySong}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.happySong && formik.errors.happySong}
        label="What is your go to song that makes you feel happy?"
        errorMessage=" Required"
      />
      <Grid
        item
        xs={12}
        direction="column"
        container
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid>
          <Typography variant="body" className="StepFour_label">
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
        {formik.touched.survey && formik.errors.survey && (
          <Typography className="StepFour_error" variant="caption">
            Required
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default StepFour;
