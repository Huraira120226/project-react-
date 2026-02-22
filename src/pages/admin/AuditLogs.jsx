import AdminNavbar from "../../components/AdminNavbar";

export default function AuditLogs() {
  return (
    <>
      <AdminNavbar />

      <div style={{ padding: "30px" }}>
        <h1>Audit Logs</h1>
        <p>User 1 uploaded a document</p>
        <p>User 2 verified a document</p>
      </div>
    </>
  );
}