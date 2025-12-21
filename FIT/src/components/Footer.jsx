import React from "react";
import {
  FaHome,
  FaUsers,
  FaCalendarAlt,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-50 text-slate-700 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

          {/* BRAND */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/FIT.png"
                alt="FIT Logo"
                className="w-12 h-12 object-contain"
              />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-800 bg-clip-text text-transparent">
                FIT
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-xs leading-relaxed">
              Female in Technology (FIT) is a student-driven initiative focused on
              empowering women through mentorship, technical excellence, and
              leadership development in technology.
            </p>
          </div>

          {/* NAVIGATION (ANCHOR LINKS) */}
          <div className="flex flex-col gap-3 items-center md:items-start">
            <h3 className="font-semibold text-indigo-600 mb-2">
              Quick Navigation
            </h3>

            <a href="/#top" className="hover:text-indigo-600 flex items-center gap-2 transition">
              <FaHome /> Home
            </a>

            <a href="/#about" className="hover:text-indigo-600 flex items-center gap-2 transition">
              <FaUsers /> About FIT
            </a>

            <a href="/#vision" className="hover:text-indigo-600 flex items-center gap-2 transition">
              <FaUsers /> Vision
            </a>

            <a href="/#mission" className="hover:text-indigo-600 flex items-center gap-2 transition">
              <FaUsers /> Mission
            </a>

            <a href="/#programs" className="hover:text-indigo-600 flex items-center gap-2 transition">
              <FaCalendarAlt /> Programs
            </a>

            <a href="/#why-fit" className="hover:text-indigo-600 flex items-center gap-2 transition">
              <FaUsers /> Why FIT
            </a>
          </div>

          {/* CONTACT & SOCIAL */}
          <div className="flex flex-col gap-3 items-center md:items-start">
            <h3 className="font-semibold text-violet-600 mb-2">
              Connect With Us
            </h3>

            <a
              href="mailto:fit@bvrit.ac.in"
              className="hover:text-indigo-600 flex items-center gap-2 text-sm transition"
            >
              <FaEnvelope /> fit@bvrit.ac.in
            </a>

            <a
              href="tel:+917842070463"
              className="hover:text-indigo-600 flex items-center gap-2 text-sm transition"
            >
              <FaPhone /> +91 78420 70463
            </a>

            <div className="flex gap-4 mt-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-slate-500 hover:text-indigo-600 transition"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-slate-500 hover:text-indigo-600 transition"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-slate-500 hover:text-indigo-600 transition"
              >
                <FaTwitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 pt-5 border-t border-slate-200 text-center text-sm text-slate-500">
          © {currentYear} Female in Technology (FIT). All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
