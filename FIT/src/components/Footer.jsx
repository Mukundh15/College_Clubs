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
    <footer className="w-full bg-rose-50 text-gray-700 border-t border-pink-200">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

          {/* BRAND */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <img
                src="/FIT.png"
                alt="FIT Logo"
                className="w-12 h-12 object-contain"
              />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                FIT
              </h2>
            </div>
            <p className="text-sm text-gray-600 max-w-xs">
              Female in Technology (FIT) is a student-driven initiative focused
              on empowering women through mentorship, learning, and leadership
              in technology.
            </p>
          </div>

          {/* NAVIGATION (ANCHOR LINKS) */}
          <div className="flex flex-col gap-3 items-center md:items-start">
            <h3 className="font-semibold text-pink-600 mb-1">
              Navigation
            </h3>

            <a href="/#top" className="hover:text-pink-500 flex items-center gap-2">
              <FaHome /> Home
            </a>

            <a href="/#about" className="hover:text-pink-500 flex items-center gap-2">
              <FaUsers /> About FIT
            </a>

            <a href="/#vision" className="hover:text-pink-500 flex items-center gap-2">
              <FaUsers /> Vision
            </a>

            <a href="/#mission" className="hover:text-pink-500 flex items-center gap-2">
              <FaUsers /> Mission
            </a>

            <a href="/#programs" className="hover:text-pink-500 flex items-center gap-2">
              <FaCalendarAlt /> Programs
            </a>

            <a href="/#why-fit" className="hover:text-pink-500 flex items-center gap-2">
              <FaUsers /> Why FIT
            </a>
          </div>

          {/* CONTACT & SOCIAL */}
          <div className="flex flex-col gap-3 items-center md:items-start">
            <h3 className="font-semibold text-purple-500 mb-1">
              Connect With Us
            </h3>

            <a
              href="mailto:fit@bvrit.ac.in"
              className="hover:text-pink-500 flex items-center gap-2 text-sm"
            >
              <FaEnvelope /> fit@bvrit.ac.in
            </a>

            <a
              href="tel:+917842070463"
              className="hover:text-pink-500 flex items-center gap-2 text-sm"
            >
              <FaPhone /> +91 78420 70463
            </a>

            <div className="flex gap-4 mt-2">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-blue-500 transition"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-500 hover:text-pink-500 transition"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-500 hover:text-sky-500 transition"
              >
                <FaTwitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 pt-4 border-t border-pink-200 text-center text-sm text-gray-500">
          © {currentYear} Female in Technology (FIT). All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
