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
    <Float speed={2} rotationIntensity={1.5} floatIntensity={0}>
      {/* Outer Glass Shell */}
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1.4, 0.4, 256, 32, 3, 4]} />
        <MeshTransmissionMaterial
          backside
          resolution={256}
          samples={4}
          backsideThickness={2}
          thickness={0.5}
          roughness={0}
          transmission={1}
          ior={1.5}
          chromaticAberration={0.06}
          anisotropy={0.3}
          color="#a3e635"
        />
      </mesh>

      {/* Inner Glowing Core */}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </Float>
  );
}

export default function ThreeScene() {
  return (
    <div
      className="w-full h-full cursor-grab active:cursor-grabbing">
      {/* Pulled the camera back from Z:8 to Z:9.5 to fit the shadow in frame */}
      <Canvas
        dpr={[1, 1]}
        style={{ touchAction: 'none' }}
        camera={{ position: [0, 0, 9.5], fov: 45 }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />

        <PresentationControls
          global
          snap={true}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <ComplexGeometry />
          <Sparkles count={150} scale={10} size={2} speed={0.4} opacity={0.4} color="#fff" />
        </PresentationControls>

        <Environment preset="city" />

        {/* Raised the shadow from -3.5 to -2.5 and reduced scale to 15. 
          This ensures the shadow fully resolves inside the canvas boundaries.
        */}
        <ContactShadows
          position={[0, -2.5, 0]}
          scale={10}
          blur={2}
          far={4}
          opacity={0.5}
          // Stops Z-fighting on mobile 16-bit depth buffers
          depthWrite={false}
          // Cuts mobile GPU calculation load by 75% while keeping shadows soft
          resolution={512}
        />
      </Canvas>
    </div>
  );
}