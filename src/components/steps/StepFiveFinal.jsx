import React from "react";
import StepCard from "../StepCard";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";

const StepFiveFinal = ({ prev, celebrate }) => (
  <StepCard>
    <div className="text-5xl mb-4">🎂</div>

    <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-4">
      My Birthday Wish For You
    </h2>

    <p className="text-gray-700 mb-4">
      May your year be filled with joy, laughter, and dreams come true. May
      you always know how special you are to me and to everyone lucky enough
      to know you.
    </p>

    <p className="font-semibold text-pink-600 mb-6 text-xl">
      Happy Birthday, my crush! ❤️
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <SecondaryButton onClick={prev}>Back</SecondaryButton>
      <PrimaryButton onClick={celebrate} className="animate-pulse">
        Celebrate!
      </PrimaryButton>
    </div>
  </StepCard>
);

export default StepFiveFinal;
