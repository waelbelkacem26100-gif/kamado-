"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const cityPoints = [
  { lat: 48.8566,   lon: 2.3522,    label: "Paris" },
  { lat: 45.7640,   lon: 4.8357,    label: "Lyon" },
  { lat: 45.05,     lon: 5.05,      label: "Romans-sur-Isère" },
  { lat: 43.2965,   lon: 5.3698,    label: "Marseille" },
  { lat: 44.8378,   lon: -0.5792,   label: "Bordeaux" },
  { lat: 50.6292,   lon: 3.0573,    label: "Lille" },
  { lat: 50.8503,   lon: 4.3517,    label: "Bruxelles" },
  { lat: 51.5074,   lon: -0.1278,   label: "Londres" },
  { lat: 46.2044,   lon: 6.1432,    label: "Genève" },
  { lat: 40.7128,   lon: -74.0060,  label: "New York" },
  { lat: -33.8688,  lon: 151.2093,  label: "Sydney" },
  { lat: 35.6762,   lon: 139.6503,  label: "Tokyo" },
  { lat: 19.4326,   lon: -99.1332,  label: "Mexico" },
  { lat: -23.5505,  lon: -46.6333,  label: "São Paulo" },
  { lat: 1.3521,    lon: 103.8198,  label: "Singapour" },
];

function toVec3(lat: number, lon: number, r: number): [number, number, number] {
  const phi   = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return [
    -r * Math.sin(phi) * Math.cos(theta),
     r * Math.cos(phi),
     r * Math.sin(phi) * Math.sin(theta),
  ];
}

function Earth() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.y += 0.0018;
  });

  return (
    <group ref={meshRef}>
      {/* Atmosphère extérieure */}
      <Sphere args={[2.18, 32, 32]}>
        <meshBasicMaterial color="#00ff87" opacity={0.04} transparent side={THREE.BackSide} />
      </Sphere>

      {/* Globe principal */}
      <Sphere args={[2, 64, 64]}>
        <meshStandardMaterial
          color="#0a1f2e"
          roughness={0.6}
          metalness={0.4}
          emissive="#001a0f"
          emissiveIntensity={0.4}
        />
      </Sphere>

      {/* Wireframe continents cyan */}
      <Sphere args={[2.01, 22, 22]}>
        <meshBasicMaterial color="#00ff87" wireframe opacity={0.07} transparent />
      </Sphere>

      {/* Points de villes */}
      {cityPoints.map((c) => {
        const [x, y, z] = toVec3(c.lat, c.lon, 2.06);
        const isHome = c.label === "Romans-sur-Isère";
        return (
          <mesh key={c.label} position={[x, y, z]}>
            <sphereGeometry args={[isHome ? 0.035 : 0.022, 8, 8]} />
            <meshBasicMaterial color={isHome ? "#00ff87" : "#ffffff"} />
          </mesh>
        );
      })}
    </group>
  );
}

export default function GlobeCanvas() {
  return (
    <Canvas camera={{ position: [0, 0.5, 5.5], fov: 42 }} style={{ background: "transparent" }}>
      <ambientLight intensity={0.25} />
      <pointLight position={[6, 6, 6]} color="#00ff87" intensity={5} />
      <pointLight position={[-6, -4, -6]} color="#4466ff" intensity={1.5} />
      <Earth />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI * 2 / 3}
      />
    </Canvas>
  );
}
