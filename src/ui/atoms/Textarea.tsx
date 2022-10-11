import { ReactNode, useState, FC, InputHTMLAttributes } from "react";

import TextField from "@mui/material/TextField"

import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { InputAdornment } from "@mui/material";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

  error?: boolean;
  label?: string;
  name?: string;
  onChange?: any;
  value?: string;
  placeholder?: string;
  multiline?: boolean;
}
const Textarea: FC<InputProps> = ({
  label,
  name,
  onChange,
  value,
  error,
  placeholder,
  multiline,
}) => {

  return (
    <div className="">

        <TextField
          sx={{}}
          label={label}
          size="small"
          name={name}
          onChange={onChange}
          value={value}
          error={error}
          placeholder={placeholder}
          multiline
          maxRows={5}

        />

        </div>

  );
};

export default Textarea;
