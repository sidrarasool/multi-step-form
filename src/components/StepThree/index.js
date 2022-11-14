import React from "react";
import { Grid, Typography } from "@mui/material";
import RadioItem from "../RadioItems";
import "react-phone-number-input/style.css";
import "./StepThree.css";

const StepThree = ({ formik }) => {
  return (
    <Grid
      item
      xs={12}
      container
      justifyContent="center"
      alignContent="center"
      className="stepThree_container"
    >
      <Typography variant="h4">Building your audio preferences</Typography>
      <Grid
        item
        xs={12}
        direction="column"
        container
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid>
          <Typography variant="body">
            What kind of mobile device do you have?
          </Typography>
        </Grid>
        <Grid role="group" direction="row" container>
          <RadioItem
            value="iPhone"
            id="device_iphone"
            name="device"
            onChange={formik.handleChange}
            defaultChecked={formik.values.device === "iPhone"}
          />
          <RadioItem
            value="Android"
            id="device_android"
            name="device"
            onChange={formik.handleChange}
            defaultChecked={formik.values.device === "Android"}
          />
        </Grid>
        {formik.touched.device && formik.errors.device && (
          <Typography className="StepThree_error" variant="caption">
            Required Field
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
        <Grid>
          <Typography variant="body">Do you own AirPods?</Typography>
        </Grid>
        <Grid role="group" direction="row" container>
          <RadioItem
            value="Nope"
            id="airpods_nope"
            name="airpods"
            onChange={formik.handleChange}
            defaultChecked={formik.values.airpods === "Nope"}
          />
          <RadioItem
            value="AirPods 1"
            id="airpods_1"
            name="airpods"
            onChange={formik.handleChange}
            defaultChecked={formik.values.airpods === "AirPods 1"}
          />
          <RadioItem
            value="AirPods 2"
            id="airpods_2"
            name="airpods"
            onChange={formik.handleChange}
            defaultChecked={formik.values.airpods === "AirPods 2"}
          />
          <RadioItem
            value="AirPods Pro"
            id="airpods_pro"
            name="airpods"
            onChange={formik.handleChange}
            defaultChecked={formik.values.airpods === "AirPods Pro"}
          />
        </Grid>
        {formik.touched.airpods && formik.errors.airpods && (
          <Typography className="StepThree_error" variant="caption">
            Also required..
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
        <Grid>
          <Typography variant="body">Do you use Spotify?</Typography>
        </Grid>
        <Grid role="group" direction="row" container>
          <RadioItem
            value="Nope"
            id="spotify_nope"
            name="spotify"
            onChange={formik.handleChange}
            defaultChecked={formik.values.spotify === "Nope"}
          />
          <RadioItem
            value="Sometimes"
            id="spotify_sometimes"
            name="spotify"
            onChange={formik.handleChange}
            defaultChecked={formik.values.spotify === "Sometimes"}
          />
          <RadioItem
            value="Chronic"
            id="spotify_chronic"
            name="spotify"
            onChange={formik.handleChange}
            defaultChecked={formik.values.spotify === "Chronic"}
          />
        </Grid>
        {formik.touched.spotify && formik.errors.spotify && (
          <Typography className="StepThree_error" variant="caption">
            Required! hook us up!
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default StepThree;
