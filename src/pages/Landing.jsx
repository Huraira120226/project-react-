import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

export default function Landing() {
  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h1 style={{ color: "#1E3A8A" }}>Welcome to Document Verification FYP</h1>
        <p style={{ color: "#1F2937", fontSize: "18px", margin: "20px 0" }}>
          Securely upload, verify, and share documents with a simple and professional interface.
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
          <div style={{ padding: "20px", border: "1px solid #2563EB", borderRadius: "8px", width: "200px" }}>
            <h3>Encryption</h3>
            <p>Secure your documents easily</p>
          </div>
          <div style={{ padding: "20px", border: "1px solid #2563EB", borderRadius: "8px", width: "200px" }}>
            <h3>Blockchain Verification</h3>
            <p>Authenticate documents instantly</p>
          </div>
          <div style={{ padding: "20px", border: "1px solid #2563EB", borderRadius: "8px", width: "200px" }}>
            <h3>Secure Sharing</h3>
            <p>Share with confidence</p>
          </div>
        </div>
      </div>
    </>
  );
}