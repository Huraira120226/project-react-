import AdminNavbar from "../../components/AdminNavbar";

export default function Blacklist() {
  return (
    <>
      <AdminNavbar />

      <div style={{ padding: "30px" }}>
        <h1>Blacklisted Users</h1>
        <ul>
          <li>User 3</li>
          <li>User 8</li>
        </ul>
      </div>
    </>
  );
}