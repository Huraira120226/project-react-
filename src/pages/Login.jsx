import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setUserRole }) {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // role based on email
    if (email.includes("admin")) {
      setUserRole("admin");
      navigate("/admin");
    } else {
      setUserRole("user");
      navigate("/dashboard");
    }
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
        /><br/>
        <input
          type="password"
          placeholder="Password"
          required
          style={{ padding: "8px", width: "250px", marginBottom: "10px" }}
        /><br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}