import React from "react";
import { Grid, Typography } from "@mui/material";
import InputField from "../InputField";
import "./StepOne.css";

const StepOne = ({ formik, setPage }) => {
  return (
    <>
      <Typography variant="h4">An Audio Assistant For Happiness</Typography>
      <Typography variant="body1">
        Audio magic with your best mates. Start and finish each day with good
        vibes.
      </Typography>
      <Grid item xs={12}>
        <InputField
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="your email address"
          error={formik.errors.email && formik.touched.email}
        />
        <br />
        {formik.touched.email && formik.errors.email && (
          <Typography className="StepOne_email_error" variant="caption">
            {formik.errors.email ?? "Email is required"}
          </Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        <button type="submit" className="StepOne_btn">
          Join Now
        </button>
      </Grid>
    </>
  );
};

export default StepOne;
