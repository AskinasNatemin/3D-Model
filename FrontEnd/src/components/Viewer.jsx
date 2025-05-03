import React, { useEffect, useState } from "react";
import { getModels } from "../../api.js";
import LazyModel from "./LazyModel";
import "../styles/Viewer.css";

const Viewer = () => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_BASE = import.meta.env.VITE_SERVER_APP_URL;

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getModels();
        setModels(res.data);
      } catch (error) {
        console.error("Failed to load models:", error);
      } finally {
        setLoading(false);
      }
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
        models.map((model) => (
          <div className="model-wrapper" key={model._id}>
            <LazyModel url={`${API_BASE}/${model.filepath}`} />
          </div>
        ))
      )}
    </div>
  );
};

export default Viewer;
