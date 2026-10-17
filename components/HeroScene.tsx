"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function KnotShape() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.15;
      mesh.current.rotation.y += delta * 0.2;
    }
  });
  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.4}>
      <mesh ref={mesh}>
        <torusKnotGeometry args={[1.1, 0.32, 220, 32]} />
        <meshPhysicalMaterial
          color="#00e5ff"
          emissive="#0088ff"
          emissiveIntensity={0.6}
          roughness={0.15}
          metalness={0.8}
          transmission={0.35}
          thickness={1.2}
        />
      </mesh>
    </Float>
  );
}

function FloatingOcta({ position, color }: { position: [number, number, number]; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.3;
  });
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={ref} position={position}>
        <octahedronGeometry args={[0.35, 0]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.9} />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <div className="canvas-layer">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
        <color attach="background" args={["#050814"]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 3, 3]} intensity={1.2} color="#00e5ff" />
        <pointLight position={[-3, -2, 2]} intensity={1.5} color="#00ff88" />
        <KnotShape />
        <FloatingOcta position={[-2.2, 1.4, 0]} color="#00ff88" />
        <FloatingOcta position={[2.3, -1.2, 0.4]} color="#0088ff" />
        <FloatingOcta position={[2.1, 1.6, -0.6]} color="#00e5ff" />
        <Sparkles count={120} scale={8} size={1.6} color="#00e5ff" speed={0.4} />
        <Stars radius={60} depth={40} count={2000} factor={3} fade speed={0.6} />
      </Canvas>
    </div>
  );
}
