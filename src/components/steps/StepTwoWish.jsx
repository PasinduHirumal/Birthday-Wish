import React from "react";
import StepCard from "../StepCard";
import PrimaryButton from "../PrimaryButton";

const StepTwoWish = ({ goToStep }) => {
  return (
    <StepCard>
      <div className="mb-4 text-4xl sm:text-5xl">🎉</div>
      <h2 className="mb-4 text-center text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 bg-clip-text text-transparent">
        Happy Birthday!
      </h2>
      <p className="mb-6 text-center text-base sm:text-lg text-gray-700">
        On your special day, I want you to know how amazing you are. Your smile
        brightens my world, your laughter is my favorite melody, and your
        presence makes every moment magical.
      </p>
      <PrimaryButton onClick={() => goToStep(3)}>
        What makes you special?
      </PrimaryButton>
    </StepCard>
  );
};

export default StepTwoWish;
