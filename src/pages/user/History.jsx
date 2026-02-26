import Navbar from "../../components/Navbar";

export default function History() {

  const containerStyle = {
    minHeight: "100vh",
    backgroundColor: "#f1f5f9",
    padding: "40px 20px",
    display: "flex",
    justifyContent: "center",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "700px",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
    padding: "30px",
  };

  const headingStyle = {
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "25px",
    color: "#1e293b",
  };

  const itemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 18px",
    borderRadius: "10px",
    backgroundColor: "#f8fafc",
    marginBottom: "15px",
    transition: "0.2s ease",
  };

  const nameStyle = {
    fontSize: "15px",
    color: "#334155",
    fontWeight: "500",
  };

  const badgeStyle = (status) => ({
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "13px",
    fontWeight: "600",
    backgroundColor:
      status === "Verified" ? "#dcfce7" : "#fef3c7",
    color:
      status === "Verified" ? "#166534" : "#92400e",
  });

  return (
    <>
      <Navbar />
      <div style={containerStyle}>
        <div style={cardStyle}>
          <h1 style={headingStyle}>Upload History</h1>

          <div style={itemStyle}>
            <span style={nameStyle}>Document A</span>
            <span style={badgeStyle("Verified")}>Verified</span>
          </div>

          <div style={itemStyle}>
            <span style={nameStyle}>Document B</span>
            <span style={badgeStyle("Pending")}>Pending</span>
          </div>

        </div>
      </div>
    </>
  );
}