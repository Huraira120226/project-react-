import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

export default function Landing() {

  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredBtn, setHoveredBtn] = useState(null);

  const boxStyle = (index) => ({
    padding: "20px",
    border: "4px solid #2563EB",
    borderRadius: "8px",
    width: "200px",
    backgroundColor: hoveredCard === index ? "#2563EB" : "white",
    color: hoveredCard === index ? "white" : "#2563EB",
    cursor: "pointer",
    transition: "all 0.3s ease",
    transform: hoveredCard === index ? "translateY(-8px)" : "translateY(0)",
    boxShadow: hoveredCard === index
      ? "0 15px 30px rgba(37, 99, 235, 0.25)"
      : "none"
  });

  const buttonStyle = (index) => ({
    padding: "10px 25px",
    border: "2px solid #2563EB",
    borderRadius: "6px",
    backgroundColor: hoveredBtn === index ? "#2563EB" : "white",
    color: hoveredBtn === index ? "white" : "#2563EB",
    cursor: "pointer",
    fontSize: "16px",
    transition: "all 0.3s ease",
    transform: hoveredBtn === index ? "translateY(-4px)" : "translateY(0)",
    boxShadow: hoveredBtn === index
      ? "0 8px 20px rgba(37, 99, 235, 0.35)"
      : "none"
  });

  return (
    <>
      <Navbar />
      <div 
        style={{ 
          textAlign: "center", 
          padding: "50px",
          backgroundColor: "#F1F5F9",   // ✅ background added
          minHeight: "100vh"
        }}
      >
        
        <h1 style={{ color: "#1D4ED8" }}>
          Encrypted Document Sharing and Using Blockchain
        </h1>

        <p style={{ color: "#475569", fontSize: "18px", margin: "20px 0" }}>
          Securely upload, verify, and share documents
        </p>

        <div style={{ marginTop: "30px" }}>
          <Link to="/login">
            <button
              style={{ ...buttonStyle(1), marginRight: "15px" }}
              onMouseEnter={() => setHoveredBtn(1)}
              onMouseLeave={() => setHoveredBtn(null)}
            >
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button
              style={buttonStyle(2)}
              onMouseEnter={() => setHoveredBtn(2)}
              onMouseLeave={() => setHoveredBtn(null)}
            >
              Signup
            </button>
          </Link>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px", gap: "20px" }}>
          
          <div
            style={boxStyle(1)}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h3>Encryption</h3>
            <p>Secure your documents easily</p>
          </div>

          <div
            style={boxStyle(2)}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h3>Verification</h3>
            <p>Authenticate documents instantly</p>
          </div>

          <div
            style={boxStyle(3)}
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h3>Secure Sharing</h3>
            <p>Share with confidence</p>
          </div>

        </div>
      </div>
    </>
  );
}