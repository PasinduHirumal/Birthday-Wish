import React from "react";

const SecondaryButton = ({ children, className = "", ...props }) => (
  <button
    {...props}
    className={`mt-3 inline-flex items-center justify-center rounded-full 
    bg-white/70 px-5 py-2 text-sm sm:text-base font-medium 
    text-pink-600 shadow-md shadow-pink-200 
    transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg
    active:translate-y-0 ${className}`}
  >
    {children}
  </button>
);

export default SecondaryButton;
