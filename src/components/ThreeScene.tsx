// src/components/ThreeScene.tsx
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  MeshTransmissionMaterial,
  PresentationControls,
  Sparkles,
  ContactShadows,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function ComplexGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Rotate the geometry slowly every frame
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      {/* Outer Glass Shell */}
      <mesh ref={meshRef}>
        {/* TorusKnot: radius, tube, tubularSegments, radialSegments, p, q */}
        <torusKnotGeometry args={[1.4, 0.4, 256, 32, 3, 4]} />
        <MeshTransmissionMaterial
          backside
          backsideThickness={2}
          thickness={0.5}
          roughness={0}
          transmission={1}
          ior={1.5}
          chromaticAberration={0.15}
          anisotropy={0.3}
          color="#a3e635" // DaisyUI's primary-ish color, tweak as needed
        />
      </mesh>

      {/* Inner Glowing Core */}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        {/* Using a basic material so it ignores lighting and looks self-illuminated */}
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </Float>
  );
}

export default function ThreeScene() {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      {/* The Canvas creates the WebGL context */}
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />

        {/* PresentationControls allows the user to click and drag the scene */}
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <ComplexGeometry />

          {/* Add some ambient floating dust */}
          <Sparkles count={150} scale={10} size={2} speed={0.4} opacity={0.4} color="#fff" />
        </PresentationControls>

        {/* Environment map is required for glass materials to reflect something */}
        <Environment preset="city" />

        {/* Fake soft shadow baked onto a plane below the object */}
        <ContactShadows position={[0, -3.5, 0]} opacity={0.7} scale={20} blur={2.5} far={4.5} />
      </Canvas>
    </div>
  );
}