import React from "react";

const ReasonCard = ({ emoji, title, children }) => (
  <div className="flex flex-col items-center rounded-2xl bg-white p-4 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
    <div className="mb-2 text-3xl">{emoji}</div>
    <h3 className="mb-1 text-lg font-bold text-pink-600">{title}</h3>
    <p className="text-center text-sm text-gray-700">{children}</p>
  </div>
);

export default ReasonCard;
