import Navbar from "../../components/Navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "30px" }}>
        <h1>User Dashboard</h1>
        <p>Total Uploaded Documents: 10</p>
        <p>Verified Documents: 8</p>
      </div>
    </>
  );
}