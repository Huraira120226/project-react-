import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import User from "./models/User.js";
import dns from "node:dns";

// Force Google DNS to bypass ISP blocking
dns.setServers(['8.8.8.8', '8.8.4.4']);

const app = express();
app.use(express.json());

app.post("/create-user", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch(err => console.log("❌ MongoDB Connection Error:", err));

app.get("/", (req, res) => res.send("Server is running"));

app.listen(process.env.PORT || 5000, () => console.log(`🚀 Server running on port ${process.env.PORT || 5000}`));