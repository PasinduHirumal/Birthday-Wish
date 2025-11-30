import React, { useRef, useState } from "react";
import confetti from "canvas-confetti";

import HeartsBackground from "../components/background/HeartsBackground";
import StepOneIntro from "../components/steps/StepOneIntro";
import StepTwoWish from "../components/steps/StepTwoWish";
import StepThreeReasons from "../components/steps/StepThreeReasons";
import StepFourMemory from "../components/steps/StepFourMemory";
import StepFiveFinal from "../components/steps/StepFiveFinal";
import StepTransition from "../common/StepTransition";

const TOTAL_STEPS = 5;

const BirthdaySurprise = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [animKey, setAnimKey] = useState(0);
  const backgroundRef = useRef(null);

  const progress = ((currentStep - 1) / (TOTAL_STEPS - 1)) * 100;

  const nextStep = (step) => {
    setAnimKey((prev) => prev + 1);
    setCurrentStep(step);
  };

  const prevStep = (step) => {
    setAnimKey((prev) => prev + 1);
    setCurrentStep(step);
  };

  const handleCelebrate = () => {
    // Confetti
    confetti({
      particleCount: 200,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#ff0000", "#ff69b4", "#ff1493", "#ffc0cb", "#ff6b6b"],
    });

    setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 60,
        shapes: ["heart"],
        colors: ["#ff69b4", "#ff1493"],
      });
    }, 300);

    if (backgroundRef.current?.celebrateHearts) {
      backgroundRef.current.celebrateHearts();
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOneIntro next={() => nextStep(2)} />;
      case 2:
        return (
          <StepTwoWish prev={() => prevStep(1)} next={() => nextStep(3)} />
        );
      case 3:
        return (
          <StepThreeReasons prev={() => prevStep(2)} next={() => nextStep(4)} />
        );
      case 4:
        return (
          <StepFourMemory prev={() => prevStep(3)} next={() => nextStep(5)} />
        );
      case 5:
        return (
          <StepFiveFinal prev={() => prevStep(4)} celebrate={handleCelebrate} />
        );
      default:
        return <StepOneIntro next={() => nextStep(2)} />;
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-pink-300 via-rose-100 to-violet-100">

      {/* Hearts Background */}
      <HeartsBackground ref={backgroundRef} />

      {/* Progress bar */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 w-11/12 max-w-md">
        <div className="h-1.5 bg-white/40 rounded-full backdrop-blur-sm">
          <div
            className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full transition-all duration-700 ease-out shadow-lg"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-center mt-2 text-xs text-pink-600 font-medium">
          Step {currentStep} of {TOTAL_STEPS}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-3 sm:px-4 pt-16 pb-10 sm:pt-20 sm:pb-16">
        {/* Animated wrapper */}
        <StepTransition trigger={animKey}>
          {renderCurrentStep()}
        </StepTransition>
      </div>
    </div>
  );
};

export default BirthdaySurprise;
