import React from "react";
import StepCard from "../StepCard";
import PrimaryButton from "../PrimaryButton";

const StepOneIntro = ({ goToStep }) => {
  return (
    <StepCard>
      <div className="mb-4 text-5xl sm:text-6xl animate-pulse">❤️</div>
      <h1 className="mb-4 text-center text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 bg-clip-text text-transparent">
        Hey Beautiful
      </h1>
      <p className="mb-6 text-center text-lg sm:text-xl text-gray-700">
        I made something special for you...
      </p>
      <PrimaryButton onClick={() => goToStep(2)}>
        Let&apos;s Begin
      </PrimaryButton>
    </StepCard>
  );
};

export default StepOneIntro;
