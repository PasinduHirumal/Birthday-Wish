import React from "react";
import StepCard from "../../common/StepCard";
import PrimaryButton from "../../common/PrimaryButton";
import SecondaryButton from "../../common/SecondaryButton";

const StepFiveFinal = ({ prev, celebrate }) => (
  <StepCard>
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 text-4xl sm:text-5xl">🎂</div>

      <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
        My Birthday Wish for You
      </h2>

      <p className="mb-3 max-w-xl text-xs sm:text-sm md:text-base text-gray-700 mx-auto leading-relaxed">
        May your year be filled with the same joy and light you bring into my
        life every day.
      </p>

      <p className="mb-4 max-w-xl text-xs sm:text-sm md:text-base text-gray-700 mx-auto leading-relaxed">
        I hope you always remember how incredibly special you are – not just to
        me, but to everyone lucky enough to know you. You deserve all the love,
        happiness, and magic this world has to offer. ✨
      </p>

      <p className="mb-2 max-w-xl text-xs sm:text-sm md:text-base text-gray-700 mx-auto leading-relaxed">
        Thank you for being you, for all the beautiful memories we&apos;ve
        shared, and for making every day brighter just by being in it.
      </p>

      <p className="mb-6 text-base sm:text-lg md:text-xl font-semibold text-pink-600">
        Happy Birthday, my beautiful crush! ❤️
      </p>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
        <SecondaryButton onClick={prev}>Back</SecondaryButton>
        <PrimaryButton onClick={celebrate} className="animate-pulse">
          Celebrate! 🎉
        </PrimaryButton>
      </div>
    </div>
  </StepCard>
);

export default StepFiveFinal;
