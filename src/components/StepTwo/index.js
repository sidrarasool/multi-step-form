import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import InputField from "../InputField";
import "./StepTwo.css";

const StepTwo = ({ formik }) => {
  const [value, setValue] = useState();
  return (
    <Grid
      item
      xs={12}
      container
      alignContent="center"
      justifyContent="flex-start"
    >
      <Typography className="FormHeading">
        Your ears will love you. Complete your details below:
      </Typography>
      <InputField
        name="nickname"
        placeholder="Tim Tim"
        value={formik.values.nickname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.nickname && formik.errors.nickname}
        label="nickname"
        errorMessage="Avast ye!, Nickname is missing, or too short"
      />
      <InputField
        name="username"
        placeholder="@handle"
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.username && formik.errors.username}
        label="username"
        errorMessage="Sink me!"
      />
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
