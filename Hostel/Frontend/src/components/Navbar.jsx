import { useEffect, useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isAdmin = localStorage.getItem("isAdmin");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  const logout = async () => {
    if (user) {
      // student logout
      await signOut(auth);
    }
    if (isAdmin) {
      // admin logout
      localStorage.removeItem("isAdmin");
    }
    window.location.href = "/";
  };

  const showLoginInfo = location.pathname === "/" && !user && !isAdmin;

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-lg font-bold text-blue-600">
          Hostel Portal
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {(user || isAdmin) && (
            <>
              {!isAdmin && (
                <>
                  <a href="/student/dashboard">Dashboard</a>
                  <a href="/student/new-complaint">New Complaint</a>
                </>
              )}

              {isAdmin && (
                <a href="/admin/dashboard">Admin Dashboard</a>
              )}

              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-1.5 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          )}

          {showLoginInfo && (
            <span className="text-gray-500 font-medium">
              Login to continue
            </span>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-4 py-3 space-y-3">

            {(user || isAdmin) && (
              <>
                {!isAdmin && (
                  <>
                    <a href="/student/dashboard">Dashboard</a>
                    <a href="/student/new-complaint">New Complaint</a>
                  </>
                )}

                {isAdmin && (
                  <a href="/admin/dashboard">Admin Dashboard</a>
                )}

                <button
                  onClick={logout}
                  className="bg-red-500 text-white py-2 rounded"
                >
                  Logout
                </button>
              </>
            )}

            {showLoginInfo && (
              <span className="text-gray-500 text-center">
                Login to continue
              </span>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
