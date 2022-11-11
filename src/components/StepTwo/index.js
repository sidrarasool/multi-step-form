import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import InputField from "../inputField";
import "./StepTwo.css";

const StepTwo = ({ formik }) => {
  const [value, setValue] = useState();
  useEffect(() => {
    console.log("values", formik.values);
  }, [formik]);
  return (
    <Grid item xs={12} container justifyContent="center" alignContent="center">
      <Typography variant="h4">
        Your ears will love you. Complete your details below:
      </Typography>
      <Grid
        item
        xs={12}
        direction="column"
        container
        justifyContent="center"
        alignItems="flex-start"
      >
        <Typography variant="body">nickname</Typography>
        <InputField
          name="nickname"
          placeholder="Tim Tim"
          value={formik.values.nickname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.nickname && formik.errors.nickname && (
          <Typography className="StepTwo_error" variant="caption">
            Avast ye!, Nickname is missing, or too short
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
        <Typography variant="body">username</Typography>
        <InputField
          name="username"
          placeholder="@handle"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username && (
          <Typography className="StepTwo_error" variant="caption">
            Sink me!
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
        <Typography variant="body">Phone Number</Typography>
        <PhoneInput
          className="StepTwo_InputlField"
          placeholder="Enter phone number"
          name="phoneNumber"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Grid>
    </Grid>
  );
};

export default StepTwo;
