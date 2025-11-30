import React from "react";
import StepCard from "../StepCard";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";

const StepFiveFinal = ({ prev, celebrate }) => (
  <StepCard>
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 text-4xl sm:text-5xl">🎂</div>

      <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
        My Birthday Wish for You
      </h2>

      <p className="mb-3 max-w-xl text-xs sm:text-sm md:text-base text-gray-700 mx-auto leading-relaxed">
        May your year be filled with joy, laughter, and dreams that gently
        unfold into reality.
      </p>

      <p className="mb-6 max-w-xl text-xs sm:text-sm md:text-base text-gray-700 mx-auto leading-relaxed">
        I hope you always remember how special you are to me and to everyone
        lucky enough to know you. You deserve all the love, happiness, and
        magic in the world. ✨
      </p>

      <p className="mb-6 text-base sm:text-lg md:text-xl font-semibold text-pink-600">
        Happy Birthday, my crush! ❤️
      </p>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
        <SecondaryButton onClick={prev}>Back</SecondaryButton>
        <PrimaryButton onClick={celebrate} className="animate-pulse">
          Celebrate!
        </PrimaryButton>
      </div>
    </div>
  </StepCard>
);

export default StepFiveFinal;
