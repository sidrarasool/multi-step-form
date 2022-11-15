import React from "react";
import { Grid, Typography } from "@mui/material";
import "./InputField.css";

const InputField = ({
  name,
  onChange,
  onBlur,
  placeholder,
  value = "",
  error,
  label = "",
  errorMessage = "",
}) => {
  return (
    <Grid
      item
      xs={12}
      direction="column"
      container
      justifyContent="center"
      alignItems="flex-start"
    >
      {label !== "" && (
        <Typography variant="body" className="InputField_label">
          {label}
        </Typography>
      )}
      <input
        className={error ? "InputField_Error" : "InputField_TextField"}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {error && (
        <Typography className="StepTwo_error" variant="caption">
          {errorMessage}
        </Typography>
      )}
    </Grid>
  );
};

export default InputField;
