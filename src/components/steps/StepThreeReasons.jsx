import React from "react";
import StepCard from "../StepCard";
import PrimaryButton from "../PrimaryButton";
import ReasonCard from "../ReasonCard";

const StepThreeReasons = ({ goToStep }) => {
  return (
    <StepCard>
      <h2 className="mb-6 text-center text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 bg-clip-text text-transparent">
        Here&apos;s why you&apos;re incredible
      </h2>
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <ReasonCard emoji="✨" title="Your Kindness">
          The way you care about others is truly inspiring. You have the biggest
          heart.
        </ReasonCard>
        <ReasonCard emoji="😊" title="Your Smile">
          It lights up every room you enter and stays in my mind all day.
        </ReasonCard>
        <ReasonCard emoji="🌟" title="Your Spirit">
          Your passion and energy are contagious. You make life exciting!
        </ReasonCard>
      </div>
      <PrimaryButton onClick={() => goToStep(4)}>
        A Little Surprise
      </PrimaryButton>
    </StepCard>
  );
};

export default StepThreeReasons;
