import React, { useState } from "react";
import "../styles/DashBoard.css";
import {uploadModel} from "../../api";

const DashBoard = () => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");
  
    const allowedExtension = ".glb";
    const fileName = file.name.toLowerCase();
  
    if (!fileName.endsWith(allowedExtension)) {
      return alert("Only .glb files are allowed");
    }
  
    const formData = new FormData();
    formData.append("model", file);
  
    try {
      await uploadModel(formData); 
      alert("Model uploaded!");
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed. Please try again.");
    }
  };
  
  return (
    <div className="dashboard-container">
      <div className="card">
        <h2>Upload 3D Model (.glb)</h2>
        <input
          type="file"
          accept=".glb"
          onChange={(e) => setFile(e.target.files[0])}
          className="file-input"
        />
        <button onClick={handleUpload} className="upload-button">
          Upload
        </button>
      </div>
    </div>
  );
};

export default DashBoard;
