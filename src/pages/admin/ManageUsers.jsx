import AdminNavbar from "../../components/AdminNavbar";

export default function ManageUsers() {
  const users = [
    { name: "User 1", status: "Active" },
    { name: "User 2", status: "Active" },
    { name: "User 3", status: "Blocked" },
  ];

  const getStatusColor = (status) => {
    return status === "Active" ? "#28a745" : "#dc3545"; // green for active, red for blocked
  };

  return (
    <>
      <AdminNavbar />

      <div style={{ padding: "30px", fontFamily: "Arial, sans-serif", backgroundColor: "#f5f7fa", minHeight: "100vh" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "bold", color: "#333", marginBottom: "20px" }}>Manage Users</h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {users.map((user, index) => (
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
              <span style={{ fontSize: "18px", color: "#333", fontWeight: "500" }}>{user.name}</span>
              <span
                style={{
                  fontWeight: "bold",
                  color: "#fff",
                  backgroundColor: getStatusColor(user.status),
                  padding: "5px 12px",
                  borderRadius: "20px",
                  fontSize: "14px",
                }}
              >
                {user.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}