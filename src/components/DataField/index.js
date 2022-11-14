import React from "react";
import { Grid, Typography } from "@mui/material";
import "./DataField.css";

const DataField = ({ label, data }) => {
  return (
    <Grid
      container
      alignItems="flex-start"
      justifyContent="flex-start"
      className="DataField_container"
    >
      <Grid xs={12}>
        <Typography className="DataField_label">{label}</Typography>
      </Grid>
      <Grid xs={12}>
        <Typography className="DataField_data">{data}</Typography>
      </Grid>
    </Grid>
  );
};

export default DataField;
