import React from "react";

const StepCard = ({ children, className = "" }) => (
    <div
        className={`
      mx-auto w-full 
      max-w-md sm:max-w-2xl lg:max-w-3xl 
      rounded-3xl bg-white/70 
      p-5 sm:p-8 md:p-10 
      text-center shadow-xl backdrop-blur-xs 
      transition-all duration-700
      ${className}
    `}
    >
        {children}
    </div>
);

export default StepCard;
