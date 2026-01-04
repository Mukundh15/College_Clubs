import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import adminRoutes from "./routes/adminRoutes.js";
import complaintRoutes from "./routes/complaintRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/hostel")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use("/uploads", express.static("uploads"));

app.use("/api/admin", adminRoutes);
app.use("/api/complaints", complaintRoutes);


app.listen(5000, () => console.log("Server running on 5000"));
