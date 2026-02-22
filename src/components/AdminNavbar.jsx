import { Link } from "react-router-dom";

export default function AdminNavbar() {
  return (
    <div style={styles.nav}>
      <h2 style={{ color: "white" }}>Admin </h2>

      <div style={styles.links}>
        <Link style={styles.link} to="/admin/dashboard">Dashboard</Link>
        <Link style={styles.link} to="/admin/users">Manage Users</Link>
        <Link style={styles.link} to="/admin/documents">Documents</Link>
        <Link style={styles.link} to="/admin/audit">Audit Logs</Link>
        <Link style={styles.link} to="/admin/blacklist">Blacklist</Link>
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