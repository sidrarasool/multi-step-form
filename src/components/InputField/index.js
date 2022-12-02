import React from "react";
import PropTypes from "prop-types";
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
      className="InputField"
    >
      {label !== "" && (
        <Typography variant="body1" align="left" className="InputField_label">
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
        <Typography className="InputField_ErrorMessage" variant="caption">
          {errorMessage}
        </Typography>
      )}
    </Grid>
  );
};

InputField.propTypes = {
  /**
   *  A name for text field
   */
  name: PropTypes.string.isRequired,
  /**
   * A function that will trigger on value change
   */
  onChange: PropTypes.func.isRequired,
  /**
   * A function that will trigger when the text field is blurred
   */
  onBlur: PropTypes.func.isRequired,
  /**
   * A placeholder value in the textfield
   */
  placeholder: PropTypes.string.isRequired,
  /**
   * The value of the textfield
   */
  value: PropTypes.string.isRequired,
  /**
   * The boolean value of the textfield that prompts if the value is invalid or not
   */
  error: PropTypes.bool.isRequired,
  /**
   * The error message when the value of textfield is invalid
   */
  errorMessage: PropTypes.string,
  /**
   * The label for the textfield
   */
  label: PropTypes.string,
};

export default InputField;
