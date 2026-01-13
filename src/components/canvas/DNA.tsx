"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Float } from "@react-three/drei";

export default function DNA() {
  const group = useRef<THREE.Group>(null!);
  
  // Procedural DNA generation
  const { points, connections } = useMemo(() => {
    const count = 40; // Number of base pairs
    const radius = 1.5;
    const height = 15;
    const twists = 2; // Number of full twists
    
    const pts = [];
    const conns = [];
    
    for (let i = 0; i < count; i++) {
      const t = i / (count - 1); // 0 to 1
      const angle = t * Math.PI * 2 * twists;
      const y = (t - 0.5) * height;
      
      // Strand A
      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;
      
      // Strand B (Opposite)
      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;
      
      pts.push(new THREE.Vector3(x1, y, z1));
      pts.push(new THREE.Vector3(x2, y, z2));
      
      // Connection line (Base pair)
      conns.push([i * 2, i * 2 + 1]);
    }
    
    return { points: pts, connections: conns };
  }, []);

  useFrame((state, delta) => {
    // Rotate the DNA
    if (group.current) {
        group.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <group ref={group} rotation={[0, 0, Math.PI / 6]}>
        {/* Render Points (Nucleotides) */}
        {points.map((pos, i) => (
            <mesh key={i} position={pos}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial 
                color={i % 2 === 0 ? "#00ffff" : "#ff00ff"} 
                emissive={i % 2 === 0 ? "#00ffff" : "#ff00ff"}
                emissiveIntensity={2}
            />
            </mesh>
        ))}

        {/* Render Connections (Base Pairs) */}
        {connections.map(([a, b], i) => (
            <line key={`conn-${i}`}>
            <bufferGeometry>
                {/* @ts-ignore */}
                <bufferAttribute
                    attach="attributes-position"
                    count={2}
                    array={new Float32Array([
                        points[a].x, points[a].y, points[a].z,
                        points[b].x, points[b].y, points[b].z
                    ])}
                    itemSize={3}
                />
            </bufferGeometry>
            <lineBasicMaterial color="#ffffff" transparent opacity={0.3} />
            </line>
        ))}
        </group>
    </Float>
  );
}
