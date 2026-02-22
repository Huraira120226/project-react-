import Navbar from "../../components/Navbar";

export default function History() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "30px" }}>
        <h1>Upload History</h1>
        <ul>
          <li>Document A - Verified</li>
          <li>Document B - Pending</li>
        </ul>
      </div>
    </>
  );
}