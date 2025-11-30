import React from "react";
import StepCard from "../../common/StepCard";
import PrimaryButton from "../../common/PrimaryButton";

const StepOneIntro = ({ next }) => (
  <StepCard>
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 text-4xl sm:text-5xl md:text-6xl animate-pulse">
        ❤️
      </div>

      <h1 className="mb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 bg-clip-text text-transparent">
        Hey Beautiful
      </h1>

      <p className="mb-6 max-w-xl text-sm sm:text-base md:text-lg text-gray-700 mx-auto leading-relaxed">
        I made something special just for you, filled with all our beautiful
        memories. Take a deep breath, relax, and let me walk you through it. 💖
      </p>

      <PrimaryButton onClick={next}>Let&apos;s Begin</PrimaryButton>
    </div>
  </StepCard>
);

export default StepOneIntro;
