import React, { Fragment, ChangeEvent } from "react";
import { TriangleDownIcon } from "./Icons/TriangleDownIcon";

interface InputSelectProps extends React.HTMLAttributes<HTMLSelectElement> {
  formik?: any;
  name?: string;
  options: string[];
  defaultOption?: string;
  label?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const InputSelect: React.FC<InputSelectProps> = (props) => {
  const formik = props.formik;
  const options = props.options;
  // const hasDefaultOption: boolean = !!props.defaultOption;
  // const defaultOption = hasDefaultOption ? props.defaultOption : "";
  const name = props.name;
  const label = props.label ? props.label : "";
  // const hasSelectedValue: boolean = !!formik.values[`${name}`];

  const hasError = formik.errors[`${name}`] && formik.touched[`${name}`];

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    if (!props.onChange) return;
    props.onChange(event);
  };

  // useEffect(() => {
  //   const setDefaultValueHandler = () => {
  //     if (hasSelectedValue) return;

  //     if (hasDefaultOption) {
  //       formik.values[`${name}`] = defaultOption!;
  //       return;
  //     }
  //     formik.values[`${name}`] = options[0];
  //   };

  //   setDefaultValueHandler();

  //   return () => {};
  // }, [hasSelectedValue, defaultOption]);

  const noValueSelected =
    formik.values[`${name}`] === null ||
    formik.values[`${name}`] === "" ||
    formik.values[`${name}`] === 0;

  // Set first element of options list as the default value
  formik.values[`${name}`] = noValueSelected
    ? options[0]
    : formik.values[`${name}`];

  return (
    <Fragment>
      <div
        className="relative pb-5s flex flex-col items-start 
         justify-center gap-2 w-full text-color-text-primary"
      >
        {label && (
          <label
            className={`text-sm first-letter:uppercase font-[400]
            text-color-text-secondary`}
          >
            {label}
          </label>
        )}
        <div className="w-full relative mb-5">
          <select
            onChange={(event) => {
              formik.handleChange(event);
              onChangeHandler(event);
            }}
            value={formik.values[`${name}`]}
            id={name}
            className={`appearance-none p-2 outline-none rounded-md border-[1px]
              focus:border-[1px] focus:border-primary transition-all text-sm 
              w-full focus:outline-none focus:shadow-[0px_0px_0px_4px_rgba(247,103,7,0.3)]
              text-color-text-primary bg-color-bg-primary ${
                hasError ? "border-red-500" : "border-gray-400"
              }`}
          >
            {options.map((option, index) => (
              <option value={option} key={index}>
                {option}
              </option>
            ))}
          </select>
          <div
            className="flex items-center justify-center absolute top-0 
             right-2 h-full"
          >
            <TriangleDownIcon className="w-3 h-3" />
          </div>
        </div>
        {hasError && (
          <p
            className="absolute bottom-0 left-0 text-sms text-red-500
             first-letter:uppercase text-[12px] flex items-center"
          >
            <span> {formik.errors[`${name}`]}</span>
          </p>
        )}
      </div>
    </Fragment>
  );
};
