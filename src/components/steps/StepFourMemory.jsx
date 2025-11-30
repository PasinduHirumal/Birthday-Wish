import React from "react";
import Crush from "../../assets/crush.png"
import StepCard from "../StepCard";
import PrimaryButton from "../PrimaryButton";

const StepFourMemory = ({ goToStep }) => {
  return (
    <StepCard>
      <div className="mb-4 text-4xl sm:text-5xl">📸</div>
      <h2 className="mb-4 text-center text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 bg-clip-text text-transparent">
        Remember When...
      </h2>
      <div className="mb-6 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-r from-pink-200 to-rose-200 p-6 sm:p-8">
        {/* Put your image in /public as crush.webp or update path */}
        <img
          src={Crush}
          alt="Our memory"
          className="h-40 w-40 rounded-full object-cover shadow-md sm:h-48 sm:w-48"
        />
        <p className="mt-3 text-center text-sm sm:text-base italic text-gray-700">
          (Imagine our favorite memory together here)
        </p>
      </div>
      <p className="mb-6 text-center text-base sm:text-lg text-gray-700">
        Every moment with you becomes a cherished memory. Whether we&apos;re
        laughing together or just enjoying the silence, time with you is always
        special.
      </p>
      <PrimaryButton onClick={() => goToStep(5)}>
        One Last Thing
      </PrimaryButton>
    </StepCard>
  );
};

export default StepFourMemory;
