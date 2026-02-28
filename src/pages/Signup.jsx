import React, { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [hovered, setHovered] = useState(false);

  const validateEmail = (email) => {
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailPattern.test(email);
  };

  const validatePassword = (password) => {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Email must be in proper gmail format (example@gmail.com)");
      setSuccess("");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "Password must contain 1 capital, 1 small, 1 number, 1 special character and minimum 8 characters"
      );
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Signup successful 🎉");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Account</h2>
        <p style={styles.subtitle}>Sign up to get started</p>

        <form onSubmit={handleSignup} style={styles.form}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={styles.input}
          />

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />

          {error && <p style={styles.error}>{error}</p>}
          {success && <p style={styles.success}>{success}</p>}

          <button
            type="submit"
            style={{
              ...styles.button,
              backgroundColor: hovered ? "#1d4ed8" : "#255cf3",
              transform: hovered ? "translateY(-3px)" : "translateY(0)"
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #e0e7ff, #f8fafc)"
  },
  card: {
    width: "400px",
    padding: "40px",
    borderRadius: "12px",
    backgroundColor: "#ffffff",
    boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
    textAlign: "center"
  },
  title: {
    marginBottom: "5px",
    fontSize: "24px",
    fontWeight: "600",
    color: "#111827"
  },
  subtitle: {
    marginBottom: "25px",
    fontSize: "14px",
    color: "#6b7280"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontSize: "14px",
    outline: "none",
    transition: "0.3s"
  },
  error: {
    color: "#dc2626",
    fontSize: "13px",
    marginTop: "-5px"
  },
  success: {
    color: "#16a34a",
    fontSize: "13px",
    marginTop: "-5px"
  },
  button: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    color: "white",
    fontSize: "15px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 8px 20px rgba(37, 92, 243, 0.3)"
  }
};