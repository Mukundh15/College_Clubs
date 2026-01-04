import mongoose from "mongoose";

/* ---------- DB CONNECTION ---------- */
mongoose.connect("mongodb://127.0.0.1:27017/hostel")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

/* ---------- ADMIN MODEL ---------- */
const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const Admin = mongoose.model("Admin", adminSchema);

/* ---------- RANDOM GENERATOR ---------- */
function randomString(length = 8) {
  return Math.random().toString(36).substring(2, 2 + length);
}

/* ---------- CREATE ADMIN ---------- */
async function createAdmin() {
  const username = `warden1@gmail.com`;
  const password = 'warden1';

  const admin = await Admin.create({ username, password });

  console.log("✅ Admin created successfully");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("Username:", username);
  console.log("Password:", password);
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

  mongoose.connection.close();
}

createAdmin();
