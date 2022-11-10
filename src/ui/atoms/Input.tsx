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
  type?: string;
  placeholder?: string;
  multiline?: boolean;
  min?: number;
}
const Input: FC<InputProps> = ({
  type,
  variant,
  icon,
  label,
  name,
  onChange,
  value,
  error,
  placeholder,
  multiline,
  min,
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
            disabled={type === "disabled" ? true : false}
            type={type === "number" ? "number" : "text"}
            label={label}
            size="small"
            name={name}
            onChange={onChange}
            value={value}
            error={error}
            placeholder={placeholder}
            multiline={multiline}
            InputProps={{
              startAdornment: icon ? (
                <InputAdornment position="start">{icon}</InputAdornment>
              ) : undefined,
              inputProps: {
                min: min,
              },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Input;
