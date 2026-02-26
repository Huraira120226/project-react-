import React, { useState } from "react";
import Navbar from "../../components/Navbar";

export default function Upload() {
  const [hover, setHover] = useState(false);

  const containerStyle = {
    minHeight: "100vh",
    backgroundColor: "#f1f5f9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "520px",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.06)",
    padding: "40px",
  };

  const headingStyle = {
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "25px",
    color: "#1e293b",
  };

  const fileBoxStyle = {
    width: "100%",
    border: "2px dashed #cbd5e1",
    borderRadius: "12px",
    padding: "20px 5px",
    textAlign: "center",
    cursor: "pointer",
    marginBottom: "30px",
    backgroundColor: "#f8fafc",
    transition: "0.3s ease",
    display: "block"
  };

  const buttonStyle = {
    width: "100%",
    padding: "13px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: hover ? "#1d4ed8" : "#2563eb",
    color: "#ffffff",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    transform: hover ? "translateY(-2px)" : "translateY(0)",
    boxShadow: hover
      ? "0 8px 20px rgba(37, 99, 235, 0.3)"
      : "0 4px 10px rgba(0, 0, 0, 0.05)",
  };

  return (
    <>
      <Navbar />
      <div style={containerStyle}>
        <div style={cardStyle}>
          <h1 style={headingStyle}>Upload Document</h1>

          <label style={fileBoxStyle}>
            <div style={{ fontSize: "14px", color: "#475569" }}>
              Click to choose file
            </div>
            <div style={{ fontSize: "12px", color: "#94a3b8", marginTop: "6px" }}>
              PDF, DOC, or Image files
            </div>
          </label>

          {/* Hidden Input Outside Label */}
          <input type="file" style={{ display: "none" }} />

          <button
            style={buttonStyle}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Upload File
          </button>
        </div>
      </div>
    </>
  );
}