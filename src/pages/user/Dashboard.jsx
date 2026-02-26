import Navbar from "../../components/Navbar";

export default function Dashboard() {

  const containerStyle = {
    minHeight: "100vh",
    backgroundColor: "#f1f5f9",
    padding: "40px 20px",
  };

  const headingStyle = {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "30px",
    color: "#1e293b",
  };

  const statsWrapper = {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  };

  const cardStyle = {
    flex: "1",
    minWidth: "240px",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "25px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)",
  };

  const numberStyle = {
    fontSize: "28px",
    fontWeight: "700",
    color: "#2563eb",
    marginBottom: "8px",
  };

  const labelStyle = {
    fontSize: "14px",
    color: "#64748b",
    fontWeight: "500",
  };

  return (
    <>
      <Navbar />
      <div style={containerStyle}>
        <h1 style={headingStyle}>User Dashboard</h1>

        <div style={statsWrapper}>
          <div style={cardStyle}>
            <div style={numberStyle}>10</div>
            <div style={labelStyle}>Total Uploaded Documents</div>
          </div>

          <div style={cardStyle}>
            <div style={{ ...numberStyle, color: "#16a34a" }}>8</div>
            <div style={labelStyle}>Verified Documents</div>
          </div>
        </div>
      </div>
    </>
  );
}