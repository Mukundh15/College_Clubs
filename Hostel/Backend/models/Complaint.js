import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  imageBefore: String,
  imageAfter: String,

  studentId: String,
  studentEmail: String,
  studentName: String,

  status: {
    type: String,
    default: "Pending",
  },
  remarks: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  solvedAt: Date,
});

export default mongoose.model("Complaint", complaintSchema);
