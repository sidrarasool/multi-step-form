import React, { useState } from "react";
import { Grid, Typography, IconButton } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Homepage.css";
import { ReactComponent as Logo } from "../../images/Logo.svg";
import { ReactComponent as VFLogo } from "../../images/VFLogo.svg";
import { ReactComponent as Felix } from "../../images/Felix.svg";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import StepOne from "../StepOne";
import StepTwo from "../StepTwo";
import StepThree from "../StepThree";
import StepFour from "../StepFour";

const Homepage = () => {
  const [page, setPage] = useState(0);
  const formik = useFormik({
    initialValues: {
      email: "",
      nickname: "",
      username: "",
      phoneNumber: "",
      device: "",
      airpods: "",
      spotify: "",
      readyTime: "",
      happySong: "",
      survey: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email is required").email("Invalid Email"),
      nickname: Yup.string().required().min(5),
      username: Yup.string().required().min(5),
      phoneNumber: Yup.string().required().length().min(8),
      device: Yup.string().required(),
      airpods: Yup.string().required(),
    }),
    onSubmit: async () => {},
  });
  return (
    <Grid item container xs={12} className="Homepage_Container">
      <Grid item xs={12}>
        <Logo />
      </Grid>
      <Grid item xs={6}>
        {page === 0 && <StepOne formik={formik} setPage={setPage} />}
        {page > 0 && (
          <Grid item xs={12} className="HomePage_form_container">
            <Grid container justifyContent="flex-end">
              <IconButton
                onClick={() => {
                  setPage(0);
                }}
              >
                <CloseRoundedIcon />
              </IconButton>
            </Grid>
            {page === 1 && <StepTwo formik={formik} />}
            {page === 2 && <StepThree formik={formik} />}
            {page === 3 && <StepFour formik={formik} />}
            <Grid
              item
              xs={12}
              container
              justifyContent="space-between"
              className="HomePage_form_navigation"
            >
              <Grid>
                <Typography
                  className="HomePage_back_btn"
                  onClick={() => {
                    setPage(page - 1);
                  }}
                >
                  BACK
                </Typography>
              </Grid>
              <Grid>
                <Typography>{page}/3</Typography>
              </Grid>
              <Grid>
                <button
                  className="HomePage_next_btn"
                  onClick={() => {
                    setPage(page + 1);
                  }}
                >
                  Next
                </button>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
      <Grid item xs={6}>
        <Felix />
      </Grid>
      <Grid
        className="Homepage_VfLogoContainer"
        item
        xs={12}
        container
        justifyContent="center"
      >
        <VFLogo />
      </Grid>
    </Grid>
  );
};

export default Homepage;
