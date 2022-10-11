import React, { ChangeEvent, FC } from "react";

import {
  Button,
  MenuItem,
  Box,
  TextField,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  InputLabel,
  } from "@mui/material";

import { ErrorMessage, useField, Field } from "formik";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface SelectProps {
  text?: string;
  data?: any;
}

const SelectForm = ({ ...props }: any) => {
  const { label, name, options, ...rest } = props;
  const [field, meta] = useField(props);

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select>
          {options.map((item: any, index: number) => (
            <MenuItem key={index} value={item.district}>
              {item.district}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <span className="input-error-message">
        <ErrorMessage name={name} className="input-error-message" />
      </span>
    </>
  );
};

export default SelectForm;
