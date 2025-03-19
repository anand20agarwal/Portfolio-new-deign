import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const ThreeScene = () => {
  return (
    <Canvas className="canvas">
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <OrbitControls enableZoom={false} />
      {/* Add your Three.js objects here */}
    </Canvas>
  );
};

export default ThreeScene;
