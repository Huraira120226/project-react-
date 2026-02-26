import AdminNavbar from "../../components/AdminNavbar";

export default function AdminDashboard() {
  const stats = [
    { title: "Total Users", value: 120 },
    { title: "Total Documents", value: 340 },
    { title: "Blacklisted Users", value: 5 },
  ];

  return (
    <>
      <AdminNavbar />

      <div style={{ padding: "30px", fontFamily: "Arial, sans-serif", backgroundColor: "#f5f7fa", minHeight: "100vh" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "bold", color: "#333", marginBottom: "20px" }}>Admin Dashboard</h1>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {stats.map((stat) => (
            <div
              key={stat.title}
              style={{
                flex: 1,
                minWidth: "180px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                padding: "25px",
                textAlign: "center",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
              }}
            >
              <p style={{ fontSize: "16px", color: "#666", marginBottom: "10px" }}>{stat.title}</p>
              <p style={{ fontSize: "32px", fontWeight: "bold", color: "#1a73e8" }}>{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}