import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const RotatingBox = () => {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.01; // Rotate continuously
    ref.current.rotation.x += 0.01;
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="royalblue" />
    </mesh>
  );
};

const ThreeScene = () => {
  return (
    <Canvas camera={{ position: [5, 5, 5] }}>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* 3D Rotating Cube */}
      <RotatingBox />

      {/* Enable Orbit Controls */}
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeScene;
