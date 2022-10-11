import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { useState } from "react";

import { IOption } from "../../config/constant/PlantationType";

interface Iprops {
  name: string;
  label: string;
  option: IOption[];
}

const RadioSet = (props: Iprops) => {
  let { name, label, option,} = props;

  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl >
      <FormLabel>{label}</FormLabel>

      <RadioGroup
        row
        name={name}
        value={value}
        onChange={handleChange}
      >
        {option.map((item: any, index: number) => (
          <FormControlLabel value={item.id} control={<Radio color="primary" />} label={item.title} key={index} />
        )

        )}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioSet;
