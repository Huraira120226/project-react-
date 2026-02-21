import React from "react";

export default function Signup() {
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h2>Signup</h2>
      <form>
        <input type="text" placeholder="Name" required style={{ padding: "8px", width: "250px", marginBottom: "10px" }}/><br/>
        <input type="email" placeholder="Email" required style={{ padding: "8px", width: "250px", marginBottom: "10px" }}/><br/>
        <input type="password" placeholder="Password" required style={{ padding: "8px", width: "250px", marginBottom: "10px" }}/><br/>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}