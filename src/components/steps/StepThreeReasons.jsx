import React from "react";
import StepCard from "../StepCard";
import PrimaryButton from "../PrimaryButton";
import ReasonCard from "../ReasonCard";
import SecondaryButton from "../SecondaryButton";

const StepThreeReasons = ({ prev, next }) => {
  return (
    <StepCard>
      <div className="flex flex-col items-center text-center">
        <h2 className="mb-4 sm:mb-5 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 bg-clip-text text-transparent">
          Here&apos;s why you&apos;re incredible
        </h2>

        <p className="mb-6 max-w-2xl text-xs sm:text-sm md:text-base text-gray-700 mx-auto leading-relaxed">
          There are countless reasons, but here are just a few that make you
          stand out every single day.
        </p>

        <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 w-full">
          <ReasonCard emoji="✨" title="Your Kindness">
            The way you care about others is truly inspiring. You have the
            biggest heart.
          </ReasonCard>

          <ReasonCard emoji="😊" title="Your Smile">
            It lights up every room you enter and stays in my mind long after.
          </ReasonCard>

          <ReasonCard emoji="🌟" title="Your Spirit">
            Your passion and energy are contagious. You make life so much more
            exciting!
          </ReasonCard>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <SecondaryButton onClick={prev}>Back</SecondaryButton>
          <PrimaryButton onClick={next}>Keep going 💫</PrimaryButton>
        </div>
      </div>
    </StepCard>
  );
};

export default StepThreeReasons;
