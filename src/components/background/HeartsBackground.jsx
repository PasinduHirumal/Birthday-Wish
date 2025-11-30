import React, {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import * as THREE from "three";
import { gsap } from "gsap";

const HeartsBackground = forwardRef((props, ref) => {
  const canvasContainerRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const heartsRef = useRef([]);
  const heartGeometryRef = useRef(null);
  const animationIdRef = useRef(null);

  // Expose celebrateHearts method to parent
  useImperativeHandle(ref, () => ({
    celebrateHearts: () => {
      if (!heartsRef.current.length) return;

      heartsRef.current.forEach((heart, index) => {
        const data = heart.userData;
        if (!data) return;

        // Fly up
        gsap.to(heart.position, {
          y: heart.position.y - 40 - Math.random() * 20,
          duration: 4 + Math.random() * 2,
          delay: index * 0.05,
          ease: "power2.out",
        });

        // Fade out, then reset
        gsap.to(heart.material, {
          opacity: 0,
          duration: 3 + Math.random() * 2,
          delay: index * 0.05,
          onComplete: () => {
            heart.position.x = data.originalX;
            heart.position.y = data.originalY;
            heart.position.z = data.originalZ;
            heart.material.opacity = 0.8 + Math.random() * 0.2;
          },
        });
      });
    },
  }));

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

    const handleResize = () => {
      if (!container || !rendererRef.current || !cameraRef.current) return;

      const width = container.clientWidth;
      const height = container.clientHeight;

      rendererRef.current.setSize(width, height);
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);

      heartsRef.current.forEach((heart) => {
        if (sceneRef.current) sceneRef.current.remove(heart);
        if (heart.material) heart.material.dispose();
      });
      heartsRef.current = [];

      if (heartGeometryRef.current) {
        heartGeometryRef.current.dispose();
        heartGeometryRef.current = null;
      }

      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (
          rendererRef.current.domElement &&
          container.contains(rendererRef.current.domElement)
        ) {
          container.removeChild(rendererRef.current.domElement);
        }
        rendererRef.current = null;
      }

      sceneRef.current = null;
      cameraRef.current = null;
    };
  }, []);

  return (
    <div
      ref={canvasContainerRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
});

export default HeartsBackground;
