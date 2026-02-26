import AdminNavbar from "../../components/AdminNavbar";

export default function AuditLogs() {
  const logs = [
    { user: "User 1", action: "uploaded a document", time: "2026-02-25 10:45 AM" },
    { user: "User 2", action: "verified a document", time: "2026-02-25 11:10 AM" },
    { user: "User 3", action: "blocked a user", time: "2026-02-25 11:30 AM" },
  ];

  return (
    <>
      <AdminNavbar />

      <div style={{ padding: "30px", fontFamily: "Arial, sans-serif", backgroundColor: "#f5f7fa", minHeight: "100vh" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "bold", color: "#333", marginBottom: "20px" }}>Audit Logs</h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {logs.map((log, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "default",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
              }}
            >
              <p style={{ fontSize: "16px", color: "#333", fontWeight: "500" }}>
                <span style={{ fontWeight: "bold" }}>{log.user}</span> {log.action}
              </p>
              <p style={{ fontSize: "14px", color: "#999", marginTop: "5px" }}>{log.time}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}