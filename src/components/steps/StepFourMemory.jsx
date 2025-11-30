import React from "react";
import Crush from "../../assets/crush.png";
import StepCard from "../StepCard";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";

const StepFourMemory = ({ prev, next }) => {
  return (
    <StepCard>
      <div className="flex flex-col items-center text-center">
        <div className="mb-3 text-4xl sm:text-5xl">📸</div>

        <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 bg-clip-text text-transparent">
          Remember when...
        </h2>

        <div className="mb-6 w-full max-w-md rounded-2xl bg-gradient-to-r from-pink-200 to-rose-200 p-5 sm:p-7 flex flex-col items-center shadow-inner">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-pink-300/60 blur-md opacity-60" />
            <img
              src={Crush}
              alt="Our memory"
              className="relative h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 rounded-full object-cover shadow-lg ring-4 ring-white/80"
            />
          </div>
          <p className="mt-3 text-center text-xs sm:text-sm text-gray-700 italic max-w-xs">
            (Imagine our favorite memory together right here.)
          </p>
        </div>

        <p className="mb-6 max-w-xl text-sm sm:text-base md:text-lg text-gray-700 mx-auto leading-relaxed">
          Every moment with you becomes a cherished memory. Whether we&apos;re laughing
          together or just enjoying the silence, time with you always feels special. 💗
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <SecondaryButton onClick={prev}>Back</SecondaryButton>
          <PrimaryButton onClick={next}>What makes you special?</PrimaryButton>
        </div>
      </div>
    </StepCard>
  );
};

export default StepFourMemory;
