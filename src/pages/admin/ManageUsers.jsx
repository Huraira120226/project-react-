import AdminNavbar from "../../components/AdminNavbar";

export default function ManageUsers() {
  return (
    <>
      <AdminNavbar />

      <div style={{ padding: "30px" }}>
        <h1>Manage Users</h1>
        <ul>
          <li>User 1 - Active</li>
          <li>User 2 - Active</li>
          <li>User 3 - Blocked</li>
        </ul>
      </div>
    </>
  );
}