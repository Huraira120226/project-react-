import Navbar from "../../components/Navbar";

export default function Upload() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "30px" }}>
        <h1>Upload Document</h1>
        <input type="file" />
        <br /><br />
        <button>Upload</button>
      </div>
    </>
  );
}