import React from "react";
import StepCard from "../../common/StepCard";
import PrimaryButton from "../../common/PrimaryButton";
import SecondaryButton from "../../common/SecondaryButton";

const StepTwoWish = ({ prev, next }) => (
  <StepCard>
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 text-3xl sm:text-4xl md:text-5xl">🎉</div>

      <h2 className="mb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
        Happy Birthday!
      </h2>

      <p className="mb-2 max-w-xl text-xs sm:text-sm md:text-base text-gray-700 mx-auto leading-relaxed">
        On your special day, I want you to know how truly amazing you are and
        how much you mean to me.
      </p>

      <p className="mb-6 max-w-xl text-xs sm:text-sm md:text-base text-gray-700 mx-auto leading-relaxed">
        Your smile brightens my world, your laughter is my favorite melody, and
        your presence makes every moment feel magical. Remember that time we
        stayed up all night talking? ✨
      </p>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
        <SecondaryButton onClick={prev}>Back</SecondaryButton>
        <PrimaryButton onClick={next}>What makes you special?</PrimaryButton>
      </div>
    </div>
  </StepCard>
);

export default StepTwoWish;
