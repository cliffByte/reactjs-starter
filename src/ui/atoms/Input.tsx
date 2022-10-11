import { ReactNode, useState, FC, InputHTMLAttributes } from "react";

import TextField from "@mui/material/TextField";

import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { InputAdornment } from "@mui/material";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: string | undefined;
  icon?: ReactNode;
  id?: string;
  error?: boolean;
  label?: string;
  name?: string;
  onChange?: any;
  value?: string;
  placeholder?: string;
  multiline?: boolean;
}
const Input: FC<InputProps> = ({
  variant,
  label,
  name,
  onChange,
  value,
  error,
  placeholder,
  multiline,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  // function to toggle between password and text
  const toggleShow = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="">
      {variant === "password" ? (
        <TextField
          sx={{}}
          type={showPassword ? "text" : "password"}
          label={label}
          size="small"
          name={name}
          onChange={onChange}
          value={value}
          error={error}
          placeholder={placeholder}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <div onClick={toggleShow}>
                  {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                </div>
              </InputAdornment>
            ),
          }}
        />
      ) : (
        <div>
          <TextField
            sx={{}}
            type="text"
            label={label}
            size="small"
            name={name}
            onChange={onChange}
            value={value}
            error={error}
            placeholder={placeholder}
            multiline={multiline}
          />
        </div>
      )}
    </div>
  );
};

export default Input;
