import React, { Fragment, ReactNode } from "react";

interface InputFieldProps extends React.HTMLAttributes<HTMLInputElement> {
  formik?: any;
  name: string;
  type: "text" | "password" | "email" | "number" | "date" | "time";
  placeholder?: string;
  label?: ReactNode;
}

export const InputField: React.FC<InputFieldProps> = (props) => {
  const formik = props.formik;
  const name = props.name;
  const label = props.label ? props.label : "";
  const placeholder = props.placeholder ? props.placeholder : "";

  const hasError = formik.errors[`${name}`] && formik.touched[`${name}`];

  return (
    <Fragment>
      <div
        className="relative flex flex-col items-start  
         justify-center gap-2 w-full text-color-text-primary mb-1"
      >
        {label && (
          <label
            className={`text-sm first-letter:uppercase font-[400]
            text-color-text-secondary text-gray-600`}
          >
            {label}
          </label>
        )}
        <div className="w-full relative bg-green-300s pb-5">
          <input
            type={props.type}
            id={name}
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values[`${name}`]}
            placeholder={placeholder}
            className={`p-2 outline-none rounded-md border-[1px]
            focus:border-[1px] focus:border-primary transition-all text-sm 
            w-full focus:outline-none focus:shadow-[0px_0px_0px_4px_rgba(247,103,7,0.3)]
            text-color-text-primary bg-color-bg-primary ${
              hasError ? "border-red-500" : "border-gray-400"
            }`}
          />
          {hasError && (
            <p
              className="absolute bottom-0 left-0 text-sms text-red-500
              first-letter:uppercase text-[12px] flex items-center gap-1"
            >
              <span>{formik.errors[`${name}`]}</span>
            </p>
          )}
        </div>
      </div>
    </Fragment>
  );
};
