import React from "react";
import { Typography } from "@mui/material";
import "./FormHeading.css";

const FormHeading = ({ text }) => {
  return (
    <Typography variant="h4" align="left" className="FormHeading_heading">
      {text}
    </Typography>
  );
};

export default FormHeading;
