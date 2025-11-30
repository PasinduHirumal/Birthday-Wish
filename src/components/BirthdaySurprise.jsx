import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import confetti from "canvas-confetti";

const StepCard = ({ children, className = "" }) => (
  <div
    className={`
      mx-auto w-full 
      max-w-md sm:max-w-2xl lg:max-w-3xl 
      rounded-3xl bg-white/60 
      p-5 sm:p-8 md:p-10 
      text-center shadow-xl backdrop-blur-xl 
      transition-all duration-700
      ${className}
    `}
  >
    {children}
  </div>
);

const PrimaryButton = ({ children, className = "", ...props }) => (
  <button
    type="button"
    {...props}
    className={`
      mt-2 inline-flex items-center justify-center 
      rounded-full bg-gradient-to-r from-pink-500 to-rose-500 
      px-6 py-3 text-sm sm:text-base font-semibold 
      text-white shadow-lg shadow-pink-400/40 
      transition-all duration-200 
      hover:-translate-y-0.5 hover:shadow-xl 
      active:translate-y-0 active:shadow-lg 
      ${className}
    `}
  >
    {children}
  </button>
);

const SecondaryButton = ({ children, className = "", ...props }) => (
  <button
    type="button"
    {...props}
    className={`
      mt-3 inline-flex items-center justify-center 
      rounded-full bg-white/70 
      px-5 py-2 text-sm sm:text-base font-medium 
      text-pink-600 shadow-md shadow-pink-200 
      transition-all duration-200 
      hover:-translate-y-0.5 hover:shadow-lg
      active:translate-y-0 
      ${className}
    `}
  >
    {children}
  </button>
);

const ReasonCard = ({ emoji, title, children }) => (
  <div className="flex flex-col items-center rounded-2xl bg-white p-4 sm:p-5 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
    <div className="mb-2 text-2xl sm:text-3xl">{emoji}</div>
    <h3 className="mb-1 text-base sm:text-lg font-bold text-pink-600 text-center">
      {title}
    </h3>
    <p className="text-center text-xs sm:text-sm text-gray-700">{children}</p>
  </div>
);

/* ============ Steps ============ */

const StepOneIntro = ({ next }) => (
  <StepCard>
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 text-4xl sm:text-5xl md:text-6xl animate-pulse">
        ❤️
      </div>

      <h1 className="mb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 bg-clip-text text-transparent">
        Hey Beautiful
      </h1>

      <p className="mb-6 max-w-xl text-sm sm:text-base md:text-lg text-gray-700 mx-auto leading-relaxed">
        I made something special just for you, filled with all our beautiful
        memories. Take a deep breath, relax, and let me walk you through it. 💖
      </p>

      <PrimaryButton onClick={next}>Let&apos;s Begin</PrimaryButton>
    </div>
  </StepCard>
);

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

/* ============ Main Component ============ */

const TOTAL_STEPS = 5;

const BirthdaySurprise = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const canvasContainerRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const heartsRef = useRef([]);
  const heartGeometryRef = useRef(null);
  const animationIdRef = useRef(null);

  const progress = ((currentStep - 1) / (TOTAL_STEPS - 1)) * 100;

  // Three.js background (runs once, cleanly)
  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 30;
    cameraRef.current = camera;

    // Heart geometry
    const createHeartGeometry = () => {
      const x = 0;
      const y = 0;
      const shape = new THREE.Shape();

      shape.moveTo(x + 0.5, y + 0.5);
      shape.bezierCurveTo(x + 0.5, y + 0.5, x + 1, y, x, y);
      shape.bezierCurveTo(x - 1, y, x - 1, y + 1.5, x - 1, y + 1.5);
      shape.bezierCurveTo(x - 1, y + 2.5, x + 0.5, y + 3.5, x + 0.5, y + 3.5);
      shape.bezierCurveTo(x + 0.5, y + 3.5, x + 2, y + 2.5, x + 2, y + 1.5);
      shape.bezierCurveTo(x + 2, y + 1.5, x + 2, y, x + 1, y);
      shape.bezierCurveTo(x + 0.5, y, x + 0.5, y + 0.5, x + 0.5, y + 0.5);

      const extrudeSettings = {
        depth: 0.5,
        bevelEnabled: true,
        bevelSegments: 3,
        bevelSize: 0.2,
        bevelThickness: 0.3,
      };

      return new THREE.ExtrudeGeometry(shape, extrudeSettings);
    };

    const geometry = createHeartGeometry();
    heartGeometryRef.current = geometry;

    const hearts = [];
    const colors = [
      0xff6b6b, 0xff8e8e, 0xffb3b3, 0xffd8d8, 0xff9e9e, 0xffc1c1, 0xff6b8e,
      0xff8eb3, 0xff69b4, 0xff1493, 0xffc0cb, 0xffb6c1,
    ];

    for (let i = 0; i < 30; i++) {
      const material = new THREE.MeshPhongMaterial({
        color: colors[Math.floor(Math.random() * colors.length)],
        emissive: 0xaa0000,
        emissiveIntensity: 0.1,
        transparent: true,
        opacity: 0.8 + Math.random() * 0.2,
      });

      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.x = (Math.random() - 0.5) * 60;
      mesh.position.y = (Math.random() - 0.5) * 60;
      mesh.position.z = (Math.random() - 0.5) * 50;

      const scale = Math.random() * 0.8 + 0.4;
      mesh.scale.set(scale, scale, scale);

      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;

      mesh.userData = {
        originalX: mesh.position.x,
        originalY: mesh.position.y,
        originalZ: mesh.position.z,
        speedX: Math.random() * 0.02 - 0.01,
        speedY: Math.random() * 0.02 - 0.01,
        speedZ: Math.random() * 0.02 - 0.01,
        rotationSpeedX: Math.random() * 0.01,
        rotationSpeedY: Math.random() * 0.01,
        floatDistance: 2 + Math.random() * 4,
        floatSpeed: 0.5 + Math.random() * 1,
      };

      scene.add(mesh);
      hearts.push(mesh);
    }

    heartsRef.current = hearts;

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    const backLight = new THREE.DirectionalLight(0xffe6f2, 0.4);
    backLight.position.set(-1, -1, -1);
    scene.add(backLight);

    // Animation loop
    const animate = () => {
      const time = Date.now() * 0.001;

      heartsRef.current.forEach((heart) => {
        const data = heart.userData;
        heart.position.x =
          data.originalX +
          Math.sin(time * data.speedX * 10) * data.floatDistance;
        heart.position.y =
          data.originalY +
          Math.sin(time * data.speedY * 10 + data.floatSpeed) *
            data.floatDistance;
        heart.position.z =
          data.originalZ +
          Math.sin(time * data.speedZ * 10 + data.floatSpeed * 2) *
            data.floatDistance;

        heart.rotation.x += data.rotationSpeedX;
        heart.rotation.y += data.rotationSpeedY;

        // gentle float
        heart.position.y += Math.sin(time * data.floatSpeed) * 0.1;
      });

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container || !rendererRef.current || !cameraRef.current) return;

      const width = container.clientWidth;
      const height = container.clientHeight;

      rendererRef.current.setSize(width, height);
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }

      heartsRef.current.forEach((heart) => {
        if (sceneRef.current) sceneRef.current.remove(heart);
        if (heart.material) {
          heart.material.dispose();
        }
      });
      heartsRef.current = [];

      if (heartGeometryRef.current) {
        heartGeometryRef.current.dispose();
        heartGeometryRef.current = null;
      }

      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (rendererRef.current.domElement && container.contains(rendererRef.current.domElement)) {
          container.removeChild(rendererRef.current.domElement);
        }
        rendererRef.current = null;
      }

      sceneRef.current = null;
      cameraRef.current = null;
    };
  }, []);

  const handleConfetti = () => {
    // First burst
    confetti({
      particleCount: 200,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#ff0000", "#ff69b4", "#ff1493", "#ffc0cb", "#ff6b6b"],
    });

    // Second burst with hearts
    setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 60,
        shapes: ["heart"],
        colors: ["#ff69b4", "#ff1493"],
      });
    }, 300);

    // Third burst
    setTimeout(() => {
      confetti({
        particleCount: 150,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#ff6b6b", "#ff8e8e", "#ffb3b3"],
      });
    }, 500);

    // Fourth burst
    setTimeout(() => {
      confetti({
        particleCount: 150,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#ff69b4", "#ff1493", "#ffc0cb"],
      });
    }, 700);

    // Animate hearts flying up & fading
    if (heartsRef.current.length > 0) {
      heartsRef.current.forEach((heart, index) => {
        gsap.to(heart.position, {
          y: heart.position.y - 40 - Math.random() * 20,
          duration: 4 + Math.random() * 2,
          delay: index * 0.05,
          ease: "power2.out",
        });

        gsap.to(heart.material, {
          opacity: 0,
          duration: 3 + Math.random() * 2,
          delay: index * 0.05,
          onComplete: () => {
            // Reset heart after the celebration
            if (!heart.userData) return;
            heart.position.x = heart.userData.originalX;
            heart.position.y = heart.userData.originalY;
            heart.position.z = heart.userData.originalZ;
            heart.material.opacity = 0.8 + Math.random() * 0.2;
          },
        });
      });
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOneIntro next={() => setCurrentStep(2)} />;
      case 2:
        return (
          <StepTwoWish
            prev={() => setCurrentStep(1)}
            next={() => setCurrentStep(3)}
          />
        );
      case 3:
        return (
          <StepThreeReasons
            prev={() => setCurrentStep(2)}
            next={() => setCurrentStep(4)}
          />
        );
      case 4:
        return (
          <StepFourMemory
            prev={() => setCurrentStep(3)}
            next={() => setCurrentStep(5)}
          />
        );
      case 5:
        return (
          <StepFiveFinal
            prev={() => setCurrentStep(4)}
            celebrate={handleConfetti}
          />
        );
      default:
        return <StepOneIntro next={() => setCurrentStep(2)} />;
    }
  };

  return (
    <div
      className="
        relative min-h-screen w-full 
        overflow-x-hidden 
        bg-gradient-to-br from-pink-300 via-rose-100 to-violet-100
      "
    >
      {/* Three.js canvas background */}
      <div
        ref={canvasContainerRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

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
        <div className="w-full max-w-4xl">{renderCurrentStep()}</div>
      </div>
    </div>
  );
};

export default BirthdaySurprise;
