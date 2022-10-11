import * as Yup from "yup";
// text constant
import text from "../constant/text";

export const loginSchema = Yup.object().shape({
  email: Yup.string().email(text.EMAIL_VALID).required(text.EMAIL_REQUIRED),
  password: Yup.string()
    .min(8)
    .max(30)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/,
      text.PASSWORD_SUGGESTION
    )
    .required(text.PASSWORD_REQUIRED),
});
export const verifyEmailSchema = Yup.object().shape({
  email: Yup.string().email(text.EMAIL_VALID).required(text.EMAIL_REQUIRED),
});
export const verifyOtpSchema = Yup.object().shape({
  otp: Yup.string().length(5).required(text.OTP_REQUIRED),
});
export const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8)
    .max(30)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/,
      text.PASSWORD_SUGGESTION
    )
    .required(text.PASSWORD_REQUIRED),
  confirmPassword: Yup.string()
    .required(text.CONFIRM_PASSWORD_REQUIRED)
    .oneOf([Yup.ref("password")], text.PASSWORD_MATCH),
});

export const updatePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().required(text.Old_PASSWORD_REQUIRED),
  newPassword: Yup.string()
    .min(8)
    .max(30)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/,
      text.PASSWORD_SUGGESTION
    )
    .required(text.PASSWORD_REQUIRED),
  confirmPassword: Yup.string()
    .required(text.CONFIRM_PASSWORD_REQUIRED)
    .oneOf([Yup.ref("newPassword")], text.PASSWORD_MATCH),
});

export const createAdminSchema = Yup.object().shape({
  firstName: Yup.string().required(text.FIRST_NAME_REQUIRED),
  lastName: Yup.string().required(text.LAST_NAME_REQUIRED),
  email: Yup.string().email().required(text.EMAIL_REQUIRED),
  password: Yup.string()
    .min(8)
    .max(30)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/,
      text.PASSWORD_SUGGESTION
    )
    .required(text.PASSWORD_REQUIRED),
  confirmPassword: Yup.string()
    .required(text.CONFIRM_PASSWORD_REQUIRED)
    .oneOf([Yup.ref("password")], text.PASSWORD_MATCH),
  role: Yup.string().required(text.ROLE_REQUIRED),
  permissions: Yup.array().required(text.PROJECT_REQUIRED),
});
