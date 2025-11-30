import React from "react";

const ReasonCard = ({ emoji, title, children }) => (
  <div className="flex flex-col items-center rounded-2xl bg-white p-4 sm:p-5 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
    <div className="mb-2 text-2xl sm:text-3xl">{emoji}</div>
    <h3 className="mb-1 text-base sm:text-lg font-bold text-pink-600 text-center">
      {title}
    </h3>
    <p className="text-center text-xs sm:text-sm text-gray-700">{children}</p>
  </div>
);

export default ReasonCard;
