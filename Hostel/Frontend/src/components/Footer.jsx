export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6">
        {/* About */}
        <div>
          <h2 className="text-white font-semibold mb-2">
            Hostel Complaint Portal
          </h2>
          <p className="text-sm">
            A digital platform to report, track, and resolve hostel
            maintenance issues efficiently.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-white font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Student Login</a></li>
            <li><a href="/admin/login" className="hover:text-white">Admin Login</a></li>
            <li><a href="/student/dashboard" className="hover:text-white">Dashboard</a></li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="flex items-end md:justify-end">
          <p className="text-sm">
            © {new Date().getFullYear()} Hostel Portal  
            <br />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
