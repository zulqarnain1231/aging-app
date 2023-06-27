import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormControl } from "@mui/material";

interface Props {
  firstOption: {
    label: string;
    value: string;
  };
  secondOption: {
    label: string;
    value: string;
  };
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export default function RadioButtonGroup({
  firstOption,
  secondOption,
  onChange,
  value,
}: Props) {
  return (
    <RadioGroup row value={value} onChange={onChange}>
      <FormControlLabel
        value={firstOption.value}
        control={<Radio  />}
        label={firstOption.label}
        sx={{
          "& .Mui-checked": {
            color: "#FF1818",
          },
          "& .MuiFormControlLabel-label": {
            fontFamily: "Inter",
            fontSize: "15px",
            fontWeight:500
          },
        }}
      />
      <FormControlLabel
        value={secondOption.value}
        control={<Radio />}
        label={secondOption.label}
        sx={{
          "& .Mui-checked": {
            color: "#FF1818",
          },
          "& .MuiFormControlLabel-label": {
            fontFamily: "Inter",
            fontSize: "15px",
            fontWeight:500
          },
        }}
      />
    </RadioGroup>
  );
}
