import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function Share() {

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
    maxWidth: "500px",
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

  const inputStyle = {
    width: "100%",
    padding: "13px 14px",
    borderRadius: "10px",
    border: "1px solid #cbd5e1",
    fontSize: "14px",
    marginBottom: "20px",
    outline: "none",
    transition: "0.2s ease",
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
          <h1 style={headingStyle}>Share Document</h1>

          <input
            type="email"
            placeholder="Enter recipient email"
            style={inputStyle}
          />

          <button
            style={buttonStyle}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Share Document
          </button>
        </div>
      </div>
    </>
  );
}