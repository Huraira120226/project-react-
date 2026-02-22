import AdminNavbar from "../../components/AdminNavbar";

export default function Documents() {
  return (
    <>
      <AdminNavbar />

      <div style={{ padding: "30px" }}>
        <h1>All Documents</h1>
        <ul>
          <li>Document 1</li>
          <li>Document 2</li>
          <li>Document 3</li>
        </ul>
      </div>
    </>
  );
}