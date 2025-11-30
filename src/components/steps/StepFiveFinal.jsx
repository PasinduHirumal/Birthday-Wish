import React from "react";
import StepCard from "../StepCard";
import PrimaryButton from "../PrimaryButton";

const StepFiveFinal = ({ onCelebrate }) => {
  return (
    <StepCard>
      <div className="mb-4 text-4xl sm:text-5xl">🎂</div>
      <h2 className="mb-4 text-center text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 bg-clip-text text-transparent">
        My Birthday Wish For You
      </h2>
      <p className="mb-4 text-center text-base sm:text-lg text-gray-700">
        May your year be filled with joy, laughter, and dreams come true. May
        you always know how special you are to me and to everyone lucky enough
        to know you.
      </p>
      <p className="mb-6 text-center text-lg sm:text-xl font-semibold text-pink-600">
        Happy Birthday, my crush! ❤️
      </p>
      <PrimaryButton onClick={onCelebrate} className="animate-pulse">
        Celebrate!
      </PrimaryButton>
      <p className="mt-6 text-center text-sm text-gray-500">
        Made with ❤️ just for you
      </p>
    </StepCard>
  );
};

export default StepFiveFinal;
