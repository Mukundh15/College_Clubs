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
      className="relative w-full bg-gradient-to-br from-[#6FA8DC]/10 via-white to-[#004F8B]/10 overflow-x-hidden"
    >
      <Spotlight />

      <div className="relative z-20 text-slate-700">

        {/* HERO */}
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">

          {/* subtle radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(111,168,220,0.15),transparent_65%)]" />

          {/* Logo */}
          <img
            src="/logo.png"
            alt="FIT Logo"
            className="w-[260px] sm:w-[340px] md:w-[440px] mb-6 drop-shadow-[0_0_32px_rgba(79,70,229,0.25)]"
          />

          {/* Tagline */}
          <h1 className="
            text-5xl
            sm:text-7xl
            md:text-8xl
            font-black
            tracking-tight
            bg-gradient-to-b from-[#6FA8DC] via-[#3E7FB3] to-[#004F8B]
            bg-clip-text text-transparent
          ">
            Female in Technology
          </h1>

          {/* Description */}
          {/* <p className="mt-6 max-w-4xl text-lg md:text-xl text-slate-300 leading-relaxed">
            A student-led research initiative focused on innovation, publications,
            patents, and academic excellence — empowering students to transform ideas
            into impactful research.
          </p> */}

          <p className="mt-5 text-sm text-[#004F8B] font-medium">
            A Specialized Community under Coding Brigade BVRIT
          </p>
          
          {/* Know More Button */}
          <div className="mt-5">
            <BorderedButton
              onClick={() => {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Know more
            </BorderedButton>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <HeadingNText title="About Female in Technology">
                FIT (Female in Technology) is a focused initiative under Coding Brigade BVRIT (CBB) dedicated to empowering women in technology. The club provides a supportive platform for female students to build technical skills, gain industry exposure, and access growth opportunities through mentorship, training, and professional guidance.
            </HeadingNText>

            <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-10 shadow-lg">
              <p className="text-lg leading-relaxed mb-4">
                FIT is a student-driven community that encourages confidence, leadership, and continuous growth among women aspiring to succeed in technology. The club supports participation in women-centric scholarships, industry programs, skill-building workshops, and mentorship initiatives, helping students bridge the gap between academic learning and real-world professional expectations.
              </p>
            </div>
          </div>
        </section>

        {/* OUR CORE */}
        <section className="py-28 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto text-center">
            <HeadingNText title="Our Core">
              The foundational pillars that define the FIT community and its purpose.
            </HeadingNText>

            <div className="mt-16 grid md:grid-cols-2 gap-12">
              {/* MISSION */}
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-[#004F8B] border-[#6FA8DC]/40 mb-4">
                  Our Mission
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  To empower female students by creating equal opportunities in technology through mentorship, skill development, and industry exposure. FIT aims to support women in building confidence, technical competence, and career readiness, enabling them to thrive in academic, professional, and leadership roles within the tech ecosystem.
                </p>
              </div>

              {/* VISION */}
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-[#004F8B] border-[#6FA8DC]/40 mb-4">
                  Our Vision
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  To build a strong and inclusive community of women in technology who lead with confidence, innovate with purpose, and contribute meaningfully to industry and society. We envision FIT as a platform that nurtures talent, bridges gender gaps in tech, and inspires the next generation of women technologists through sustained growth and opportunity.
                </p>
              </div>

              {/* WHAT WE DO */}
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-[#004F8B] border-[#6FA8DC]/40 mb-4">
                  What We Do
                </h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  FIT supports female students in their technical and professional journey by providing focused guidance, mentorship, and access to growth opportunities in technology.
                </p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-start">
                    <span className="text-[#004F8B] border-[#6FA8DC]/40 mr-2">•</span>
                    <span>Guide students toward women-centric scholarships & fellowships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#004F8B] border-[#6FA8DC]/40 mr-2">•</span>
                    <span>Provide mentorship for technical skills and career development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#004F8B] border-[#6FA8DC]/40 mr-2">•</span>
                    <span>Conduct workshops, talks, and awareness sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#004F8B] border-[#6FA8DC]/40 mr-2">•</span>
                    <span>Enable participation in corporate programs and leadership initiatives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#004F8B] border-[#6FA8DC]/40 mr-2">•</span>
                    <span>Promote collaboration, peer learning, and professional networking</span>
                  </li>
                </ul>
              </div>

              {/* OUR VALUES */}
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-[#004F8B] mb-4">
                  Our Values
                </h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The core principles that shape FIT’s approach to empowerment and growth.
                </p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-start">
                    <span className="text-[#004F8B] mr-2">•</span>
                    <span><strong>Empowerment:</strong> Enabling women to build confidence, take initiative, and pursue opportunities in technology without barriers.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#004F8B] mr-2">•</span>
                    <span><strong>Inclusivity & Opportunity:</strong> Promoting equal access to resources, programs, and platforms designed to support women in tech.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#004F8B] mr-2">•</span>
                    <span><strong>Continuous Growth:</strong> Encouraging lifelong learning, adaptability, and professional development in an evolving technological landscape.</span>
                  </li>
                </ul>
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
            <HeadingNText title="Minds Behind FIT">
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
                    src="/pallavi.jpg"
                    alt="Dr. L. Pallavi"
                    className="relative w-full h-full object-cover"
                  />
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#004F8B] border-[#6FA8DC]/40">
                  Dr. L. Pallavi
                </h3>

                <p className="text-sm text-slate-600 mt-1">
                  Chief Mentor – Female in Technology (FIT)
                </p>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed text-center">
                  Actively mentors students, supports initiatives for women in technology,
                  and plays a key role in shaping FIT’s programs and outreach.
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
                    src="/sreedevi.webp"
                    alt="Mrs. Ch. Sreedevi"
                    className="relative w-full h-full object-cover"
                  />
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#004F8B] border-[#6FA8DC]/40">
                  Mrs. Ch. Sreedevi
                </h3>

                <p className="text-sm text-slate-600 mt-1">
                  Mentorship Lead – Female in Technology (FIT)
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
            <div className="mt-16 flex flex-col md:flex-row justify-center gap-10">

              {/* CHAIRPERSON */}
              <div
                className="
                  relative bg-white
                  rounded-3xl
                  shadow-[0_20px_50px_rgba(0,79,139,0.18)]
                  p-10
                  border border-[#6FA8DC]/40
                  overflow-hidden
                  text-center
                  max-w-sm
                "
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#6FA8DC]/20 via-white to-[#004F8B]/15" />

                <div className="relative w-fit mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6FA8DC] to-[#004F8B] blur-md opacity-35" />
                  <img
                    src="/sowmyab.png"
                    alt="Chairperson"
                    className="relative w-36 h-36 rounded-full object-cover border-[5px] border-white shadow-lg"
                  />
                </div>

                <h3 className="text-2xl font-extrabold text-[#004F8B]">
                  Gadila Sowmya
                </h3>

                <p className="text-sm font-semibold mt-2 text-[#004F8B] tracking-wide">
                  Chairperson · FIT
                </p>

                <div className="w-16 h-1 bg-gradient-to-r from-[#6FA8DC] to-[#004F8B] rounded-full mx-auto my-4" />

                <p className="text-slate-600 text-sm leading-relaxed">
                  Leads the vision, strategy, and execution of FIT initiatives while
                  representing the community across institutional and industry platforms.
                </p>
              </div>

              {/* VICE CHAIRPERSON */}
              <div
                className="
                  relative bg-white
                  rounded-3xl
                  shadow-[0_20px_50px_rgba(0,79,139,0.15)]
                  p-10
                  border border-[#6FA8DC]/40
                  overflow-hidden
                  text-center
                  max-w-sm
                "
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#6FA8DC]/15 via-white to-[#004F8B]/10" />

                <div className="relative w-fit mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6FA8DC] to-[#004F8B] blur-md opacity-30" />
                  <img
                    src="/mouna.png"
                    alt="Vice Chairperson"
                    className="relative w-36 h-36 rounded-full object-cover border-[5px] border-white shadow-lg"
                  />
                </div>

                <h3 className="text-2xl font-extrabold text-[#004F8B]">
                  SreeMouna Gopireddy
                </h3>

                <p className="text-sm font-semibold mt-2 text-[#004F8B] tracking-wide">
                  Vice Chairperson · FIT
                </p>

                <div className="w-16 h-1 bg-gradient-to-r from-[#6FA8DC] to-[#004F8B] rounded-full mx-auto my-4" />

                <p className="text-slate-600 text-sm leading-relaxed">
                  Supports leadership operations, coordination, and mentoring initiatives,
                  ensuring smooth execution and community engagement.
                </p>
              </div>
            </div>

            {/* TEAM MEMBERS */}
            <div className="mt-24">
              <h3 className="text-2xl font-semibold text-slate-700 mb-12 tracking-wide">
                Core FIT Team
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12">
                {[
                  { name: "Dannaram Videeksha", img: "/videeksha.png" },
                  { name: "Beere Adbhutha", img: "/Adbutha.png" },
                  { name: "Kasani Hansika Goud", img: "/hansika.png" },
                  { name: "Boddupally Moksha", img: "/moksha.png" },
                  { name: "Chanagari Nandini", img: "/nandhini.png" },
                  { name: "E Siri Chandana", img: "/siri.png" },
                  { name: "Mogili Sowmya Reddy", img: "/sowmyac.png" },
                  { name: "Vallepu Sai Soumya", img: "/SowmyaV.png" },
                  { name: "Sravya Chowdary", img: "/sravya.png" },
                  { name: "Vinuthna Reddy", img: "/vinuthna.png" },
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
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6FA8DC] to-[#004F8B] blur-md opacity-30" />
                      <img
                        src={member.img}
                        alt={member.name}
                        className="
                          relative w-32 h-32 rounded-full object-cover
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

        {/* KEY HIGHLIGHTS */}
        <section className="py-28 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto text-center">
            <HeadingNText title="Key Highlights">
              Empowering women through opportunity, mentorship, and industry exposure.
            </HeadingNText>

            <div className="mt-16 grid md:grid-cols-3 gap-8">
              {/* Scholarship & Fellowship Support */}
              <div className="bg-white border border-slate-200 rounded-2xl p-8 transition-all duration-300 hover:border-slate-300 hover:shadow-xl hover:shadow-indigo-500/10 group">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-indigo-500/10 border border-indigo-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 border-[#6FA8DC]/40 bg-[#6FA8DC]/15 text-[#004F8B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#004F8B] mb-4">Scholarship & Fellowship Support</h3>
                <p className="text-slate-700 leading-relaxed">
                  Guidance and awareness for women-centric scholarships and fellowship programs, enabling students to access national and global opportunities in technology.
                </p>
              </div>

              {/* Industry Programs */}
              <div className="bg-white border border-slate-200 rounded-2xl p-8 transition-all duration-300 hover:border-slate-300 hover:shadow-xl hover:shadow-indigo-500/10 group">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-indigo-500/10 border border-indigo-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#004F8B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#004F8B] mb-4">Industry Programs</h3>
                <p className="text-slate-700 leading-relaxed">
                  Facilitated participation in leading corporate initiatives and women-focused industry programs, providing real-world exposure and professional insight.
                </p>
              </div>

              {/* Mentorship & Guidance */}
              <div className="bg-white border border-slate-200 rounded-2xl p-8 transition-all duration-300 hover:border-slate-300 hover:shadow-xl hover:shadow-indigo-500/10 group">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-indigo-500/10 border border-indigo-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#004F8B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#004F8B] mb-4">Mentorship & Guidance</h3>
                <p className="text-slate-700 leading-relaxed">
                  Personalized mentorship for technical growth, career planning, and leadership development, supporting students at every stage of their journey.
                </p>
              </div>

              {/* Skill Development */}
              <div className="bg-white border border-slate-200 rounded-2xl p-8 transition-all duration-300 hover:border-slate-300 hover:shadow-xl hover:shadow-indigo-500/10 group">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-indigo-500/10 border border-indigo-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#004F8B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#004F8B] mb-4">Skill Development</h3>
                <p className="text-slate-700 leading-relaxed">
                  Hands-on workshops and training sessions focused on building strong technical, professional, and problem-solving skills.
                </p>
              </div>

              {/* Leadership & Confidence */}
              <div className="bg-white border border-slate-200 rounded-2xl p-8 transition-all duration-300 hover:border-slate-300 hover:shadow-xl hover:shadow-indigo-500/10 group">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-indigo-500/10 border border-indigo-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#004F8B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#004F8B] mb-4">Leadership & Confidence</h3>
                <p className="text-slate-700 leading-relaxed">
                  Opportunities that encourage leadership, collaboration, and confidence-building among women in technology through events and community initiatives.
                </p>
              </div>

              {/* Inclusive Tech Community */}
              <div className="bg-white border border-slate-200 rounded-2xl p-8 transition-all duration-300 hover:border-slate-300 hover:shadow-xl hover:shadow-indigo-500/10 group">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-indigo-500/10 border border-indigo-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#004F8B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#004F8B] mb-4">Inclusive Tech Community</h3>
                <p className="text-slate-700 leading-relaxed">
                  A supportive and inclusive ecosystem that promotes peer learning, collaboration, and long-term growth for women aspiring to excel in technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY FIT */}
        <section id="why-fit" className="py-28 px-6 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-6xl mx-auto">
            <HeadingNText title="Why FIT Matters">
              Building long-term impact beyond the classroom.
            </HeadingNText>

            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white border border-indigo-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-xl bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#004F8B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#004F8B] mb-3">Confidence & Leadership</h3>
                <p className="text-slate-700 leading-relaxed">
                  FIT builds confidence and leadership identity among women in technology, empowering them to take on challenging roles and responsibilities.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-violet-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-xl bg-violet-500/10 group-hover:bg-violet-500/20 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#004F8B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#004F8B] mb-3">Global Opportunities</h3>
                <p className="text-slate-700 leading-relaxed">
                  FIT encourages participation in national and global programs, opening doors to international exposure and career opportunities.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white border border-purple-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#004F8B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#004F8B] mb-3">Mentorship Networks</h3>
                <p className="text-slate-700 leading-relaxed">
                  FIT strengthens mentorship and peer networks, creating a supportive community that guides members throughout their journey.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white border border-indigo-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-xl bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#004F8B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#004F8B] mb-3">Industry Alignment</h3>
                <p className="text-slate-700 leading-relaxed">
                  FIT aligns students with real industry expectations, preparing them for successful careers in the technology sector.
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-white border border-violet-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-xl bg-violet-500/10 group-hover:bg-violet-500/20 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#004F8B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#004F8B] mb-3">Campus Innovation</h3>
                <p className="text-slate-700 leading-relaxed">
                  FIT promotes inclusivity and innovation on campus, fostering an environment where all students can thrive.
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-white border border-purple-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#004F8B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#004F8B] mb-3">Lasting Impact</h3>
                <p className="text-slate-700 leading-relaxed">
                  FIT creates lasting impact beyond the classroom, shaping the future of women in technology for years to come.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="relative py-24 px-6 bg-gradient-to-b from-[#6FA8DC]/10 via-white to-[#004F8B]/10"
        >
          <div className="max-w-6xl mx-auto">
            <HeadingNText title="Contact Female in Technology">
              {/* Reach out for mentorship, collaboration, or FIT initiatives. */}
            </HeadingNText>

            <div className="mt-16 grid md:grid-cols-[1.1fr_1.1fr] gap-12 items-start">
              {/* LEFT: OFFICIAL INFO (NO BOX) */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-semibold tracking-[0.25em] text-[#004F8B] uppercase mb-3">
                    Official Communication
                  </h3>
                  <h4 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-3">
                    Talk to the FIT core team.
                  </h4>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-xl">
                    For mentorship, workshops, events, or institutional
                    collaborations, connect with Female in Technology through these
                    verified channels. Responses are typically within 1–2 working days.
                  </p>
                </div>

                <div className="space-y-5 text-sm md:text-base">
                  {/* EMAIL */}
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#6FA8DC]/15 text-[#004F8B]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wide text-slate-500">
                        Email
                      </span>
                      <div>
                        <a
                          href="mailto:fit@bvrit.ac.in"
                          className="text-[#004F8B] font-medium hover:text-[#004F8B] hover:underline"
                        >
                          fit@bvrit.ac.in
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* PHONE */}
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#6FA8DC]/15 text-[#004F8B]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wide text-slate-500">
                        Phone
                      </span>
                      <div>
                        <a
                          href="tel:+916305055156"
                          className="font-medium text-slate-700 hover:text-[#004F8B]"
                        >
                          +91 63050 55156
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* LOCATION */}
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#6FA8DC]/15 text-[#004F8B]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wide text-slate-500">
                        Location
                      </span>
                      <div className="font-medium text-slate-700">
                        B V Raju Institute of Technology, Narsapur
                      </div>
                    </div>
                  </div>

                  {/* SOCIAL ICONS – EXACTLY BELOW LOCATION */}

                <div className="pt-4 flex items-center gap-4">
          <a
            href="https://www.instagram.com/fit_bvrit/"
            target="_blank"
            rel="noreferrer noopener"
            className="group p-2.5 rounded-full border border-pink-500/40 bg-pink-500/10 flex items-center justify-center text-pink-400 transition-all duration-300 hover:bg-pink-500/20 hover:text-pink-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25"
            aria-label="Female in Technology on Instagram"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/FIT-BVRIT"
            target="_blank"
            rel="noreferrer noopener"
            className="group p-2.5 rounded-full border border-slate-500/40 bg-slate-500/10 flex items-center justify-center text-slate-400 transition-all duration-300 hover:bg-slate-500/20 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-slate-500/25"
            aria-label="Female in Technology on GitHub"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/fit-bvrit/"
            target="_blank"
            rel="noreferrer noopener"
            className="group p-2.5 rounded-full border border-indigo-500/40 bg-indigo-500/10 flex items-center justify-center text-[#004F8B] transition-all duration-300 hover:bg-indigo-500/20 hover:text-[#004F8B] hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/25"
            aria-label="Female in Technology on LinkedIn"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>

                </div>
              </div>

              {/* RIGHT: CONTACT FORM */}
              <div className="relative">
                <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-indigo-500/15 via-purple-500/10 to-indigo-500/15 blur-xl opacity-80" />
                <form
                  action="https://formspree.io/f/xnjqrzre"
                  method="POST"
                  className="bg-white/70 border border-slate-200/80 rounded-3xl p-8 md:p-9 shadow-[0_18px_60px_rgba(15,23,42,0.1)] flex flex-col gap-6"
                >
                  <div className="flex items-center gap-2 text-[#004F8B] mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    <span className="text-sm font-medium tracking-wide uppercase">
                      Send a Message
                    </span>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1.5">
                        Full Name
                      </label>
                      <input
                        name="name"
                        required
                        className="w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1.5">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        required
                        className="w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 text-sm text-slate-800 outline-none transition resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <BorderedButton
                      type="submit"
                      className="w-full justify-center gap-2 text-sm font-medium group"
                    >
                      <span>Submit Message</span>
                      <svg
                        className="h-4 w-4 translate-x-0 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </BorderedButton>
                  </div>
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
