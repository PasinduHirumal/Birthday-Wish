import React from "react";
import StepCard from "../StepCard";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";

const StepTwoWish = ({ prev, next }) => (
  <StepCard>
    <div className="text-5xl mb-4">🎉</div>

    <h2 className="mb-4 text-4xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
      Happy Birthday!
    </h2>

    <p className="text-gray-700 mb-6">
      On your special day, I want you to know how amazing you are. Your smile
        brightens my world, your laughter is my favorite melody, and your
        presence makes every moment magical.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <SecondaryButton onClick={prev}>Back</SecondaryButton>
      <PrimaryButton onClick={next}>What makes you special?</PrimaryButton>
    </div>
  </StepCard>
);

export default StepTwoWish;
