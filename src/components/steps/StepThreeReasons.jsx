import React from "react";
import StepCard from "../../common/StepCard";
import ReasonCard from "../../common/ReasonCard";
import PrimaryButton from "../../common/PrimaryButton";
import SecondaryButton from "../../common/SecondaryButton";

const StepThreeReasons = ({ prev, next }) => (
  <StepCard>
    <div className="flex flex-col items-center text-center">
      <h2 className="mb-4 sm:mb-5 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 bg-clip-text text-transparent">
        Here&apos;s why you&apos;re incredible
      </h2>

      <p className="mb-6 max-w-2xl text-xs sm:text-sm md:text-base text-gray-700 mx-auto leading-relaxed">
        There are countless reasons why I adore you, but here are just a few
        that make my heart skip a beat every day.
      </p>

      <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 w-full">
        <ReasonCard emoji="✨" title="Your Kind Heart">
          The way you care about others, how you remember small details about
          people – it shows your beautiful soul.
        </ReasonCard>

        <ReasonCard emoji="😊" title="Your Infectious Smile">
          That smile that lights up every room – I still remember the first time
          I saw it and couldn&apos;t look away.
        </ReasonCard>

        <ReasonCard emoji="🌟" title="Your Amazing Spirit">
          Your passion for life, the way you get excited about little things –
          it makes every moment with you magical.
        </ReasonCard>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
        <SecondaryButton onClick={prev}>Back</SecondaryButton>
        <PrimaryButton onClick={next}>Our Special Memories 💫</PrimaryButton>
      </div>
    </div>
  </StepCard>
);

export default StepThreeReasons;
