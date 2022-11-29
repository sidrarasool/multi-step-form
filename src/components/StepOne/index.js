import React from "react";
import { Grid, Typography } from "@mui/material";
import "./StepOne.css";

const StepOne = ({ formik }) => {
  return (
    <Grid item container xs={12} justifyContent="center">
      <Grid item container justifyContent="center" alignItems="center" sm={6}>
        <Typography variant="h4" className="StepOne_Heading" align="left">
          An Audio Assistant For Happiness
        </Typography>
        <Typography variant="body1" className="StepOne_SubHeading" align="left">
          Audio magic with your best mates. Start and finish each day with good
          vibes.
        </Typography>
        <Grid
          item
          xs={12}
          direction="column"
          container
          justifyContent="center"
          alignItems="flex-start"
        >
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
          {formik.touched.email && formik.errors.email && (
            <Typography
              className="StepOne_email_error"
              variant="caption"
              align="left"
            >
              {formik.errors.email}
            </Typography>
          )}
          <button type="submit" className="StepOne_btn">
            Join Now
          </button>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Grid>
  );
};

export default StepOne;
