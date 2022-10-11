import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { format } from "date-fns";

import { ChangeEvent, useState } from "react";

interface Iprops {
  label: string;
  error: boolean;
  handleChange: (value: string | null) => void;
  name: string;
  value: string;
}

const CustomDatePicker = (props: Iprops) => {
  const { label } = props;
  const { handleChange, error, name, value } = props;
  const [value1, setValue] = useState(
    value ? format(new Date(value), "MM/dd/yyyy") : ""
  );

  const handleChangeDate = (newValue: any) => {
    try {
      handleChange(format(new Date(newValue._d), "MM/dd/yyyy"));
      setValue(newValue);
    } catch (err) {
      handleChange(""); //for formik.
      setValue("");
      console.log(err);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DesktopDatePicker
        label={label}
        inputFormat="MM/DD/YYYY"
        value={value1}
        onChange={handleChangeDate}
        // @ts-ignore
        renderInput={(params) => (
          <TextField
            size="small"
            variant="outlined"
            {...params}
            value={value}
            name={name}
            error={error}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
