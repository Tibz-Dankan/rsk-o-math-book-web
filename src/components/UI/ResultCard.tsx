import React from "react";
import baseJson from "../../data/base.json";

export const ResultCard: React.FC<TConvertResponse> = (props) => {
  const baseNumList = baseJson.bases;

  const getBaseByNumber = (num: number) => {
    return baseNumList.find((item) => item.number === num);
  };

  const inputBaseValue = getBaseByNumber(parseInt(props.inputBase))?.name;
  const outputBaseValue = getBaseByNumber(parseInt(props.outputBase))?.name;

  return (
    <div
      className="w-full flex items-center justify-center bg-green-200 
      rounded-md p-4 text-gray-600"
    >
      <div className="w-full flex flex-col items-start justify-center gap-2">
        <span className="text-lg font-semibolds text-gray-800">From Base</span>
        <span>{inputBaseValue}</span>
        <span>{props.inputNumber}</span>
      </div>
      <div className="w-full flex flex-col items-start justify-center gap-2">
        <span className="text-lg font-semibolds text-gray-800">To Base</span>
        <span>{outputBaseValue}</span>
        <span>{props.outputNumber}</span>
      </div>
    </div>
  );
};
