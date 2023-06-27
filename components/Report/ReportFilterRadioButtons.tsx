import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

interface Props {
  firstOption: {
    label: string;
    value: string;
  };
  secondOption: {
    label: string;
    value: string;
  };
  thirdOption: {
    label: string;
    value: string;
  };
  fourthOption: {
    label: string;
    value: string;
  };
  fifthOption: {
    label: string;
    value: string;
  };
  sixthOption: {
    label: string;
    value: string;
  };
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export default function ReportFilterRadioButtons({
  firstOption,
  secondOption,
  thirdOption,
  fourthOption,
  fifthOption,
  sixthOption,
  onChange,
  value,
}: Props) {
  return (
    <RadioGroup row value={value} onChange={onChange}>
      <FormControlLabel
        value={firstOption.value}
        control={<Radio />}
        label={firstOption.label}
        sx={{
          "& .Mui-checked": {
            color: "#FF1818",
          },
          "& .MuiFormControlLabel-label": {
            fontFamily: "Catamaran",
            fontSize: "15px",
            fontWeight: 500,
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
            fontFamily: "Catamaran",
            fontSize: "15px",
            fontWeight: 500,
          },
        }}
      />
      <FormControlLabel
        value={thirdOption.value}
        control={<Radio />}
        label={thirdOption.label}
        sx={{
          "& .Mui-checked": {
            color: "#FF1818",
          },
          "& .MuiFormControlLabel-label": {
            fontFamily: "Catamaran",
            fontSize: "15px",
            fontWeight: 500,
          },
        }}
      />
      <FormControlLabel
        value={fourthOption.value}
        control={<Radio />}
        label={fourthOption.label}
        sx={{
          "& .Mui-checked": {
            color: "#FF1818",
          },
          "& .MuiFormControlLabel-label": {
            fontFamily: "Catamaran",
            fontSize: "15px",
            fontWeight: 500,
          },
        }}
      />
      <FormControlLabel
        value={fifthOption.value}
        control={<Radio />}
        label={fifthOption.label}
        sx={{
          "& .Mui-checked": {
            color: "#FF1818",
          },
          "& .MuiFormControlLabel-label": {
            fontFamily: "Catamaran",
            fontSize: "15px",
            fontWeight: 500,
          },
        }}
      />
      <FormControlLabel
        value={sixthOption.value}
        control={<Radio />}
        label={sixthOption.label}
        sx={{
          "& .Mui-checked": {
            color: "#FF1818",
          },
          "& .MuiFormControlLabel-label": {
            fontFamily: "Catamaran",
            fontSize: "15px",
            fontWeight: 500,
          },
        }}
      />
    </RadioGroup>
  );
}
