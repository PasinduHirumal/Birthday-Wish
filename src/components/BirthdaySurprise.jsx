import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import confetti from "canvas-confetti";

import StepCard from "./StepCard";
import PrimaryButton from "./PrimaryButton";
import ReasonCard from "./ReasonCard";

import StepOneIntro from "./steps/StepOneIntro";
import StepTwoWish from "./steps/StepTwoWish";
import StepThreeReasons from "./steps/StepThreeReasons";
import StepFourMemory from "./steps/StepFourMemory";
import StepFiveFinal from "./steps/StepFiveFinal";

const TOTAL_STEPS = 5;

const BirthdaySurprise = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const canvasContainerRef = useRef(null);

  // Three.js refs
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const heartsRef = useRef([]);
  const animationIdRef = useRef(null);

  const progress = ((currentStep - 1) / (TOTAL_STEPS - 1)) * 100;

  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Scene & Camera
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

    // Heart shape
    const x = 0;
    const y = 0;

    const heartShape = new THREE.Shape();
    heartShape.moveTo(x + 0.5, y + 0.5);
    heartShape.bezierCurveTo(x + 0.5, y + 0.5, x + 1, y, x, y);
    heartShape.bezierCurveTo(x - 1, y, x - 1, y + 1.5, x - 1, y + 1.5);
    heartShape.bezierCurveTo(x - 1, y + 2.5, x + 0.5, y + 3.5, x + 0.5, y + 3.5);
    heartShape.bezierCurveTo(x + 0.5, y + 3.5, x + 2, y + 2.5, x + 2, y + 1.5);
    heartShape.bezierCurveTo(x + 2, y + 1.5, x + 2, y, x + 1, y);
    heartShape.bezierCurveTo(x + 0.5, y, x + 0.5, y + 0.5, x + 0.5, y + 0.5);

    const extrudeSettings = {
      depth: 0.5,
      bevelEnabled: true,
      bevelSegments: 3,
      bevelSize: 0.2,
      bevelThickness: 0.3,
    };

    const heartGeometry = new THREE.ExtrudeGeometry(
      heartShape,
      extrudeSettings
    );

    const hearts = [];
    const colors = [
      0xff6b6b,
      0xff8e8e,
      0xffb3b3,
      0xffd8d8,
      0xff9e9e,
      0xffc1c1,
      0xff6b8e,
      0xff8eb3,
    ];

    for (let i = 0; i < 25; i++) {
      const material = new THREE.MeshPhongMaterial({
        color: colors[Math.floor(Math.random() * colors.length)],
        emissive: 0xff0000,
        emissiveIntensity: 0.1,
        shininess: 100,
        transparent: true,
        opacity: 0.9,
      });

      const heart = new THREE.Mesh(heartGeometry, material);

      // Random position
      heart.position.x = (Math.random() - 0.5) * 50;
      heart.position.y = (Math.random() - 0.5) * 50;
      heart.position.z = (Math.random() - 0.5) * 50;

      // Random scale
      const scale = Math.random() * 0.8 + 0.5;
      heart.scale.set(scale, scale, scale);

      // Random rotation
      heart.rotation.x = Math.random() * Math.PI;
      heart.rotation.y = Math.random() * Math.PI;

      heart.userData = {
        speedX: Math.random() * 0.02 - 0.01,
        speedY: Math.random() * 0.02 - 0.01,
        speedZ: Math.random() * 0.02 - 0.01,
        rotationSpeedX: Math.random() * 0.01,
        rotationSpeedY: Math.random() * 0.01,
        originalX: heart.position.x,
        originalY: heart.position.y,
        originalZ: heart.position.z,
        floatDistance: 2 + Math.random() * 3,
      };

      scene.add(heart);
      hearts.push(heart);
    }

    heartsRef.current = hearts;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Animation loop
    const animate = () => {
      const time = Date.now() * 0.001;

      heartsRef.current.forEach((heart) => {
        const d = heart.userData;

        heart.position.x =
          d.originalX + Math.sin(time * d.speedX * 10) * d.floatDistance;
        heart.position.y =
          d.originalY + Math.sin(time * d.speedY * 10) * d.floatDistance;
        heart.position.z =
          d.originalZ + Math.sin(time * d.speedZ * 10) * d.floatDistance;

        heart.rotation.x += d.rotationSpeedX;
        heart.rotation.y += d.rotationSpeedY;
      });

      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container || !cameraRef.current || !rendererRef.current) return;
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
        heart.geometry.dispose();
        if (Array.isArray(heart.material)) {
          heart.material.forEach((m) => m.dispose());
        } else {
          heart.material.dispose();
        }
        scene.remove(heart);
      });

      heartsRef.current = [];

      heartGeometry.dispose();

      if (rendererRef.current) {
        rendererRef.current.dispose();
      }

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  const goToStep = (step) => {
    setCurrentStep(step);
  };

  const handleConfetti = () => {
    // main burst
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ff0000", "#ff69b4", "#ff1493", "#ffc0cb"],
    });

    // heart shapes
    setTimeout(() => {
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.5 },
        shapes: ["heart"],
        colors: ["#ff0000", "#ff69b4"],
      });
    }, 300);

    // side hearts
    setTimeout(() => {
      confetti({
        particleCount: 20,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        shapes: ["heart"],
        colors: ["#ff0000", "#ff69b4"],
      });

      confetti({
        particleCount: 20,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        shapes: ["heart"],
        colors: ["#ff0000", "#ff69b4"],
      });
    }, 600);

    // Animate hearts flying + fading
    heartsRef.current.forEach((heart) => {
      gsap.to(heart.position, {
        y: heart.position.y - 30,
        duration: 3,
        ease: "power1.out",
      });

      gsap.to(heart.material, {
        opacity: 0,
        duration: 3,
        ease: "power1.out",
      });
    });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-pink-300 via-rose-100 to-violet-100 font-sans">
      {/* Three.js background */}
      <div
        ref={canvasContainerRef}
        className="pointer-events-none absolute inset-0 z-0"
      />

      {/* Progress bar */}
      <div className="absolute left-1/2 top-4 z-20 w-11/12 max-w-md -translate-x-1/2">
        <div className="h-1.5 w-full rounded-full bg-white/40">
          <div
            className="h-full rounded-full bg-gradient-to-r from-pink-500 to-rose-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-4 py-6">
        <div className="w-full max-w-3xl">
          {currentStep === 1 && <StepOneIntro goToStep={goToStep} />}
          {currentStep === 2 && <StepTwoWish goToStep={goToStep} />}
          {currentStep === 3 && (
            <StepThreeReasons
              goToStep={goToStep}
              ReasonCard={ReasonCard}
              PrimaryButton={PrimaryButton}
              StepCard={StepCard}
            />
          )}
          {currentStep === 4 && <StepFourMemory goToStep={goToStep} />}
          {currentStep === 5 && (
            <StepFiveFinal onCelebrate={handleConfetti} />
          )}
        </div>
      </div>
    </div>
  );
};

export default BirthdaySurprise;
