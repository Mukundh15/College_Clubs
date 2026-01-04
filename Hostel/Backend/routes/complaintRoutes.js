import express from "express";
import multer from "multer";
import Complaint from "../models/Complaint.js";

const router = express.Router();

/* Image storage */
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

router.post("/", upload.single("image"), async (req, res) => {
  const complaint = await Complaint.create({
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    studentId: req.body.studentId,
    studentEmail: req.body.studentEmail,
    studentName: req.body.studentName,
    imageBefore: req.file?.filename,
  });

  res.json(complaint);
});


/* Get student complaints */
router.get("/student/:uid", async (req, res) => {
  const data = await Complaint.find({ studentId: req.params.uid });
  res.json(data);
});

/* Admin update */
router.put("/:id", async (req, res) => {
  const updated = await Complaint.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

export default router;
