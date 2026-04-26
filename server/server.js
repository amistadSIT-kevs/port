const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Standard connection string (no SRV lookup) — works on campus Wi-Fi
const mongoURI = "mongodb://20255677_db_user:Y0KDM4Jyr4L9JwC7@ac-0fvmner-shard-00-00.95uusml.mongodb.net:27017,ac-0fvmner-shard-00-01.95uusml.mongodb.net:27017,ac-0fvmner-shard-00-02.95uusml.mongodb.net:27017/apptech?ssl=true&replicaSet=atlas-yqgyq6-shard-0&authSource=admin&appName=Cluster0";

mongoose
  .connect(mongoURI)
  .then(() => console.log("✅ SUCCESS: Contact Database Connected"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:");
    console.error(err.message);
  });

// --- CONTACT SCHEMA ---
const contactSchema = new mongoose.Schema({
  name:    { type: String, required: true, maxlength: 100 },
  email:   { type: String, required: true, maxlength: 200, match: [/^\S+@\S+\.\S+$/, "Invalid email format"] },
  message: { type: String, required: true, maxlength: 2000 }
}, { timestamps: true });

const Contact = mongoose.model("Contact", contactSchema);

// --- ROUTES ---

// POST: Save message from frontend form
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body; // only accept expected fields
    const newMessage = await Contact.create({ name, email, message });
    console.log("📩 New Message from:", newMessage.name);
    res.status(201).json({ success: true, message: "Message stored in MongoDB!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET: Check messages (remove or add auth before going to production)
app.get("/api/contact", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});