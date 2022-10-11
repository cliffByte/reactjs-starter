import React, { useEffect, useState } from "react";
import { municipalityList } from "../../data/municipalityList";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
const Municipality = ({ district }: any) => {
  let [listItem, setListItem] = useState<null>(null);

  const data = municipalityList;

  const [options, setOptions] = useState("");
  const [loadOptoin, setOptionLoad] = useState(false);

  const handleMuni = (item: any) => {
    setOptions(item.target.value);
  };

  useEffect(() => {
    setOptionLoad(true);
  }, [district]);

  return (
    <div>
      {loadOptoin && (
        <FormControl fullWidth size="small">
          <InputLabel id="demo-simple-select-label">
            Select Municipality
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={options}
            label="district"
            onChange={handleMuni}
          >
            {data[district]?.map((item: any, index: number) => {
              return (
                <MenuItem  value={item} key={index}>
                  {item.toUpperCase()}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        // <select onChange={handleMuni}>
        //   {data[district]?.map((item:any,index:number)=>{
        //     return <option value={item} key={index}>{item}</option>
        //   })}
        // </select>
      )}
    </div>
  );
};

export default Municipality;
