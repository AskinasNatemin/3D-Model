import React, { Suspense } from "react";
import { useGLTF } from "@react-three/drei";

const ModelItem = ({ url }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={1.5} />;
};

useGLTF.preload = (url) => {
  useGLTF(url);
};

export default ModelItem;
