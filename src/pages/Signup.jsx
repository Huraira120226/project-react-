import React, { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ padding: "8px", width: "250px", marginBottom: "10px" }}
        />
        <br />

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

        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}