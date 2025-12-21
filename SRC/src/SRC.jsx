import React, { useRef, useEffect, useState } from "react";
import Footer from "./components/Footer";
import HeadingNText from "./components/HeadingNText";
import { Spotlight } from "./components/Spotlight";

function SRC() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) scroll("right");
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div id="top" className="relative w-full bg-black text-white overflow-x-hidden">
      <Spotlight />

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-wide bg-gradient-to-b from-slate-100 to-slate-400 bg-clip-text text-transparent">
          SRC
        </h1>
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-sky-400">
          Student Research Club
        </h2>

        <p className="mt-8 max-w-4xl text-lg md:text-xl text-slate-300 leading-relaxed">
          A student-led research initiative focused on innovation, publications,
          patents, and academic excellence — empowering students to transform
          ideas into impactful research.
        </p>

        <p className="mt-4 text-sm text-slate-400">
          A Specialized Research Wing under Coding Brigade BVRIT
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <HeadingNText title="About SRC">
            The Student Research Club (SRC) is a dedicated platform designed to
            foster a strong research culture among students by providing
            mentorship, structured guidance, and exposure to real-world research
            practices.
          </HeadingNText>

          <div className="mt-12 bg-slate-900/80 border border-slate-800 rounded-2xl p-10 leading-relaxed text-slate-300">
            SRC bridges the gap between academic learning and advanced research
            by supporting students in research paper publications, patent
            development, interdisciplinary innovation, and participation in
            national and international conferences.
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-28 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-sky-400 mb-4">
              Our Mission
            </h3>
            <p className="text-slate-300 leading-relaxed">
              To cultivate a strong research mindset among students by guiding
              them through ideation, methodology, experimentation, and
              publication — preparing them for higher studies and research-driven
              careers.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-sky-400 mb-4">
              Our Vision
            </h3>
            <p className="text-slate-300 leading-relaxed">
              To establish SRC as a center of excellence for student research,
              innovation, and scholarly contribution with global academic
              relevance.
            </p>
          </div>
        </div>
      </section>

      {/* RESEARCH DOMAINS */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <HeadingNText title="Research Domains">
            SRC encourages interdisciplinary research across core and emerging
            areas of technology.
          </HeadingNText>

          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {[
              ["AI & Machine Learning", "Deep learning, NLP, computer vision, data-driven intelligence"],
              ["Systems & Software", "Cloud computing, cybersecurity, distributed systems"],
              ["Interdisciplinary Research", "Tech for healthcare, agriculture, sustainability"],
            ].map(([title, desc], i) => (
              <div
                key={i}
                className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-left"
              >
                <h4 className="text-lg font-semibold text-sky-400 mb-3">
                  {title}
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FACULTY MENTORS */}
      <section id="mentors" className="py-28 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto text-center">
          <HeadingNText title="Faculty Mentors & Academic Guidance">
            SRC is guided by experienced faculty whose mentorship ensures academic
            rigor, research ethics, and long-term vision.
          </HeadingNText>

          <div className="mt-20 grid md:grid-cols-2 gap-16 justify-center">
            
            {/* Dr. Madhu Babu */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 shadow-lg">
              <img
                src="/madhu_babu.jpg"
                alt="Dr. Ch. Madhu Babu"
                className="w-48 h-56 mx-auto object-cover rounded-xl border border-slate-700"
              />

              <h3 className="mt-6 text-2xl font-bold text-sky-400">
                Dr. Ch. Madhu Babu
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                Professor & Head of Department, CSE
              </p>

              <p className="mt-4 text-slate-300 leading-relaxed text-sm">
                Provides strategic direction, academic leadership, and mentorship
                for advanced research initiatives, publications, and institutional
                collaborations.
              </p>
            </div>

            {/* Dr. Pallavi */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 shadow-lg">
              <img
                src="/pallavi.jpg"
                alt="Dr. L. Pallavi"
                className="w-48 h-56 mx-auto object-cover rounded-xl border border-slate-700"
              />

              <h3 className="mt-6 text-2xl font-bold text-sky-400">
                Dr. L. Pallavi
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                Associate Head of Department, CSE
              </p>

              <p className="mt-4 text-slate-300 leading-relaxed text-sm">
                Actively mentors students in research methodology, paper writing,
                and interdisciplinary innovation with academic excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE STUDENT TEAM */}
      <section id="team" className="py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <HeadingNText title="SRC Core Student Team">
            The student coordinators responsible for execution, research activities,
            and academic coordination within SRC.
          </HeadingNText>

          <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
            {[
              { name: "Nikhil Mamilla", img: "/nikhil.png"},
              { name: "Gadila Sowmya", img: "/sowmyab.png"},
              { name: "Beere Adbhutha", img: "/Adbutha.png"},
              { name: "Amara Shivateja", img: "/amara.png"},
              { name: "Dubasi Mukundh", img: "/mukundh.png"},
            ].map((member, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-slate-900 border border-slate-800 rounded-xl p-6"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-28 h-28 rounded-full object-cover border border-slate-700"
                />
                <h4 className="mt-4 text-sm font-semibold text-slate-200">
                  {member.name}
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-28 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <HeadingNText title="Key Highlights">
            SRC outcomes and academic impact.
          </HeadingNText>

          <ul className="mt-12 grid sm:grid-cols-2 gap-6 text-slate-300">
            {[
              "Research paper publications in reputed journals",
              "Patent ideation and filing guidance",
              "IEEE & international conference support",
              "Advanced project mentoring",
              "Exposure to formal research methodologies",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-sky-400">•</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <HeadingNText title="Contact Student Research Club">
            Reach out for research mentorship, academic collaboration, or SRC
            initiatives.
          </HeadingNText>

          <div className="mt-20 grid md:grid-cols-2 gap-16 items-start">
            
            {/* LEFT: CONTACT INFO */}
            <div className="space-y-10">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-sky-400 mb-4">
                  Official Communication
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  For research guidance, publications, patents, or institutional
                  collaborations, connect with SRC through the official channels
                  below.
                </p>

                <div className="space-y-4 text-slate-300 text-sm">
                  <p>
                    <span className="text-slate-400">Email:</span>{" "}
                    <span className="text-sky-400">src@bvrit.ac.in</span>
                  </p>
                  <p>
                    <span className="text-slate-400">Phone:</span>{" "}
                    +91 78420 70463
                  </p>
                  <p>
                    <span className="text-slate-400">Location:</span>{" "}
                    BVRIT Hyderabad College of Engineering for Women
                  </p>
                </div>
              </div>

              {/* SOCIAL LINKS */}
              <div className="grid grid-cols-2 gap-6">
                <a
                  href="https://www.linkedin.com/company/coding-brigade-bvrit"
                  target="_blank"
                  rel="noreferrer"
                  className="group bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-sky-500/40 transition"
                >
                  <p className="text-slate-400 text-xs mb-1">Professional Network</p>
                  <p className="text-sky-400 font-semibold group-hover:underline">
                    LinkedIn →
                  </p>
                </a>

                <a
                  href="https://www.instagram.com/coding_brigade"
                  target="_blank"
                  rel="noreferrer"
                  className="group bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-pink-500/40 transition"
                >
                  <p className="text-slate-400 text-xs mb-1">Community Updates</p>
                  <p className="text-pink-400 font-semibold group-hover:underline">
                    Instagram →
                  </p>
                </a>
              </div>
            </div>

            {/* RIGHT: CONTACT FORM */}
            <form
              action="https://formspree.io/f/xpqarvrj"
              method="POST"
              className="bg-slate-900 border border-slate-800 rounded-2xl p-10 space-y-6"
            >
              <h3 className="text-xl font-semibold text-sky-400">
                Send a Message
              </h3>

              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  Full Name
                </label>
                <input
                  name="name"
                  required
                  className="w-full bg-black border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:border-sky-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-black border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:border-sky-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full bg-black border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:border-sky-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-sky-500 text-black font-semibold py-3 rounded-lg hover:bg-sky-400 transition"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default SRC;
