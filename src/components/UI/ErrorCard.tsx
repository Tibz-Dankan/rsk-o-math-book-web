import React from "react";

type ErrorCardProps = {
  message: string;
};

export const ErrorCard: React.FC<ErrorCardProps> = (props) => {
  return (
    <div className="w-full text-gray-200 bg-[#D9534F] text-sm p-4 rounded-md">
      <span>{props.message}</span>
    </div>
  );
};
