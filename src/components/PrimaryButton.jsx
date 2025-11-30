import React from "react";

const PrimaryButton = ({ children, className = "", ...props }) => (
  <button
    {...props}
    className={`mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-pink-400/40 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 ${className}`}
  >
    {children}
  </button>
);

export default PrimaryButton;
