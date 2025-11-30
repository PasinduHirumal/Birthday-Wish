import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import confetti from "canvas-confetti";

import StepOneIntro from "./steps/StepOneIntro";
import StepTwoWish from "./steps/StepTwoWish";
import StepThreeReasons from "./steps/StepThreeReasons";
import StepFourMemory from "./steps/StepFourMemory";
import StepFiveFinal from "./steps/StepFiveFinal";

const TOTAL_STEPS = 5;

const BirthdaySurprise = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const canvasContainerRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const heartsRef = useRef([]);
  const animationIdRef = useRef(null);

  const progress = ((currentStep - 1) / (TOTAL_STEPS - 1)) * 100;

  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setPixelRatio(window.devicePixelRatio || 1);
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

    const x = 0,
      y = 0;

    const shape = new THREE.Shape();
    shape.moveTo(x + 0.5, y + 0.5);
    shape.bezierCurveTo(x + 0.5, y + 0.5, x + 1, y, x, y);
    shape.bezierCurveTo(x - 1, y, x - 1, y + 1.5, x - 1, y + 1.5);
    shape.bezierCurveTo(x - 1, y + 2.5, x + 0.5, y + 3.5, x + 0.5, y + 3.5);
    shape.bezierCurveTo(x + 0.5, y + 3.5, x + 2, y + 2.5, x + 2, y + 1.5);
    shape.bezierCurveTo(x + 2, y + 1.5, x + 2, y, x + 1, y);
    shape.bezierCurveTo(x + 0.5, y, x + 0.5, y + 0.5, x + 0.5, y + 0.5);

    const extrude = {
      depth: 0.5,
      bevelEnabled: true,
      bevelSegments: 3,
      bevelSize: 0.2,
      bevelThickness: 0.3,
    };

    const geometry = new THREE.ExtrudeGeometry(shape, extrude);

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
        emissive: 0xaa0000,
        emissiveIntensity: 0.1,
        transparent: true,
      });

      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.x = (Math.random() - 0.5) * 50;
      mesh.position.y = (Math.random() - 0.5) * 50;
      mesh.position.z = (Math.random() - 0.5) * 50;

      const scale = Math.random() * 0.6 + 0.5;
      mesh.scale.set(scale, scale, scale);

      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;

      mesh.userData = {
        ox: mesh.position.x,
        oy: mesh.position.y,
        oz: mesh.position.z,
        sx: Math.random() * 0.02 - 0.01,
        sy: Math.random() * 0.02 - 0.01,
        sz: Math.random() * 0.02 - 0.01,
        rsx: Math.random() * 0.01,
        rsy: Math.random() * 0.01,
        float: 2 + Math.random() * 3,
      };

      scene.add(mesh);
      hearts.push(mesh);
    }

    heartsRef.current = hearts;
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const dir = new THREE.DirectionalLight(0xffffff, 0.8);
    dir.position.set(1, 1, 1);
    scene.add(dir);

    const animate = () => {
      const t = Date.now() * 0.001;

      heartsRef.current.forEach((h) => {
        const d = h.userData;

        h.position.x = d.ox + Math.sin(t * d.sx * 10) * d.float;
        h.position.y = d.oy + Math.sin(t * d.sy * 10) * d.float;
        h.position.z = d.oz + Math.sin(t * d.sz * 10) * d.float;

        h.rotation.x += d.rsx;
        h.rotation.y += d.rsy;
      });

      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;

      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationIdRef.current);

      heartsRef.current.forEach((h) => {
        h.geometry.dispose();
        h.material.dispose();
        scene.remove(h);
      });

      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  const handleConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ff0000", "#ff69b4", "#ff1493", "#ffc0cb"],
    });

    setTimeout(() => {
      confetti({
        particleCount: 40,
        spread: 60,
        shapes: ["heart"],
      });
    }, 400);

    heartsRef.current.forEach((h) => {
      gsap.to(h.position, { y: h.position.y - 30, duration: 3 });
      gsap.to(h.material, { opacity: 0, duration: 3 });
    });
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
        <div className="h-1.5 bg-white/40 rounded-full">
          <div
            className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-3 sm:px-4 py-10 sm:py-16">
        <div className="w-full max-w-4xl">
          {currentStep === 1 && <StepOneIntro next={() => setCurrentStep(2)} />}

          {currentStep === 2 && (
            <StepTwoWish
              prev={() => setCurrentStep(1)}
              next={() => setCurrentStep(3)}
            />
          )}

          {currentStep === 3 && (
            <StepThreeReasons
              prev={() => setCurrentStep(2)}
              next={() => setCurrentStep(4)}
            />
          )}

          {currentStep === 4 && (
            <StepFourMemory
              prev={() => setCurrentStep(3)}
              next={() => setCurrentStep(5)}
            />
          )}

          {currentStep === 5 && (
            <StepFiveFinal
              prev={() => setCurrentStep(4)}
              celebrate={handleConfetti}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BirthdaySurprise;
