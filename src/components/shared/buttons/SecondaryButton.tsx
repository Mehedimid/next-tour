import clsx from "clsx";
import React from "react";

interface SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  bgColor?: string;
  hoverColor?: string;
  textColor?: string;
  hoverTextColor?:string;
  padding?: string;
}

const SecondaryButton = ({
  label,
  className = "",
  bgColor,
  hoverColor ,
  textColor,
  hoverTextColor,
  padding ,
  ...props
}: SecondaryButtonProps) => {
  return (
    <button
      className={clsx(
        "rounded-full transition-colors duration-300 ease-in-out cursor-pointer font-medium ",
        bgColor || "bg-primary",
        hoverColor || "hover:bg-black",
        textColor || "text-white",
        hoverTextColor || "hover:text-white",
        padding || "py-1 md:py-3 px-3 md:px-6",
        className
      )}
      {...props}
    >
      {label}
    </button>
  );
};

export default SecondaryButton;
