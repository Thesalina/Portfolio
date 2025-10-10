require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});



app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Contact Form Endpoint
app.use(express.json()); // ✅ This ensures request bodies are parsed correctly
app.use(express.urlencoded({ extended: true })); // ✅ This helps with form data
  
app.post("/send", async (req, res) => {
    console.log("Received data:", req.body); // Debugging: Check received data

    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        let info = await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER, // Change this to your email
            subject: `New Message from ${name}`,
            text: `Email: ${email}\n\nMessage:\n${message}`,
        });

        console.log("Email Sent:", info.response);
        res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send message" });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
