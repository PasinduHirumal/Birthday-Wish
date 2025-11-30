import React from "react";
import StepCard from "../../common/StepCard";
import PrimaryButton from "../../common/PrimaryButton";
import SecondaryButton from "../../common/SecondaryButton";

const StepFourMemory = ({ prev, next }) => {
  const memoryImage =
    "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?auto=format&fit=crop&w=687&q=80";

  return (
    <StepCard>
      <div className="flex flex-col items-center text-center">
        <div className="mb-3 text-3xl sm:text-4xl">📸</div>

        <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 bg-clip-text text-transparent">
          Our Beautiful Memories
        </h2>

        <div className="mb-6 w-full max-w-sm sm:max-w-md rounded-2xl bg-gradient-to-r from-pink-200 to-rose-200 p-4 sm:p-5 md:p-7 flex flex-col items-center shadow-inner">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-pink-300/60 blur-md opacity-60" />
            <img
              src={memoryImage}
              alt="Our beautiful memory"
              className="relative h-28 w-28 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 rounded-full object-cover shadow-lg ring-4 ring-white/80"
            />
          </div>
          <p className="mt-3 text-center text-xs sm:text-sm text-gray-700 italic max-w-xs">
            Every moment with you becomes a cherished memory.
          </p>
        </div>

        <p className="mb-6 max-w-xl text-xs sm:text-sm md:text-base text-gray-700 mx-auto leading-relaxed">
          I&apos;ll never forget our late-night conversations, the way we can
          talk for hours about everything and nothing. The inside jokes, the
          shared laughter, the comfort of just being together – these are the
          moments I treasure most. 💗
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <SecondaryButton onClick={prev}>Back</SecondaryButton>
          <PrimaryButton onClick={next}>Final Wish 🎂</PrimaryButton>
        </div>
      </div>
    </StepCard>
  );
};

export default StepFourMemory;
