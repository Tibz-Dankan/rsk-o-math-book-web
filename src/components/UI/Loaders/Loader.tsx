import React, { Fragment } from "react";
import { twMerge } from "tailwind-merge";

type LoaderProps = {
  className: string;
  label?: string;
};

export const Loader: React.FC<LoaderProps> = (props) => {
  return (
    <Fragment>
      <div
        className={twMerge(
          `w-full flex items-center justify-center`,
          props.className
        )}
      >
        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
        <span className="text-gray-100 absolute top-2 left-12 font-bold">
          {props?.label && props.label + "..."}
        </span>
      </div>
    </Fragment>
  );
};

// export const Loader: React.FC<LoaderProps> = (props) => {
//   return (
//     <Fragment>
//       <div
//         className={twMerge(
//           `h-10 bg-primary rounded-md relative
//           before:border-4 before:border-solid before:border-gray-400
//           before:border-r-4 before:border-r-gray-100 before:w-[24px]
//           before:h-[24px] before:rounded-[50%] before:absolute before:top-2
//           before:left-4 before:animate-rotate`,
//           props.className
//         )}
//       >
//         <span className="text-gray-100 absolute top-2 left-12 font-bold">
//           {props?.label && props.label + "..."}
//         </span>
//       </div>
//     </Fragment>
//   );
// };
