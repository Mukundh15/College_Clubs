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
      className="relative w-full bg-gradient-to-br from-rose-50 via-white to-pink-50 overflow-x-hidden"
    >
      <Spotlight />

      <div className="relative z-20 text-gray-700">

        {/* HERO */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
          <img
            src="/FIT.png"
            alt="FIT Logo"
            className="w-80 md:w-[420px] mb-6 me-7"
          />

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold">
            <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
              Female in Technology
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-pink-500 font-medium max-w-4xl">
            A flagship student initiative dedicated to empowering women with
            confidence, competence, leadership, and equal opportunities in the
            evolving world of technology.
          </p>

          <Link to="/fit-events" className="mt-10">
            <BorderedButton>Explore FIT</BorderedButton>
          </Link>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <HeadingNText title="About Female in Technology (FIT)">
              Female in Technology (FIT) is a structured, student-driven
              initiative aimed at empowering women in engineering and computing
              disciplines through mentorship, awareness, and skill development.
            </HeadingNText>

            <div className="mt-12 bg-white/80 border border-pink-200 rounded-2xl p-10 shadow-lg">
              <p className="text-lg leading-relaxed mb-4">
                FIT was established to address the gender gap in technical fields
                by creating a supportive and inclusive ecosystem within the
                college. The initiative focuses on confidence-building,
                real-world exposure, and long-term career planning for women
                students.
              </p>
              <p className="text-lg leading-relaxed">
                Through curated learning paths, industry collaboration,
                peer-to-peer mentorship, and leadership opportunities, FIT
                ensures that students graduate not only with strong academic
                foundations but also with professional readiness and clarity.
              </p>
            </div>
          </div>
        </section>

        {/* VISION */}
        <section id="vision" className="py-28 px-6 bg-white/60">
          <div className="max-w-6xl mx-auto text-center">
            <HeadingNText title="Our Vision">
              To cultivate a campus culture where women confidently lead,
              innovate, and contribute to technological advancement.
            </HeadingNText>

            <div className="mt-12 bg-white/80 border border-pink-200 rounded-2xl p-10 shadow-lg">
              <p className="text-lg leading-relaxed">
                FIT envisions a future where gender is never a limitation to
                technical excellence or leadership. By nurturing talent at the
                academic level, the initiative aims to create innovators,
                problem-solvers, entrepreneurs, and leaders who shape the
                digital future responsibly.
              </p>
            </div>
          </div>
        </section>

        {/* MISSION */}
        <section id="mission" className="py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <HeadingNText title="Our Mission">
              To enable women students to develop strong technical foundations,
              leadership skills, and career clarity through continuous mentorship
              and exposure.
            </HeadingNText>

            <div className="mt-12 grid md:grid-cols-2 gap-10">
              <div className="bg-white/80 border border-pink-200 rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-pink-600 mb-3">
                  Academic & Technical Growth
                </h3>
                <p className="leading-relaxed">
                  FIT supports students through workshops, technical bootcamps,
                  learning roadmaps, and exposure to emerging technologies
                  beyond the classroom curriculum.
                </p>
              </div>

              <div className="bg-white/80 border border-pink-200 rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-purple-500 mb-3">
                  Career & Professional Development
                </h3>
                <p className="leading-relaxed">
                  The initiative provides guidance on internships,
                  scholarships, global programs, higher studies, and industry
                  expectations, enabling informed career decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section id="leadership" className="py-28 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <HeadingNText title="FIT Leadership & Coordination">
              The leadership team that drives the vision, execution, and growth of the
              Female in Technology initiative.
            </HeadingNText>

            <div className="mt-16 flex justify-center">
              <div className="bg-white/80 border border-pink-200 rounded-2xl shadow-xl p-10 max-w-md text-center">
                <img
                  src="/leader.jpg" // replace with actual image
                  alt="FIT Leader"
                  className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-pink-300 mb-6"
                />

                <h3 className="text-2xl font-bold text-pink-600">
                  Leader Name
                </h3>
                <p className="text-sm text-purple-500 font-medium mt-1">
                  FIT Lead / Student Coordinator
                </p>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  Responsible for planning, coordination, mentorship programs, and
                  representing FIT across institutional and industry platforms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* KEY FOCUS AREAS */}
        <section className="py-28 px-6 bg-white/60">
          <div className="max-w-6xl mx-auto text-center">
            <HeadingNText title="Key Focus Areas">
              Core pillars that guide all FIT initiatives and activities.
            </HeadingNText>

            <div className="mt-14 grid md:grid-cols-3 gap-10">
              {[
                [
                  "Technical Excellence",
                  "Hands-on exposure, workshops, competitions, and continuous learning.",
                ],
                [
                  "Mentorship & Guidance",
                  "Support from seniors, alumni, faculty, and industry professionals.",
                ],
                [
                  "Leadership & Confidence",
                  "Encouraging participation, communication, initiative, and ownership.",
                ],
              ].map(([t, d], i) => (
                <div
                  key={i}
                  className="bg-white/80 border border-pink-200 rounded-xl p-8 shadow-lg"
                >
                  <h3 className="text-xl font-bold text-pink-600 mb-3">
                    {t}
                  </h3>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROGRAMS */}
        <section id="programs" className="py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <HeadingNText title="Programs & Opportunities">
              National and global initiatives that support and uplift women in
              technology.
            </HeadingNText>

            <div
              className="mt-16"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto pb-8 scroll-smooth"
              >
                {[
                  ["Grace Hopper Celebration", "https://ghc.anitab.org/"],
                  ["Amazon WOW", "https://www.amazon.jobs/en/teams/amazon-wow"],
                  ["Flipkart Girls Wanna Code", "https://www.flipkartgrip.com/"],
                ].map(([name, link], i) => (
                  <div
                    key={i}
                    className="min-w-[320px] bg-white/90 border border-pink-200 rounded-2xl shadow-xl p-8 text-center"
                  >
                    <h3 className="text-lg font-semibold text-pink-600 mb-4">
                      {name}
                    </h3>
                    <p className="text-sm mb-4">
                      Awareness, mentorship, and opportunities designed
                      specifically to support women in technology careers.
                    </p>
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block bg-gradient-to-r from-pink-400 to-purple-400 text-white px-6 py-2 rounded-lg"
                    >
                      Learn More
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHY FIT */}
        <section id="why-fit" className="py-28 px-6 bg-white/60">
          <div className="max-w-6xl mx-auto text-center">
            <HeadingNText title="Why FIT Matters">
              Creating long-term impact beyond academics.
            </HeadingNText>

            <div className="mt-12 bg-white/80 border border-pink-200 rounded-2xl p-10 shadow-lg">
              <ul className="text-lg space-y-3 text-left max-w-4xl mx-auto">
                <li>• Builds confidence and technical identity among women</li>
                <li>• Encourages participation in national & global programs</li>
                <li>• Reduces hesitation in leadership and public speaking</li>
                <li>• Creates a strong peer and mentor support system</li>
                <li>• Aligns students with industry expectations early</li>
                <li>• Promotes inclusivity, growth, and innovation on campus</li>
              </ul>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default FIT;
