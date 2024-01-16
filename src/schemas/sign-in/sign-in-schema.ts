import * as yup from "yup";

export const signInSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().min(6).max(32).required(),
});
