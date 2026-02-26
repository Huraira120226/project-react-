import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminNavbar() {

  const [hovered, setHovered] = useState(null);

  const linkStyle = (index) => ({
    color: hovered === index ? "#FFFFFF" : "#E0E7FF",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "all 0.3s ease",
    borderBottom: hovered === index ? "2px solid #3B82F6" : "2px solid transparent",
    paddingBottom: "4px",
    textShadow: hovered === index 
      ? "0 0 8px rgba(59, 130, 246, 0.8)" 
      : "none"
  });

  return (
    <div style={styles.nav}>
      <h2 style={{ color: "#FFFFFF", fontFamily: "Poppins" }}>Admin Panel</h2>

      <div style={styles.links}>
        <Link 
          style={linkStyle(1)} 
          to="/admin/dashboard"
          onMouseEnter={() => setHovered(1)}
          onMouseLeave={() => setHovered(null)}
        >
          Dashboard
        </Link>

        <Link 
          style={linkStyle(2)} 
          to="/admin/users"
          onMouseEnter={() => setHovered(2)}
          onMouseLeave={() => setHovered(null)}
        >
          Manage Users
        </Link>

        <Link 
          style={linkStyle(3)} 
          to="/admin/documents"
          onMouseEnter={() => setHovered(3)}
          onMouseLeave={() => setHovered(null)}
        >
          Documents
        </Link>

        <Link 
          style={linkStyle(4)} 
          to="/admin/audit"
          onMouseEnter={() => setHovered(4)}
          onMouseLeave={() => setHovered(null)}
        >
          Audit Logs
        </Link>

        <Link 
          style={linkStyle(5)} 
          to="/admin/blacklist"
          onMouseEnter={() => setHovered(5)}
          onMouseLeave={() => setHovered(null)}
        >
          Blacklist
        </Link>
      </div>
    </div>
  );
}

const styles = {
  nav: {
   backgroundColor: "#0B1F3A",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  links: {
    display: "flex",
    gap: "20px"
  }
};