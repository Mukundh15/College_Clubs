import { useState } from "react";
import api from "../api";
import { auth } from "../firebase";

export default function NewComplaint() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Electrical");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async () => {
    if (!title || !description) {
      setError("Please fill all required fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("studentId", auth.currentUser.uid);
      formData.append("studentEmail", auth.currentUser.email);
      formData.append("studentName", auth.currentUser.displayName);
      if (image) formData.append("image", image);


      await api.post("/complaints", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      window.location.href = "/student/dashboard";
    } catch (err) {
      setError("Failed to submit complaint");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="bg-white w-full max-w-xl rounded-xl shadow p-8">

        <h1 className="text-2xl font-bold mb-2">Raise a Complaint</h1>
        <p className="text-gray-600 mb-6">
          Describe the issue clearly and upload an image if possible.
        </p>

        <input
          className="w-full p-3 border rounded mb-4"
          placeholder="Complaint Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          className="w-full p-3 border rounded mb-4"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Electrical</option>
          <option>Plumbing</option>
          <option>Furniture</option>
          <option>Cleanliness</option>
          <option>Others</option>
        </select>

        <textarea
          className="w-full p-3 border rounded mb-4"
          rows="4"
          placeholder="Describe the issue in detail"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Upload Image (optional)
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full"
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm mb-3">{error}</p>
        )}

        <button
          onClick={submit}
          disabled={loading}
          className={`w-full py-3 rounded-lg font-semibold text-white transition ${
            loading
              ? "bg-blue-400"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Submitting..." : "Submit Complaint"}
        </button>
      </div>
    </div>
  );
}
