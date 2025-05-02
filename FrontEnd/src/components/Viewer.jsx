import React, { useEffect, useState } from "react";
import { getModels } from "../../api.js";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "../styles/Viewer.css";

const ModelItem = ({ url }) => {
  const [gltf, setGltf] = useState();

  useEffect(() => {
    new GLTFLoader().load(url, setGltf);
  }, [url]);

  return gltf ? <primitive object={gltf.scene} scale={1.5} /> : null;
};

const Viewer = () => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    async function fetchData() {
      const res = await getModels();
      setModels(res.data);
      setLoading(false); 
    }
    fetchData();
  }, []);

  return (
    <div className="viewer-container">
      <h2 className="viewer-title">3D Models</h2>

      {loading ? (
        <div className="loading-container">Loading models...</div>
      ) : models.length === 0 ? (
        <div className="empty-container">No models available.</div>
      ) : (
        models.length>0 && models.map((model) => (
          <div className="model-wrapper" key={model._id}>
            <Canvas style={{ height: "400px" }}>
              <ambientLight />
              <directionalLight position={[0, 0, 5]} />
              <OrbitControls />
              <Environment preset="sunset" />
              <ModelItem url={`http://localhost:5000/${model.filepath}`} />
            </Canvas>
          </div>
        ))
      )}
    </div>
  );
};


export default Viewer;
