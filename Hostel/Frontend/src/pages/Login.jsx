import { useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import api from "../api";

export default function Login() {
  const [role, setRole] = useState("student");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleStudentLogin = async () => {
    setError("");
    setLoading(true);

    try {
      const provider = new GoogleAuthProvider();

      // 🔥 THIS IS IMPORTANT
      provider.setCustomParameters({
        prompt: "select_account",
      });

      const result = await signInWithPopup(auth, provider);
      console.log("Google User:", result.user);

      window.location.href = "/student/dashboard";
    } catch (err) {
      console.error("Google Sign-in Error:", err);

      // show REAL error
      setError(err.code || "Google sign-in failed");
    } finally {
      setLoading(false);
    }
  };

  const handleAdminLogin = async () => {
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/admin/login", { username, password });

      // ✅ THIS LINE WAS MISSING
      localStorage.setItem("isAdmin", "true");

      window.location.href = "/admin/dashboard";
    } catch (err) {
      setError("Invalid admin credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-2xl font-bold text-center mb-6">
          Hostel Complaint Portal
        </h1>

        {/* Role Toggle */}
        <div className="flex mb-6 border rounded-lg overflow-hidden">
          <button
            onClick={() => setRole("student")}
            className={`w-1/2 py-2 font-medium ${
              role === "student" ? "bg-blue-600 text-white" : "bg-gray-100"
            }`}
          >
            Student
          </button>
          <button
            onClick={() => setRole("admin")}
            className={`w-1/2 py-2 font-medium ${
              role === "admin" ? "bg-green-600 text-white" : "bg-gray-100"
            }`}
          >
            Admin
          </button>
        </div>

        {/* STUDENT */}
        {role === "student" && (
          <button
            onClick={handleStudentLogin}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 bg-white border py-3 rounded-lg font-medium hover:bg-gray-50"
          >
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
              className="w-5 h-5"
            />
            {loading ? "Signing in..." : "Continue with Google"}
          </button>
        )}

        {/* ADMIN */}
        {role === "admin" && (
          <>
            <input
              type="text"
              placeholder="Admin Username"
              className="w-full p-3 border rounded mb-4"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={handleAdminLogin}
              disabled={loading}
              className="w-full py-3 rounded font-semibold text-white bg-green-600 hover:bg-green-700"
            >
              {loading ? "Logging in..." : "Login as Admin"}
            </button>
          </>
        )}

        {error && (
          <p className="text-red-500 text-sm text-center mt-4">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
