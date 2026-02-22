import Navbar from "../../components/Navbar";

export default function Share() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "30px" }}>
        <h1>Share Document</h1>
        <input type="text" placeholder="Enter Email" />
        <br /><br />
        <button>Share</button>
      </div>
    </>
  );
}