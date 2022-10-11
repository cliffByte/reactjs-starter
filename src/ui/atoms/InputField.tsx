import React, { FC } from "react";
import { ErrorMessage, useField } from "formik";
import { TextField } from "@mui/material";

const InputField = ({ ...props }: any) => {
  const [field, meta] = useField(props);
  console.log("fields .....", field);
  console.log("propsssssss .....", props);
  return (
    <>
      <TextField {...field} {...props} autoComplete="off" />
      <span className="input-error-message">
        <ErrorMessage name={field.name} className="input-error-message" />
      </span>
    </>
  );
};

export default InputField;
