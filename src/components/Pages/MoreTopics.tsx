import React from "react";

export const MoreTopics: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <header
        className="w-full flex items-center justify-center border-b-[1px]
         border-gray-300 py-6"
      >
        <p className="text-gray-700 text-xl font-bold">
          Rootstock O'Level Math
        </p>
      </header>
      <span className="italic pt-24 w-[90%] sm:w-[448px]">
        coming soon --- more maths topics to cover all you needs
      </span>
    </div>
  );
};
