import * as Yup from "yup";

const validationSchema = [
  Yup.object().shape({
    email: Yup.string().required("Email is required").email("Invalid Email"),
  }),
  Yup.object().shape({
    email: Yup.string().required("Email is required").email("Invalid Email"),
    nickname: Yup.string().required().min(5),
    username: Yup.string().required().min(5),
  }),
  Yup.object().shape({
    device: Yup.string().required(),
    airpods: Yup.string().required(),
    spotify: Yup.string().required(),
  }),
  Yup.object().shape({
    readyTime: Yup.string().required().min(5).max(148),
    happySong: Yup.string().required().min(5),
    survey: Yup.string().required(),
  }),
];

export default validationSchema;
