import React from "react";
import Select, { GroupBase } from "react-select";

interface props {
  selectedOption?: { value: string; label: string } | null;
  defaultValue?: { value: string; label: string } | null;
  setSelectedOption: (e: { value: string; label: string } | null) => void;
  dropdownItems: (
    | { value: string; label: string }
    | GroupBase<{ value: string; label: string }>
  )[];
  placeholder?: string;
  required?: boolean;
  height?: string;
  backgroundColor?: string;
  placeholderColor?: string;
  title: string;
}

const DropDown = ({
  selectedOption,
  setSelectedOption,
  dropdownItems,
  placeholder,
  required,
  height = "36px",
  backgroundColor = "#F9FAFB",
  placeholderColor,
  title,
  defaultValue,
}: props) => {
  return (
    <div className="w-full flex flex-col gap-2 justify-start">
      <p className="font-primary font-medium text-black-main text-[16px]">
        {title}
      </p>
      <Select
        defaultValue={defaultValue}
        onChange={setSelectedOption}
        options={dropdownItems}
        placeholder={placeholder}
        required={required}
        components={{
          IndicatorSeparator: () => null,
        }}
        styles={{
          valueContainer: (provided, state) => ({
            ...provided,
            height: height,
          }),
          control: (baseStyles, state) => ({
            ...baseStyles,
            border: state.isFocused ? "1px solid #FF1818" : "1px solid #e5e7eb",
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: "14px",
            "&:hover": {
              border: state.isFocused ? "1px solid #FF1818" : "",
            },
            boxShadow: "none",
            background: backgroundColor,
            borderRadius: "8px",
            width: "100%",
            height: "100%",
            minHeight: "unset",
          }),
          menu: (base) => ({
            ...base,
            borderRadius: "8px",
            overflow: "hidden",
            border: "1px solid rgb(207, 219, 213, 0.2)",
            background: "#FFFFFF",
            color: "black",
           
            // kill the gap
            // marginTop: 0
          }),
          menuList: (base) => ({
            ...base,
            padding: 0,
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? "#FF1818" : "inherit",
            "&:hover": {
              backgroundColor: state.isSelected ? "#FF1818" : "#FF1818",
              color:"white"
            },
          }),
          singleValue: (provided) => ({
            ...provided,
            color: "#3B3C36",
            fontFamily:"Catamaran",
            fontSize:"16px",
            
          }),
          placeholder: (defaultStyles) => {
            return {
              ...defaultStyles,
              color: placeholderColor,
            };
          },
          dropdownIndicator: (provided, state) => ({
            ...provided,
            color: state.isFocused ? "#FF1818" : "#3B3C36",
          }),
        }}
      />
    </div>
  );
};

export default DropDown;
