import React from "react";
import { Typography } from "@mui/material";
import "./FormHeading.css";

const FormHeading = ({ text }) => {
  return (
    <>
      <Typography
        variant="h4"
        align="left"
        className="FormHeading_heading FormHeading_BigScreen"
      >
        {text}
      </Typography>
      <Typography
        variant="body2"
        className="FormHeading_heading FormHeading_PhoneScreen"
      >
        {text}
      </Typography>
    </>
  );
};

export default FormHeading;
