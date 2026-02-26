import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function Verify() {

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
    backgroundColor: "#ffffff",
    width: "100%",
    maxWidth: "480px",
    borderRadius: "14px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
    padding: "35px",
  };

  const headingStyle = {
    marginBottom: "25px",
    fontSize: "22px",
    fontWeight: "600",
    color: "#1e293b",
    textAlign: "center",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    fontSize: "14px",
    outline: "none",
    marginBottom: "20px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
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
          <h1 style={headingStyle}>Verify Document</h1>
          <input
            type="text"
            placeholder="Enter Document ID"
            style={inputStyle}
          />
          <button
            style={buttonStyle}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Verify
          </button>
        </div>
      </div>
    </>
  );
}