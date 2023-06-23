import React from "react";

interface Props {
  name: string;
  state: string | number;
  setState: any;
  type: string;
  disabled?: boolean;
  required?: boolean;
  title: string;
  placeholder?:string;
}

const TextInput: React.FC<Props> = ({
  name,
  state,
  setState,
  type, 
  disabled,
  required = true,
  title,
  placeholder
}) => {
  return (
    <div className="w-full flex flex-col gap-2 jsutify-start">
      <label
        htmlFor="quantity-recieved"
        className="font-primary font-semibold text-black-main text-[16px]"
      >
        {title}
      </label>
      <input
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        name={name}
        value={state}
        onChange={setState}
        type={type}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        id="quantity-recieved"
        className="w-full h-[36px] font-primary font-[500] text-black-main text-[16px] bg-gray-50 border disabled:cursor-not-allowed disabled:bg-gray-300 rounded-lg focus:outline-none focus:ring-brand-main focus:border-brand-main px-2.5"
      />
    </div>
  );
};

export default TextInput;
