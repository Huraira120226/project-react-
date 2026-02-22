import Navbar from "../../components/Navbar";

export default function Profile() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "30px" }}>
        <h1>User Profile</h1>
        <p>Name: John Doe</p>
        <p>Email: user@example.com</p>
      </div>
    </>
  );
}