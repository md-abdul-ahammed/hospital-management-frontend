import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().required("Email is required"),
  phoneNumber: yup.string().min(10).required(),
  password: yup.string().min(6).max(32).required(),
  medicalProfile: yup.object().shape({
    address: yup.string().required("Please provide your address"),
    dob: yup.string().required("Please provide date of birth"),
    gender: yup.string().required("Please provide your gender"),
    emergencyContact: yup
      .string()
      .min(10, "Phone number must be at least 10 characters"),
  }),
});
