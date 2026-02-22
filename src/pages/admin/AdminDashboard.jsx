import AdminNavbar from "../../components/AdminNavbar";

export default function AdminDashboard() {
  return (
    <>
      <AdminNavbar />

      <div style={{ padding: "30px" }}>
        <h1>Admin Dashboard</h1>
        <p>Total Users: 120</p>
        <p>Total Documents: 340</p>
        <p>Blacklisted Users: 5</p>
      </div>
    </>
  );
}