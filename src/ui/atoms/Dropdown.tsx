import {
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

import { IOption } from "../../config/constant/Caste";

interface Iprops {
  name: string;
  label: string;
  option?: IOption[];
  error?: boolean;
}

const Dropdown = (props: Iprops) => {
  const { name, label, option, error } = props;

  const [choice, setChoice] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    
    setChoice(event.target.value as string);
  };

  return (
    <FormControl fullWidth size="small">
      <InputLabel>{label}</InputLabel>
      <Select
        name={name}
        value={choice}
        label={label}
        error={error}
        onChange={handleChange}
      >
        {option?.map((item) => {
          return <MenuItem value={item.id}> {item.title}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
