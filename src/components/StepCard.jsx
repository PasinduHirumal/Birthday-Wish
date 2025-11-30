import React from "react";

const StepCard = ({ children }) => (
  <div className="mx-auto w-full max-w-3xl rounded-3xl bg-white/60 p-6 sm:p-10 text-center shadow-xl backdrop-blur-xl transition-all duration-700">
    {children}
  </div>
);

export default StepCard;
