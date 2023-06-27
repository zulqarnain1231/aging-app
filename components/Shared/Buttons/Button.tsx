import React from "react";

interface Props {
  text: string;
  event: any;
  type?: "button" | "submit";
  variation?: "outlined" | "filled";
  style?: string;
}

const Button: React.FC<Props> = ({
  text,
  event,
  type = "button",
  variation="filled",
  style = "h-[34px] w-[100px] text-[16px]",
}: Props) => {
  const renderButton = () => {
    if ((variation == "filled")) {
      return (
        <button
          type={type}
          onClick={event}
          className={`${style} flex items-center justify-center text-white-main font-primary font-medium bg-brand-main rounded-[6px]`}
        >
          {text}
        </button>
      );
    } else if ((variation == "outlined")) {
      return (
        <button
          type={type}
          onClick={event}
          className={`${style} flex items-center justify-center text-brand-main font-primary font-medium bg-transparent border-[2px] border-brand-main rounded-[6px]`}
        >
          {text}
        </button>
      );
    } else return null;
  };
  return renderButton();
};

export default Button;
