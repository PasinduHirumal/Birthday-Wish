import React from "react";
import StepCard from "../StepCard";
import PrimaryButton from "../PrimaryButton";

const StepOneIntro = ({ next }) => (
  <StepCard>
    <div className="mb-4 text-6xl animate-pulse">❤️</div>

    <h1 className="mb-4 text-4xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
      Hey Beautiful
    </h1>

    <p className="text-lg text-gray-700 mb-6">
      I made something special for you...
    </p>

    <PrimaryButton onClick={next}>Let's Begin</PrimaryButton>
  </StepCard>
);

export default StepOneIntro;
