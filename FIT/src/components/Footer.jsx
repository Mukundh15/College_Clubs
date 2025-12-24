import {
  FaLinkedin,
  FaInstagram,
  FaGithub
} from "react-icons/fa";


const Footer = () => {
  const currentYear = new Date().getFullYear();


  return (
    <footer className={`w-full border-t border-slate-200 bg-white text-slate-700`}>
      <div className="max-w-7xl mx-auto px-6 py-8">


        <div className="flex flex-col gap-y-6 items-center justify-center text-center 
                        md:flex-row md:items-center md:justify-between md:text-left">


          {/* Logo */}
          <div className="flex items-center gap-4 justify-center">
            <img src="/FIT.png" alt="FIT Logo" className="w-14 h-14 object-contain" />
            <h1 className="text-3xl font-bold text-indigo-600" style={{ fontFamily: 'Revamped, sans-serif' }}>
              Female in Technology
            </h1>
          </div>


          {/* Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-base">
            <a href="#top" className="transition text-slate-700 hover:text-indigo-600">Home</a>
            <a href="#about" className="transition text-slate-700 hover:text-indigo-600">About</a>
            <a href="#mission" className="transition text-slate-700 hover:text-indigo-600">Mission</a>
            <a href="#leadership" className="transition text-slate-700 hover:text-indigo-600">Leadership</a>
            <a href="#contact" className="transition text-slate-700 hover:text-indigo-600">Contact</a>
          </div>


          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/company/your-fit-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="transition text-slate-700 hover:text-indigo-600"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/your_fit_instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="transition text-slate-700 hover:text-pink-500"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/your-fit-github"
              target="_blank"
              rel="noopener noreferrer"
              className="transition text-slate-700 hover:text-gray-700"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          </div>


          {/* Contact Info */}
          {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm">
            <a
              href="tel:+917842070463"
              className={`flex items-center gap-2 transition ${theme === 'dark' ? 'text-gray-300 hover:text-[#4cdef5]' : 'text-gray-700 hover:text-blue-500'
                }`}
            >
              <FaPhone className="w-4 h-4" />
              +91 78420 70463
            </a>
            <a
              href="mailto:fit@bvrit.ac.in"
              className={`flex items-center gap-2 transition ${theme === 'dark' ? 'text-gray-300 hover:text-[#4cdef5]' : 'text-gray-700 hover:text-blue-500'
                }`}
            >
              <FaEnvelope className="w-4 h-4" />
              fit@bvrit.ac.in
            </a>
          </div> */}


        </div>


        <div className="mt-6 pt-4 border-t border-slate-200 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Female in Technology, BVRIT. All rights reserved.
        </div>


      </div>
    </footer>
  );
};

export default Footer;
