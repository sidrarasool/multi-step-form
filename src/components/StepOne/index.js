import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import InputField from "../inputField";
import "./StepOne.css";

const StepOne = ({ formik, setPage }) => {
  const [emailError, setEmailError] = useState(false);
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
        />
        <br />
        {formik.touched.email && formik.errors.email && (
          <Typography className="StepOne_email_error" variant="caption">
            {formik.errors.email}
          </Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        <button
          className="StepOne_btn"
          onClick={() => {
            setPage(1);
          }}
        >
          {" "}
          Join Now{" "}
        </button>
      </Grid>
    </>
  );
};

export default StepOne;
