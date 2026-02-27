import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setUserRole }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hovered, setHovered] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    // only gmail format
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailPattern.test(email);
  };

  const validatePassword = (password) => {
    // 1 capital, 1 small, 1 number, 1 special, min 8
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Email must be in proper gmail format (example@gmail.com)");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "Password must contain 1 capital, 1 small, 1 number, 1 special character and minimum 8 characters"
      );
      return;
    }

    setError("");

    if (email.includes("admin")) {
      setUserRole("admin");
      navigate("/admin");
    } else {
      setUserRole("user");
      navigate("/dashboard");
    }
  };

  const buttonStyle = {
    padding: "10px 25px",
    border: "2px solid #255cf3",
    borderRadius: "6px",
    backgroundColor: hovered ? "#255cf3" : "white",
    color: hovered ? "white" : "#000000",
    cursor: "pointer",
    fontSize: "16px",
    transition: "all 0.3s ease",
    transform: hovered ? "translateY(-4px)" : "translateY(0)",
    boxShadow: hovered
      ? "0 6px 15px rgba(37, 92, 243, 0.4)"
      : "none"
  };

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: "8px", width: "250px", marginBottom: "10px" }}
        />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: "8px", width: "250px", marginBottom: "10px" }}
        />
        <br />

        {error && (
          <p style={{ color: "red", fontSize: "14px" }}>{error}</p>
        )}

        <button
          type="submit"
          style={buttonStyle}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Login
        </button>
      </form>
    </div>
  );
}