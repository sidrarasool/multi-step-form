import React, { useState } from "react";
import { Grid, Typography, IconButton } from "@mui/material";
import { useFormik } from "formik";
import { ReactComponent as Logo } from "../../images/Logo.svg";
import Felix from "../../images/Felix.svg";
import VFLogo from "../../images/VFLogo.svg";
import Cloud1 from "../../images/Cloud1.svg";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import validationSchema from "../ValidationSchema";
import StepOne from "../StepOne";
import StepTwo from "../StepTwo";
import StepThree from "../StepThree";
import StepFour from "../StepFour";
import FinalPage from "../FinalPage";
import "./Homepage.css";

const Homepage = () => {
  const [page, setPage] = useState(0);
  const [formValues, setFormValues] = useState();
  const [showFinalPage, setFinalShowPage] = useState(false);
  const currentValidationSchema = validationSchema[page];
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
    validationSchema: currentValidationSchema,
    onSubmit: (values, actions) => {
      if (page === 3) {
        setFormValues(values);
        setFinalShowPage(true);
        console.log("values", values);
      } else {
        setPage(page + 1);
        actions.setTouched({});
        actions.setSubmitting(false);
      }
    },
  });

  return (
    <Grid
      item
      xs={12}
      container
      alignItems="space-between"
      justifyContent="center"
    >
      {page === 0 && (
        <Grid
          item
          xs={12}
          className="Homepage_heading_Container"
          container
          justifyContent="center"
        >
          <Logo />
        </Grid>
      )}
      {page === 0 && (
        <Grid item xs={12}>
          <Typography variant="h4" className="HomePage_Phone_Heading">
            An Audio Assistant For Happiness
          </Typography>
        </Grid>
      )}
      <Grid item xs={12} container wrap="wrap-reverse">
        <Grid
          item
          xs={12}
          sm={6}
          container
          justifyContent="center"
          alignItems="center"
        >
          {showFinalPage ? (
            <FinalPage
              values={formValues}
              setPage={setPage}
              setFinalShowPage={setFinalShowPage}
              formik={formik}
            />
          ) : (
            <form id="music-app" onSubmit={formik.handleSubmit}>
              {page === 0 && <StepOne formik={formik} />}
              {page > 0 && (
                <Grid
                  item
                  xs={12}
                  className="HomePage_form_container"
                  container
                  alignItems="space-between"
                >
                  <Grid item xs={12} container justifyContent="flex-end">
                    <IconButton
                      className="HomePage_close_btn"
                      onClick={() => {
                        setPage(0);
                        formik.setValues({});
                      }}
                    >
                      <CloseRoundedIcon />
                    </IconButton>
                  </Grid>
                  <Grid item xs={12}>
                    {page === 1 && <StepTwo formik={formik} />}
                    {page === 2 && <StepThree formik={formik} />}
                    {page === 3 && <StepFour formik={formik} />}
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    container
                    justifyContent="space-between"
                    alignItems="center"
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
                      <button className="HomePage_next_btn" type="submit">
                        {page === 3 ? "Submit" : "Next"}
                      </button>
                    </Grid>
                  </Grid>
                </Grid>
              )}
            </form>
          )}
        </Grid>
        {page === 0 ? (
          <Grid
            item
            xs={12}
            sm={6}
            container
            justifyContent="center"
            alignItems="center"
          >
            <img src={Felix} alt="VF Logo" className="HomePage_Felix" />
          </Grid>
        ) : (
          <Grid
            item
            xs={12}
            sm={6}
            container
            justifyContent="center"
            alignItems="center"
            className="HomePage_Form_Steps_Felix"
          >
            {page === 1 && (
              <img src={Cloud1} alt="cloud1" className="HomePage_Cloud" />
            )}
            <img src={Felix} alt="VF Logo" className="HomePage_Felix" />
          </Grid>
        )}
      </Grid>
      {page === 0 && (
        <Grid
          className="Homepage_VfLogoContainer"
          item
          xs={12}
          container
          justifyContent="center"
        >
          <img src={VFLogo} alt="VF Logo" />
        </Grid>
      )}
    </Grid>
  );
};
export default Homepage;
