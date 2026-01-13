"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Preload } from "@react-three/drei";
import { Suspense } from "react";
import StarField from "./StarField";
import DNA from "./DNA";

export default function Experience() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 2]} // Support high DPI screens
      >
        <color attach="background" args={["#000000"]} />
        
        <Suspense fallback={null}>
            <group>
                <StarField />
                <DNA /> 
            </group>
          <Environment preset="city" />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
