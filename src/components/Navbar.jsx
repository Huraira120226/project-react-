import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ userRole, logout }) {
  return (
    <nav style={{ padding: "10px 20px", backgroundColor: "#1E3A8A", color: "white" }}>
      <h2 style={{ display: "inline-block", marginRight: "20px" }}>DocVerify</h2>
      <Link to="/" style={{ marginRight: "15px", color: "white" }}>Home</Link>
      {!userRole && <Link to="/login" style={{ marginRight: "15px", color: "white" }}>Login</Link>}
      {!userRole && <Link to="/signup" style={{ color: "white" }}>Signup</Link>}
      {userRole && <button onClick={logout} style={{ float: "right" }}>Logout</button>}
    </nav>
  );
}