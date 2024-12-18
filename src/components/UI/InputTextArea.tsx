import React, { Fragment, ReactNode } from "react";

interface InputTextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  formik?: any;
  name: string;
  label?: ReactNode;
  placeholder?: string;
}

export const InputTextArea: React.FC<InputTextAreaProps> = (props) => {
  const formik = props.formik;
  const name = props.name;
  const label = props.label ? props.label : "";
  const placeholder = props.placeholder ? props.placeholder : "";
  const hasError = formik.errors[`${name}`] && formik.touched[`${name}`];

  return (
    <Fragment>
      <div
        className="relative  flex flex-col items-start 
         justify-center gap-2 w-full text-gray-700 mb-1"
      >
        {label && (
          <label className="text-sm first-letter:uppercase font-[400] text-gray-600">
            {label}
          </label>
        )}
        <div className="w-full relative pb-5">
          <textarea
            id={name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values[`${name}`]}
            placeholder={placeholder}
            className="p-2 outline-none rounded-md border-[1px]
            border-gray-400 focus:border-[1px] focus:border-primary
            transition-all text-sm w-full h-28 focus:outline-none
            focus:shadow-[0px_0px_0px_4px_rgba(247,103,7,0.3)] text-gray-700"
          />
        </div>
        {hasError && (
          <p
            className="absolute bottom-0 left-0 text-sms text-red-500
              first-letter:uppercase text-[12px] flex items-center gap-1"
          >
            <span>{formik.errors[`${name}`]}</span>
          </p>
        )}
      </div>
    </Fragment>
  );
};
