import React, { useState } from "react";
import "./Verification.css";

function Verification() {

  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setResult("");
  };

  const handleVerify = () => {
    if (!file) {
      setResult("Please upload a document first.");
      return;
    }

    // Dummy verification result (for UI demo)
    setResult("Document Verified Successfully ✅");
  };

  return (
    <div className="verification-page">

      {/* Header */}
      <header>
        <h1>Encrypted Document Verification & Sharing</h1>
        <p>Secure | Transparent | Blockchain Powered</p>
      </header>

      {/* Main Section */}
      <div className="verification-container">

        <h2 className="section-title">Verify Your Document</h2>

        <div className="card">

          <input 
            type="file" 
            onChange={handleFileChange}
            className="file-input"
          />

          <button 
            className="upload-btn"
            onClick={() => alert("Document Uploaded Successfully")}
          >
            Upload Document
          </button>

          <button 
            className="verify-btn"
            onClick={handleVerify}
          >
            Verify Document
          </button>

          {result && <p className="result">{result}</p>}

        </div>
      </div>

      {/* Footer */}
      <footer>
        © 2026 Encrypted Document Verification System
      </footer>

    </div>
  );
}

export default Verification;
