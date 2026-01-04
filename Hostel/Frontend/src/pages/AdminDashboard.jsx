import { useEffect, useState } from "react";
import api from "../api";

export default function AdminDashboard() {
  const [complaints, setComplaints] = useState([]);
  const [filter, setFilter] = useState("All");
  const [activeSolve, setActiveSolve] = useState(null);
  const [imageAfter, setImageAfter] = useState(null);
  const [remarks, setRemarks] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      window.location.href = "/";
      return;
    }
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const res = await api.get("/admin/complaints");
      setComplaints(res.data);
    } catch (err) {
      console.error("Failed to fetch complaints", err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    const formData = new FormData();
    formData.append("status", status);
    formData.append("remarks", remarks);
    if (imageAfter) formData.append("imageAfter", imageAfter);

    await api.put(`/admin/complaint/${id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    setActiveSolve(null);
    setImageAfter(null);
    setRemarks("");
    fetchComplaints();
  };

  const statusBadge = (status) => {
    if (status === "Solved") return "bg-green-100 text-green-700";
    if (status === "In Progress") return "bg-yellow-100 text-yellow-700";
    return "bg-red-100 text-red-700";
  };

  const filteredComplaints =
    filter === "All"
      ? complaints
      : complaints.filter((c) => c.status === filter);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        Loading admin dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">

        {/* ---------- HEADER ---------- */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-400">
            View, manage, and resolve hostel maintenance complaints
          </p>
        </div>

        {/* ---------- FILTER ---------- */}
        <div className="flex gap-3 mb-6 flex-wrap">
          {["All", "Pending", "In Progress", "Solved"].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-4 py-1.5 rounded font-medium ${
                filter === s
                  ? "bg-blue-600"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* ---------- COMPLAINT LIST ---------- */}
        <div className="grid gap-5">
          {filteredComplaints.map((c) => (
            <div
              key={c._id}
              className="bg-gray-800 p-5 rounded-xl border border-gray-700"
            >
              {/* Title + Status */}
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">{c.title}</h2>
                <span
                  className={`text-sm px-3 py-1 rounded-full font-medium ${statusBadge(
                    c.status
                  )}`}
                >
                  {c.status}
                </span>
              </div>

              {/* Meta Info */}
              <div className="text-sm text-gray-400 space-y-1">
                <div>
                  <span className="font-medium text-gray-300">
                    Category:
                  </span>{" "}
                  {c.category}
                </div>
                <div>
                  <span className="font-medium text-gray-300">
                    Posted By:
                  </span>{" "}
                  {c.studentName} ({c.studentEmail})
                </div>
                <div>
                  <span className="font-medium text-gray-300">
                    Created At:
                  </span>{" "}
                  {new Date(c.createdAt).toLocaleString()}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mt-3">
                {c.description}
              </p>

              {/* Images */}
              <div className="flex gap-4 mt-4 flex-wrap">
                {c.imageBefore && (
                  <div>
                    <p className="text-xs text-gray-400 mb-1">
                      Before
                    </p>
                    <img
                      src={`http://localhost:5000/uploads/${c.imageBefore}`}
                      className="w-40 rounded border"
                    />
                  </div>
                )}

                {c.imageAfter && (
                  <div>
                    <p className="text-xs text-gray-400 mb-1">
                      After
                    </p>
                    <img
                      src={`http://localhost:5000/uploads/${c.imageAfter}`}
                      className="w-40 rounded border"
                    />
                  </div>
                )}
              </div>

              {/* ACTIONS */}
              {c.status !== "Solved" && (
                <div className="flex gap-3 mt-4">
                  {c.status === "Pending" && (
                    <button
                      onClick={() =>
                        updateStatus(c._id, "In Progress")
                      }
                      className="bg-yellow-500 text-black px-3 py-1 rounded"
                    >
                      In Progress
                    </button>
                  )}

                  <button
                    onClick={() => setActiveSolve(c._id)}
                    className="bg-green-600 px-3 py-1 rounded"
                  >
                    Mark Solved
                  </button>
                </div>
              )}

              {/* SOLVE PANEL */}
              {activeSolve === c._id && (
                <div className="mt-4 bg-gray-700 p-4 rounded-lg">
                  <textarea
                    placeholder="Remarks (optional)"
                    className="w-full p-2 rounded text-black mb-2"
                    onChange={(e) => setRemarks(e.target.value)}
                  />

                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImageAfter(e.target.files[0])}
                    className="mb-3"
                  />

                  <button
                    onClick={() =>
                      updateStatus(c._id, "Solved")
                    }
                    className="bg-green-600 px-4 py-2 rounded"
                  >
                    Confirm Solved
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredComplaints.length === 0 && (
          <p className="text-gray-400 mt-6 text-center">
            No complaints found for this filter.
          </p>
        )}
      </div>
    </div>
  );
}
