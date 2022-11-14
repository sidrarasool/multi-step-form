import React from "react";
import { Grid, Typography } from "@mui/material";
import "./StepOne.css";

const StepOne = ({ formik }) => {
  return (
    <Grid item container justifyContent="center" alignItems="center">
      <Typography variant="h4" className="StepOne_Heading">
        An Audio Assistant For Happiness
      </Typography>
      <Typography variant="body1" className="StepOne_SubHeading ">
        Audio magic with your best mates. Start and finish each day with good
        vibes.
      </Typography>
      <Grid item xs={12}>
        <input
          className={
            formik.touched.email && formik.errors.email
              ? "StepOne_Error"
              : "StepOne_TextField"
          }
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="your email address"
        />
        <br />
        {formik.touched.email && formik.errors.email && (
          <Typography className="StepOne_email_error" variant="caption">
            {formik.errors.email}
          </Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        <button type="submit" className="StepOne_btn">
          Join Now
        </button>
      </Grid>
    </Grid>
  );
};

export default StepOne;
