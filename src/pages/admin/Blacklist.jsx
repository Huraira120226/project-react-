import AdminNavbar from "../../components/AdminNavbar";

export default function Blacklist() {
  const blacklistedUsers = [
    { name: "User 3", reason: "Multiple violations" },
    { name: "User 8", reason: "Policy breach" },
  ];

  return (
    <>
      <AdminNavbar />

      <div style={{ padding: "30px", fontFamily: "Arial, sans-serif", backgroundColor: "#f5f7fa", minHeight: "100vh" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "bold", color: "#333", marginBottom: "20px" }}>Blacklisted Users</h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {blacklistedUsers.map((user, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transition: "transform 0.2s, box-shadow 0.2s",
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
              <span style={{ fontSize: "18px", color: "#333", fontWeight: "500" }}>{user.name}</span>
              <span style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#fff",
                backgroundColor: "#dc3545",
                padding: "5px 12px",
                borderRadius: "20px"
              }}>{user.reason}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}