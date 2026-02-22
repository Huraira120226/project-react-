import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

export default function Landing() {

  const [hovered, setHovered] = useState(null);

  const boxStyle = (index) => ({
    padding: "20px",
    border: "4px solid #255cf3",
    borderRadius: "8px",
    width: "200px",
    background: hovered === index 
      ? "linear-gradient(135deg, #d3d3d3, #003ada)" // grey to blue gradient
      : "white",
    color: hovered === index ? "white" : "#003ada",
    cursor: "pointer",
    transition: "0.3s ease"
  });

  const headingStyle = {
    color: "inherit"
  };

  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h1 style={{ color: "#003ada" }}>
          Encrypted Document Shairing and Using Blockchain
        </h1>

        <p style={{ color: "#000000", fontSize: "18px", margin: "20px 0" }}>
          Securely upload, verify, and share documents
        </p>

        <div style={{ marginTop: "30px" }}>
          <Link to="/login">
            <button style={{ marginRight: "15px" }}>Login</button>
          </Link>
          <Link to="/signup">
            <button>Signup</button>
          </Link>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px", gap: "20px" }}>
          
          <div
            style={boxStyle(1)}
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(null)}
          >
            <h3 style={headingStyle}>Encryption</h3>
            <p>Secure your documents easily</p>
          </div>

          <div
            style={boxStyle(2)}
            onMouseEnter={() => setHovered(2)}
            onMouseLeave={() => setHovered(null)}
          >
            <h3 style={headingStyle}>Verification</h3>
            <p>Authenticate documents instantly</p>
          </div>

          <div
            style={boxStyle(3)}
            onMouseEnter={() => setHovered(3)}
            onMouseLeave={() => setHovered(null)}
          >
            <h3 style={headingStyle}>Secure Sharing</h3>
            <p>Share with confidence</p>
          </div>

        </div>
      </div>
    </>
  );
}