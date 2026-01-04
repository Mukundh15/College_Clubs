import express from "express";
import multer from "multer";
import fs from "fs";
import Admin from "../models/Admin.js";
import Complaint from "../models/Complaint.js";

const router = express.Router();

/* ---------- ENSURE UPLOADS FOLDER EXISTS ---------- */
const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

/* ---------- MULTER SETUP ---------- */
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

/* ---------- ADMIN LOGIN ---------- */
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const admin = await Admin.findOne({ username, password });
  if (!admin) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({
    success: true,
    adminId: admin._id,
  });
});

/* ---------- GET ALL COMPLAINTS ---------- */
router.get("/complaints", async (req, res) => {
  const complaints = await Complaint.find().sort({ createdAt: -1 });
  res.json(complaints);
});

/* ---------- UPDATE COMPLAINT ---------- */
router.put(
  "/complaint/:id",
  upload.single("imageAfter"),
  async (req, res) => {
    try {
      const updateData = {
        status: req.body.status,
        remarks: req.body.remarks,
      };

      if (req.file) {
        updateData.imageAfter = req.file.filename;
      }

      if (req.body.status === "Solved") {
        updateData.solvedAt = new Date();
      }

      const updated = await Complaint.findByIdAndUpdate(
        req.params.id,
        updateData,
        { new: true }
      );

      if (!updated) {
        return res.status(404).json({ message: "Complaint not found" });
      }

      res.json(updated);
    } catch (err) {
      console.error("Admin update error:", err);
      res.status(500).json({ message: "Update failed" });
    }
  }
);

export default router;
