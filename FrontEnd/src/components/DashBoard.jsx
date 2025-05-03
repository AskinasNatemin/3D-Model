import React, { useState, useRef } from "react";
import "../styles/DashBoard.css";
import { uploadModel } from "../../api";

const DashBoard = () => {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null); 

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

    const fileName = file.name.toLowerCase();
    const allowedExtension = ".glb";

    if (!fileName.endsWith(allowedExtension)) {
      return alert("Only .glb files are allowed");
    }

    const formData = new FormData();
    formData.append("model", file);

    try {
      setIsLoading(true);
      await uploadModel(formData);
      alert("Model uploaded!");
      setFile(null); 
      fileInputRef.current.value = ""; 
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed. Please try again.");
    } finally {
      setIsLoading(false);
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
          ref={fileInputRef} 
        />
        {isLoading ? (
          <div className="spinner"></div>
        ) : (
          <button onClick={handleUpload} className="upload-button">
            Upload
          </button>
        )}
      </div>
    </div>
  );
};
export default DashBoard;
