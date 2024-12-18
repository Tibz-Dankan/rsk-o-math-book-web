import React, { Fragment, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  label: ReactNode;
  type: "submit" | "reset" | "button";
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <Fragment>
      <button
        className={twMerge(
          `flex items-center justify-center bg-primary h-10 
           py-2 px-4 rounded-md text-gray-200 disabled:opacity-50
           cursor-pointer disabled:cursor-not-allowed`,
          props.className
        )}
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.label}
      </button>
    </Fragment>
  );
};
