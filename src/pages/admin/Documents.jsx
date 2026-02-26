import AdminNavbar from "../../components/AdminNavbar";

export default function Documents() {
  const documents = [
    { name: "Document 1" },
    { name: "Document 2" },
    { name: "Document 3" },
  ];

  return (
    <>
      <AdminNavbar />

      <div style={{ padding: "30px", fontFamily: "Arial, sans-serif", backgroundColor: "#f5f7fa", minHeight: "100vh" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "bold", color: "#333", marginBottom: "20px" }}>All Documents</h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {documents.map((doc, index) => (
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
              <span style={{ fontSize: "18px", color: "#333", fontWeight: "500" }}>{doc.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}