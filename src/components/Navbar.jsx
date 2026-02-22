import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={styles.nav}>
      <h2 style={{ color: "white", fontFamily: 'Poppins' }}>SecureDoc</h2>

      <div style={styles.links}>
        <Link style={styles.link} to="/dashboard">Dashboard</Link>
        <Link style={styles.link} to="/upload">Upload</Link>
        <Link style={styles.link} to="/verify">Verify</Link>
        <Link style={styles.link} to="/history">History</Link>
        <Link style={styles.link} to="/share">Share</Link>
        <Link style={styles.link} to="/profile">Profile</Link>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    backgroundColor: "#17057a",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  links: {
    display: "flex",
    gap: "20px"
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold"
   
  }
};