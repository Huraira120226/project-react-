import Navbar from "../../components/Navbar";

export default function Profile() {
  const containerStyle = {
    minHeight: "100vh",
    backgroundColor: "#f1f5f9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
  };

  const cardStyle = {
    backgroundColor: "#ffffff",
    width: "100%",
    maxWidth: "520px",
    borderRadius: "14px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
    padding: "0",
    overflow: "hidden",
  };

  const headerStyle = {
    backgroundColor: "#0B1F3A",
    padding: "30px",
    textAlign: "center",
    color: "#ffffff",
  };

  const avatarStyle = {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    backgroundColor: "#ffffff",
    color: "#0B1F3A",
    fontSize: "32px",
    fontWeight: "600",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto 15px auto",
  };

  const bodyStyle = {
    padding: "30px",
  };

  const rowStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "14px 0",
    borderBottom: "1px solid #e2e8f0",
    fontSize: "15px",
    color: "#0B1F3A",
  };

  const labelStyle = {
    fontWeight: "600",
    color: "#0B1F3A",
  };

  return (
    <>
      <Navbar />
      <div style={containerStyle}>
        <div style={cardStyle}>
          
          <div style={headerStyle}>
            <div style={avatarStyle}>JD</div>
            <h2 style={{ margin: 0 }}>John Doe</h2>
            <p style={{ margin: "5px 0 0 0", opacity: 0.9 }}>
              User Account Details
            </p>
          </div>

          <div style={bodyStyle}>
            <div style={rowStyle}>
              <span style={labelStyle}>Name</span>
              <span>John Doe</span>
            </div>

            <div style={{ ...rowStyle, borderBottom: "none" }}>
              <span style={labelStyle}>Email</span>
              <span>user@example.com</span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}