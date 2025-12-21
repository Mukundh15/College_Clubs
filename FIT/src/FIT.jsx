import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import BorderedButton from "./components/BorderedButton";
import HeadingNText from "./components/HeadingNText";
import { Spotlight } from "./components/Spotlight";

function FIT() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const amount = el.clientWidth;
    el.scrollBy({
      left: dir === "left" ? -amount : amount,
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
    <div
      id="top"
      className="relative w-full bg-gradient-to-br from-slate-50 via-white to-indigo-50 overflow-x-hidden"
    >
      <Spotlight />

      <div className="relative z-20 text-slate-700">

        {/* HERO */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
          <img
            src="/FIT.png"
            alt="FIT Logo"
            className="w-80 md:w-[420px] mb-8 me-8"
          />

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold">
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-800 bg-clip-text text-transparent">
              Female in Technology
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-2xl text-orange-300 animate-pulse font-medium tracking-wide max-w-3xl">
            Women. Technology. Leadership.
          </p>

          <p className="mt-6 text-lg md:text-2xl text-slate-600 font-medium max-w-4xl">
            A flagship student initiative focused on leadership, innovation,
            and equal opportunity in the technology ecosystem.
          </p>

          <Link to="/" className="mt-10">
            <BorderedButton>Know More</BorderedButton>
          </Link>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <HeadingNText title="About Female in Technology (FIT)">
                FIT (Female in Technology) is a dedicated initiative under
                Coding Brigade BVRIT (CBB) that empowers female students through
                equal access to opportunities, mentorship, technical exposure,
                and leadership development in technology.
            </HeadingNText>

            <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-10 shadow-lg">
              <p className="text-lg leading-relaxed mb-4">
                FIT is a student-driven community that nurtures confidence,
                competence, and career readiness among women in technology. The
                club bridges the gender gap in tech by creating a supportive
                ecosystem where students learn, grow, and excel through
                real-world exposure, scholarships, industry programs, and
                collaborative learning.
              </p>
              <p className="text-lg leading-relaxed">
                FIT operates under the vision of Coding Brigade BVRIT, aligning
                technical excellence with inclusivity and empowerment.
              </p>
            </div>
          </div>
        </section>

        {/* VISION */}
        <section id="vision" className="py-28 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto text-center">
            <HeadingNText title="Our Vision">
              To cultivate a campus culture where women lead innovation,
              contribute confidently, and shape the future of technology.
            </HeadingNText>

            <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-10 shadow-lg">
              <p className="text-lg leading-relaxed">
                  FIT aims to empower female students by creating equal
                  opportunities in technology through mentorship, skill
                  development, and industry exposure, building confidence,
                  competence, and long-term career readiness.
              </p>
            </div>
          </div>
        </section>

        {/* MISSION */}
        <section id="mission" className="py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <HeadingNText title="Our Mission">
              To empower women students with strong technical foundations,
              leadership skills, and informed career pathways.
            </HeadingNText>

            <div className="mt-12 grid md:grid-cols-2 gap-10">
              <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-indigo-600 mb-3">
                  Academic & Technical Excellence
                </h3>
                <p>
                  Workshops, bootcamps, competitions, and exposure to emerging
                  technologies beyond the curriculum.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-violet-600 mb-3">
                  Career & Professional Readiness
                </h3>
                <p>
                  Guidance on internships, scholarships, industry programs,
                  higher studies, and professional expectations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GUIDING PILLARS */}
        <section
          id="guiding-pillars"
          className="py-28 px-6 bg-white/60"
        >
          <div className="max-w-6xl mx-auto text-center">
            <HeadingNText title="Guiding Lights of FIT">
              With their constant guidance, encouragement, and academic leadership,
              these mentors have been the backbone of the Female in Technology initiative,
              inspiring students to grow with confidence and purpose.
            </HeadingNText>

            <div className="mt-16 flex flex-col sm:flex-row justify-center items-start gap-14">

              {/* PILLAR 1 */}
              <div className="flex flex-col items-center max-w-sm">
                <div
                  className="
                    relative w-[280px] h-[360px]
                    rounded-2xl overflow-hidden
                    bg-white
                    border border-indigo-100
                    shadow-[0_20px_50px_rgba(79,70,229,0.15)]
                  "
                >
                  {/* Soft background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />

                  <img
                    src="/madhu_babu.jpg"
                    alt="Dr. Ch. Madhu Babu"
                    className="relative w-full h-full object-cover"
                  />
                </div>

                <h3 className="mt-5 text-xl font-bold text-indigo-700">
                  Dr. Ch. Madhu Babu
                </h3>

                <p className="text-sm text-slate-600 mt-1">
                  Head of Department – CSE
                </p>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed text-center">
                  Provides strategic direction, academic mentorship, and continuous
                  support to ensure FIT aligns with institutional excellence and
                  student growth.
                </p>
              </div>

              {/* PILLAR 2 */}
              <div className="flex flex-col items-center max-w-sm">
                <div
                  className="
                    relative w-[280px] h-[360px]
                    rounded-2xl overflow-hidden
                    bg-white
                    border border-indigo-100
                    shadow-[0_20px_50px_rgba(79,70,229,0.15)]
                  "
                >
                  {/* Soft background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />

                  <img
                    src="/pallavi.jpg"
                    alt="Dr. L. Pallavi"
                    className="relative w-full h-full object-cover"
                  />
                </div>

                <h3 className="mt-5 text-xl font-bold text-indigo-700">
                  Dr. L. Pallavi
                </h3>

                <p className="text-sm text-slate-600 mt-1">
                  Associate Head of Department – CSE
                </p>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed text-center">
                  Actively mentors students, supports initiatives for women in technology,
                  and plays a key role in shaping FIT’s programs and outreach.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section id="leadership" className="py-28 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto text-center">
            <HeadingNText title="FIT Leadership & Coordination">
              Student leadership that drives vision, execution, and impact.
            </HeadingNText>

            {/* MAIN LEADER */}
            <div className="mt-16 flex justify-center">
              <div
                className="
                  relative bg-white
                  rounded-3xl
                  shadow-[0_20px_50px_rgba(79,70,229,0.15)]
                  p-10 max-w-md
                  border border-indigo-100
                  overflow-hidden
                "
              >
                {/* Decorative gradient ring */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />

                {/* Avatar */}
                <div className="relative w-fit mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 blur-md opacity-40" />
                  <img
                    src="/sowmyab.png"
                    alt="FIT Lead"
                    className="
                      relative w-40 h-40
                      rounded-full object-cover
                      border-[5px] border-white
                      shadow-lg
                    "
                  />
                </div>

                {/* Name */}
                <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  Gadila Sowmya
                </h3>

                {/* Role */}
                <p className="text-sm font-semibold mt-2 text-indigo-500 tracking-wide">
                  FIT Lead · Student Coordinator
                </p>

                {/* Divider */}
                <div className="w-16 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mx-auto my-4" />

                {/* Description */}
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Leads planning, coordination, and mentorship initiatives while
                  representing FIT across institutional and industry platforms,
                  ensuring inclusive growth and impactful execution.
                </p>
              </div>
            </div>

            {/* TEAM MEMBERS */}
            <div className="mt-24">
              {/* Section Title */}
              <h3 className="text-2xl font-semibold text-slate-700 mb-12 tracking-wide">
                Core FIT Team
              </h3>

              {/* Team Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12">
                {[
                  { name: "Dannaram Videeksha", img: "/videeksha.jpg" },
                  { name: "SreeMouna Gopireddy", img: "/mouna.jpg" },
                  { name: "Beere Adbhutha", img: "/Adbutha.png" },
                  { name: "Kasani Hansika Goud", img: "/hansika.png" },
                  { name: "Boddupally Moksha", img: "/moksha.jpeg" },
                  { name: "Chanagari Nandini", img: "/nandhini.png" },
                  { name: "E Siri Chandana", img: "/siri.png" },
                  { name: "Mogili Sowmya Reddy", img: "/sowmyac.png" },
                  { name: "Vallepu Sai Soumya", img: "/SowmyaV.jpg" },
                  { name: "Sravya Chowdary", img: "/sravya.jpeg" },
                ].map((member, index) => (
                  <div
                    key={index}
                    className="
                      flex flex-col items-center text-center
                      transition-transform duration-300
                      hover:-translate-y-2
                    "
                  >
                    {/* Image Wrapper */}
                    <div className="relative mb-4">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-300 to-purple-300 blur-md opacity-40" />
                      <img
                        src={member.img}
                        alt={member.name}
                        className="
                          relative w-28 h-28 rounded-full object-cover
                          border-[3px] border-white
                          shadow-md
                        "
                      />
                    </div>

                    {/* Name */}
                    <p className="text-sm font-semibold text-slate-700 leading-snug">
                      {member.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHY FIT */}
        <section id="why-fit" className="py-28 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <HeadingNText title="Why FIT Matters">
              Building long-term impact beyond the classroom.
            </HeadingNText>

            <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-10 shadow-lg">
              <ul className="text-lg space-y-3 text-left max-w-4xl mx-auto">
                <li>• Builds confidence and leadership identity</li>
                <li>• Encourages participation in national & global programs</li>
                <li>• Strengthens mentorship and peer networks</li>
                <li>• Aligns students with real industry expectations</li>
                <li>• Promotes inclusivity and innovation on campus</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="py-28 px-6 bg-slate-50 border-t border-slate-200"
        >
          <div className="max-w-6xl mx-auto">
            <HeadingNText title="Contact Female in Technology">
              Have questions, ideas, or collaboration proposals?  
              The FIT team would love to hear from you.
            </HeadingNText>

            <div className="mt-16 grid md:grid-cols-2 gap-14 items-start">

              {/* LEFT – INFO + SOCIAL */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-indigo-600">
                    Get in Touch
                  </h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Reach out to the Female in Technology initiative for mentorship,
                    events, partnerships, or general queries related to women in tech.
                  </p>
                </div>

                {/* CONTACT DETAILS */}
                <div className="space-y-3 text-slate-700">
                  <p>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:fit@bvrit.ac.in"
                      className="text-indigo-600 hover:underline"
                    >
                      fit@bvrit.ac.in
                    </a>
                  </p>

                  <p>
                    <strong>Phone:</strong>{" "}
                    <a
                      href="tel:+917842070463"
                      className="text-indigo-600 hover:underline"
                    >
                      +91 78420 70463
                    </a>
                  </p>

                  <p>
                    <strong>Location:</strong><br />
                    B V Raju Institute of Technology,  
                    Narsapur, Telangana
                  </p>
                </div>

                {/* SOCIAL LINKS */}
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">
                    Follow & Connect
                  </h4>

                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/your_fit_instagram"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 px-5 py-3 rounded-xl
                                bg-gradient-to-r from-pink-500 to-rose-500
                                text-white font-medium shadow-md
                                hover:scale-105 transition"
                    >
                      📸 Instagram
                    </a>

                    <a
                      href="https://www.linkedin.com/company/your-fit-linkedin"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 px-5 py-3 rounded-xl
                                bg-gradient-to-r from-blue-600 to-indigo-600
                                text-white font-medium shadow-md
                                hover:scale-105 transition"
                    >
                      💼 LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* RIGHT – CONTACT FORM */}
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-10">
                <h3 className="text-xl font-bold text-slate-800 mb-6">
                  Send Us a Message
                </h3>

                <form
                  action="https://formspree.io/f/xpqarvrj"
                  method="POST"
                  className="space-y-5"
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300
                              focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300
                              focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />

                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300
                              focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-500
                              text-white py-3 rounded-lg font-semibold
                              hover:opacity-90 transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default FIT;
