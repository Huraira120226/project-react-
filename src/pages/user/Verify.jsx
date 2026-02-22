import Navbar from "../../components/Navbar";

export default function Verify() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "30px" }}>
        <h1>Verify Document</h1>
        <input type="text" placeholder="Enter Document ID" />
        <br /><br />
        <button>Verify</button>
      </div>
    </>
  );
}