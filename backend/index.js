import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});


app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.listen(process.env.PORT || 5000);
