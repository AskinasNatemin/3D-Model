import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useInView } from "react-intersection-observer";
import { Suspense } from "react";
import ModelItem from "./ModelItem";

const LazyModel = ({ url }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} style={{ height: "400px", marginBottom: "20px" }}>
      {inView && (
        <Canvas style={{ height: "100%" }}>
          <ambientLight />
          <directionalLight position={[0, 0, 5]} />
          <OrbitControls />
          <Environment preset="sunset" />
          <Suspense fallback={null}>
            <ModelItem url={url} />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
};

export default LazyModel;
