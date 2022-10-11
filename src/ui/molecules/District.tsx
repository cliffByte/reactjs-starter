import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DistrictList } from "../../data/districtList";

const District = ({ setDistrict, districts }: any) => {
 

  const [districtData, setDistrictData] = useState('')
  const handleDistrict=(item:any)=>{
    setDistrict(item.target.value)
    setDistrictData(item.target.value)
  }
  return (
    <FormControl fullWidth size="small">
      <InputLabel id="demo-simple-select-label">Select District</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={districtData}
        label="district"
        onChange={handleDistrict}
      >
        {districts.map((item: any, index: number) => {
          return (
            <MenuItem key={index} value={item}>
              {item.toUpperCase()}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>

   
  );
};

export default District;
