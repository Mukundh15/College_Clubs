import { useEffect, useState } from "react";
import api from "../api";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function StudentDashboard() {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        window.location.href = "/";
        return;
      }

      try {
        const res = await api.get(
          `/complaints/student/${user.uid}`
        );
        setComplaints(res.data);
      } catch (err) {
        console.error("Failed to load complaints", err);
      } finally {
        setLoading(false);
      }
    });

    return () => unsub();
  }, []);

  const statusBadge = (status) => {
    if (status === "Solved")
      return "bg-green-100 text-green-700";
    if (status === "In Progress")
      return "bg-yellow-100 text-yellow-700";
    return "bg-red-100 text-red-700";
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        Loading complaints...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">
              My Complaints
            </h1>
            <p className="text-gray-500 text-sm">
              Track status and resolution updates
            </p>
          </div>

          <a
            href="/student/new-complaint"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            + New Complaint
          </a>
        </div>

        {/* Complaints */}
        {complaints.length === 0 ? (
          <p className="text-gray-600">
            You haven’t submitted any complaints yet.
          </p>
        ) : (
          <div className="grid gap-5">
            {complaints.map((c) => (
              <div
                key={c._id}
                className="bg-white p-5 rounded-xl shadow"
              >
                {/* Title + Status */}
                <div className="flex justify-between items-center mb-2">
                  <h2 className="font-semibold text-lg">
                    {c.title}
                  </h2>
                  <span
                    className={`text-sm px-3 py-1 rounded-full font-medium ${statusBadge(
                      c.status
                    )}`}
                  >
                    {c.status}
                  </span>
                </div>

                {/* Meta */}
                <div className="text-sm text-gray-500 mb-2">
                  <span className="font-medium">
                    Category:
                  </span>{" "}
                  {c.category}
                </div>

                {/* Description */}
                <p className="text-gray-700 text-sm mb-3">
                  {c.description}
                </p>

                {/* Images */}
                <div className="flex gap-4 flex-wrap mt-3">
                  {c.imageBefore && (
                    <div>
                      <p className="text-xs text-gray-500 mb-1">
                        Reported Issue
                      </p>
                      <img
                        src={`http://localhost:5000/uploads/${c.imageBefore}`}
                        className="w-40 rounded border"
                      />
                    </div>
                  )}

                  {c.status === "Solved" && c.imageAfter && (
                    <div>
                      <p className="text-xs text-gray-500 mb-1">
                        After Fix
                      </p>
                      <img
                        src={`http://localhost:5000/uploads/${c.imageAfter}`}
                        className="w-40 rounded border"
                      />
                    </div>
                  )}
                </div>

                {/* Remarks */}
                {c.status === "Solved" && c.remarks && (
                  <div className="mt-3 bg-green-50 p-3 rounded text-sm text-green-800">
                    <span className="font-medium">
                      Admin Remarks:
                    </span>{" "}
                    {c.remarks}
                  </div>
                )}

                {/* Solved Time */}
                {c.status === "Solved" && c.solvedAt && (
                  <p className="text-xs text-gray-400 mt-2">
                    Resolved on{" "}
                    {new Date(c.solvedAt).toLocaleString()}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
