import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography } from "@mui/material";
import "./DataField.css";

const DataField = ({ label, data }) => {
  return (
    <Grid
      container
      alignItems="flex-start"
      justifyContent="flex-start"
      className="DateField DataField_container"
    >
      <Grid item xs={12} align="left">
        <Typography className="DataField_label">{label}</Typography>
      </Grid>
      <Grid item xs={12} align="left">
        <Typography className="DataField_data">{data}</Typography>
      </Grid>
    </Grid>
  );
};

DataField.propTypes = {
  /**
   * The label for the data field and it is mandatory
   */
  label: PropTypes.string.isRequired,
  /**
   * The value of the data field and it is mandatory
   */
  data: PropTypes.string.isRequired,
};

export default DataField;
