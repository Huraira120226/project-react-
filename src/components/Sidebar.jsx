import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ links }) {
  return (
    <div style={{ width: "200px", backgroundColor: "#2563EB", minHeight: "100vh", padding: "20px" }}>
      {links.map((link) => (
        <div key={link.path} style={{ margin: "10px 0" }}>
          <Link to={link.path} style={{ color: "white" }}>{link.label}</Link>
        </div>
      ))}
    </div>
  );
}