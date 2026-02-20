import CryptoJS from 'crypto-js';

const testEncryption = () => {
  const secretKey = "my-secret-key-123";
  const message = "This is a secret document";
  
  // Encrypt
  const encrypted = CryptoJS.AES.encrypt(message, secretKey).toString();
  console.log("Encrypted Data:", encrypted);
  
  // Decrypt
  const bytes = CryptoJS.AES.decrypt(encrypted, secretKey);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  console.log("Decrypted Text:", originalText);
};