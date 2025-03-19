import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const WaveShader = {
  vertexShader: `
    varying vec2 vUv;
    varying float vWave;

    uniform float uTime;

    void main() {
      vUv = uv;
      vec3 pos = position;
      
      float wave = sin(pos.x * 5.0 + uTime * 2.0) * 0.2;
      pos.z += wave;
      vWave = wave;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    varying float vWave;
    
    void main() {
      vec3 color = mix(vec3(0.1, 0.1, 0.3), vec3(0.8, 0.2, 1.0), vUv.y);
      gl_FragColor = vec4(color, 1.0);
    }
  `,
};

const AnimatedPlane = () => {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.material.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[5, 5, 100, 100]} />
      <shaderMaterial
        attach="material"
        vertexShader={WaveShader.vertexShader}
        fragmentShader={WaveShader.fragmentShader}
        uniforms={{ uTime: { value: 0 } }}
      />
    </mesh>
  );
};

const ThreeBackground = () => {
  return (
    <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[2, 3, 2]} intensity={1} />
      <AnimatedPlane />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default ThreeBackground;
