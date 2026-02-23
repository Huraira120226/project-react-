import React, { useState } from "react";
import Navbar from "../../components/Navbar";

export default function Upload() {
  const [hoveredBtn, setHoveredBtn] = useState(false);
  const [hoveredFile, setHoveredFile] = useState(false);

  const commonHoverStyle = (hovered) => ({
    padding: "10px 25px",
    border: "2px solid #255cf3",
    borderRadius: "6px",
    backgroundColor: hovered ? "#255cf3" : "white",
    color: hovered ? "white" : "#000000",
    cursor: "pointer",
    fontSize: "16px",
    transition: "all 0.3s ease",
    transform: hovered ? "translateY(-4px)" : "translateY(0)",
    boxShadow: hovered ? "0 6px 15px rgba(37, 92, 243, 0.4)" : "none",
    display: "inline-block"
  });

  return (
    <>
      <Navbar />
      <div
        style={{
          padding: "50px",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#EEF2FF"
        }}
      >
        {/* Center Card */}
        <div
          style={{
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "12px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            textAlign: "center",
            minWidth: "300px"
          }}
        >
          <h1 style={{ color: "#1D4ED8", marginBottom: "30px" }}>
            Upload Document
          </h1>

          {/* Custom File Input */}
          <label
            style={{ ...commonHoverStyle(hoveredFile), marginBottom: "20px" }}
            onMouseEnter={() => setHoveredFile(true)}
            onMouseLeave={() => setHoveredFile(false)}
          >
            Choose File
            <input type="file" style={{ display: "none" }} />
          </label>

          <br />

          <button
            style={commonHoverStyle(hoveredBtn)}
            onMouseEnter={() => setHoveredBtn(true)}
            onMouseLeave={() => setHoveredBtn(false)}
          >
            Upload
          </button>
        </div>
      </div>
    </>
  );
}