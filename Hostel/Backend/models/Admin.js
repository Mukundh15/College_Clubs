import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  username: String,
  password: String // plain for mini project (hash optional)
});

export default mongoose.model("Admin", adminSchema);
