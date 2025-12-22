import React, { useRef, useEffect, useState } from "react";
import Footer from "./components/Footer";
import HeadingNText from "./components/HeadingNText";
import { Spotlight } from "./components/Spotlight";

function SRC() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const translateXRef = useRef(0);
  const [isMobile, setIsMobile] = useState(false);


  const researchPapers = [
    {
      title: "AuraCheck: An AI-Powered Platform for Real-Time Mental Health Insights and Support",
      authors: "Srinuvasarao Sanapala,M. Nikhil,P. Anusha,P. Rikwith Reddy,P. Akshay,L. Pallavi",
      link: "https://xplorestaging.ieee.org/document/11176774",
      FullPaper:"https://drive.google.com/file/d/1WePEx6iM7ezhhT9rudd9U2JBa-mmllMP/view?usp=sharing",
    },
    {
      title: "PARIJANA, an AI-based Humanoid agent for Enhancing Consumer Experience in Insurance Claims.",
      authors: "Ch. Madhu Babu,L. Pallavi,Mukundh Dubasi,Divyanshi Ontipuli,Kaki Vaishnavi,Kvvn Sai Bhargav",
      link: "https://ieeexplore.ieee.org/document/11176629",
      FullPaper:"https://drive.google.com/file/d/1tkR43Dm8Ifcj9xdY1n1CnAzX65YbBuuj/view?usp=drive_link",
    },
    {
      title: "YOLO-Powered Deep Learning Framework for Smart Drone Surveillance in Emergency Rescue Operation",
      authors: "R. Pitchai, T. Subba Reddy, Boddu Sanjana, Rishi Sri Dopathi, Dannaram Videeksha, Challagolla Sravya Chowdary",
      link: "https://ieeexplore.ieee.org/document/11089883",
      FullPaper:"https://drive.google.com/file/d/1Y4PXqVwY5FjHrtl18WOi190JTBtMzypt/view?usp=drivesdk",
    },
    {
      title: "CARE CONNECT: Revolutionizing Healthcare through AI",
      authors: "Ch. Madhu Babu,Nuthanakanti Bhaskar,Bondalakunta Bhavika,Amara Shivateja,Varun Annabeemoju,Swetha Chowdari",
      link: "https://ieeexplore.ieee.org/document/11176716",
      FullPaper:"https://drive.google.com/file/d/11PvgB_4AEnEnGXYpd5oHBT369_NPuCCV/view?usp=drivesdk",
    },
    {
      title: "A Text-Based AI Chatbot for Emotional Support in Student Mental Health",
      authors: "Satish Babu Thunuguntla,Poduri Sesha Sai Sathwik,Nannapaneni Lalitya,Penumatcha Jaya Surya,Kaluvala Sai Kiran,L. Pallavi",
      link: "https://ieeexplore.ieee.org/document/11089562",
      FullPaper:"https://drive.google.com/file/d/1fHmDJ3Te0B_Y2LvR2048itZwj4iF5oAq/view?usp=drivesdk",
    },
    {
      title: "BookXchange-An AI Driven Book Trade Hub",
      authors: "Jagadeesh Dandu,  Gadila Sowmya,U. Eesha Priya, Gopireddy SreeMouna,Indukuri Tejasree",
      link: "https://xplorestaging.ieee.org/document/11176598",
      FullPaper:"https://drive.google.com/file/d/1ROPFfxXPLFvsEypEonDlUupyUSpelfNI/view?usp=drivesdk",
    },
    {
      title: "Enhanced ResNet Model for Classification of Liver Tumor in CT Scan",
      authors: "Md. Shabbeer, Somepalli Gopi Sai Mahesh, Tarapatla Sushanth, Vadagle Sunny Paul, Chevella Sreeja",
      link: "https://ieeexplore.ieee.org/document/11170777",
      FullPaper:"https://drive.google.com/file/d/1FIC8NWNw6p-6EIXEbSerTANA-vTO8NCC/view?usp=sharinga",
    },
    {
      title: "Personalized AI-Enhanced Alumni Association Platform",
      authors: "D. Jagadeesh, Beere Adbhutha, Buddineni Sai Sree, Beeti Yashwanth Raj, Bellamkonda Chandra Siddhartha, Pallavi Lanke",
      link: "https://ieeexplore.ieee.org/document/11176562",
      FullPaper:"https://drive.google.com/file/d/1njxEMAOLKt4UDEokQpg33fxTtLDRj0n_/view?usp=sharing",
    },
    {
      title: "A Novel Vision Transformer Approach with Adaptive Segmentation for Early Plant Disease Detection",
      authors: "D.Vivek,Vallepu Sai Soumya,Yadla Yogesh,Veruva Venkata Naga Vaishnavi,Madas Vivek",
      link: "https://ieeexplore.ieee.org/document/11140639",
      FullPaper:"https://drive.google.com/file/d/1HGMtJRqtTqa9fnUICqclXFxdnpmbRi0I/view?usp=drivesdk",
    },
    {
      title: "Building an Enhanced Task-Role Based Access Control (E-TRBAC) Model to Secure Cloud Services",
      authors: "Enukonda Siri Chandana,Ganguru Sandeep Kumar,Ediga Sai Murari Goud,Balaji K",
      link: "https://ieeexplore.ieee.org/document/11233364",
      FullPaper:"https://drive.google.com/file/d/1g6FgVBAqnFqSuQlh7ftyvK7sf0K68jA2/view?usp=drivesdk",
    },
    {
      title: "AI-Powered Promotional Content Generator : Banners for Targeted Campaigns",
      authors: "M. Manzoor Hussain, Boddupally Moksha, Gotte Kavyasri, Balakampet Sreeja, Vivekanand Aelgani",
      link: "https://ieeexplore.ieee.org/document/11176729",
      FullPaper:"https://drive.google.com/file/d/1s9I4UkwdsywaRaD2mm8YsauO1INbPcpT/view?usp=drive_link",
    },
  ];

  useEffect(() => {
    if (isMobile) return;

    const track = scrollRef.current;
    if (!track) return;

    let animationId;
    const speed = 0.4;

    const totalWidth = track.scrollWidth / 2;

    const animate = () => {
      if (!isPaused) {
        translateXRef.current -= speed;

        if (Math.abs(translateXRef.current) >= totalWidth) {
          translateXRef.current = 0;
        }

        track.style.transform = `translateX(${translateXRef.current}px)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused, isMobile]);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  const CARD_WIDTH = 360; // match your card width + gap

  const handleNext = () => {
    translateXRef.current -= CARD_WIDTH;
    scrollRef.current.style.transform = `translateX(${translateXRef.current}px)`;
  };

  const handlePrev = () => {
    translateXRef.current += CARD_WIDTH;
    if (translateXRef.current > 0) translateXRef.current = 0;
    scrollRef.current.style.transform = `translateX(${translateXRef.current}px)`;
  };

  return (
    <div id="top" className="relative w-full bg-black text-white overflow-x-hidden">
      <Spotlight />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">

        {/* subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_65%)]" />

        {/* Logo */}
        <img
          src="/SRC.png"
          alt="SRC Logo"
          className="w-[320px] sm:w-[420px] md:w-[520px] mb-10 drop-shadow-[0_0_40px_rgba(56,189,248,0.25)]"
        />

        {/* Tagline */}
        <h1 className="
          text-5xl
          sm:text-7xl
          md:text-8xl
          font-black
          tracking-tight
          bg-gradient-to-b from-sky-300 via-cyan-300 to-sky-400
          bg-clip-text text-transparent
        ">
          Student Research Cell
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-4xl text-lg md:text-xl text-slate-300 leading-relaxed">
          A student-led research initiative focused on innovation, publications,
          patents, and academic excellence — empowering students to transform ideas
          into impactful research.
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
      {/* RESEARCH PUBLICATIONS */}
      <section id="publications" className="py-28 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto text-center">
          <HeadingNText title="Research Publications">
            Research papers published by SRC members in reputed journals and conferences.
          </HeadingNText>

          <div
            className="relative mt-20 overflow-hidden"
            onMouseEnter={() => !isMobile && setIsPaused(true)}
            onMouseLeave={() => !isMobile && setIsPaused(false)}
          >
            {/* TRACK */}
            <div
              ref={scrollRef}
              className="flex gap-6 w-max will-change-transform"
            >
              {[...researchPapers, ...researchPapers].map((paper, index) => (
                <div
                  key={index}
                  className="w-[340px] sm:w-[380px] md:w-[440px] flex-shrink-0 bg-slate-900 border border-slate-800 rounded-2xl p-8 text-left"
                >
                  <h3 className="text-lg font-semibold text-sky-400">
                    {paper.title}
                  </h3>

                  <p className="mt-4 text-sm text-slate-400">
                    <span className="text-slate-500">Authors:</span> {paper.authors}
                  </p>

                  <div className="mt-6 flex gap-5 text-xs">
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sky-400 hover:underline"
                    >
                      IEEE
                    </a>

                    {paper.FullPaper && (
                      <a
                        href={paper.FullPaper}
                        target="_blank"
                        rel="noreferrer"
                        className="text-emerald-400 hover:underline"
                      >
                        Full Paper (PDF)
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE CONTROLS ONLY */}
            {isMobile && (
              <div className="mt-10 flex justify-center gap-6">
                <button
                  onClick={handlePrev}
                  className="px-6 py-2 bg-slate-800 rounded-lg text-sm"
                >
                  ◀ Prev
                </button>
                <button
                  onClick={handleNext}
                  className="px-6 py-2 bg-slate-800 rounded-lg text-sm"
                >
                  Next ▶
                </button>
              </div>
            )}
          </div>
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
                    <span className="text-sky-400">cbb@bvrit.ac.in</span>
                  </p>
                  <p>
                    <span className="text-slate-400">Phone:</span>{" "}
                    +91 78420 70463
                  </p>
                  <p>
                    <span className="text-slate-400">Location:</span>{" "}
                    B V Raju Institute of Technology
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
                  className="w-full border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:border-sky-500 focus:outline-none"
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
                  className="w-full border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:border-sky-500 focus:outline-none"
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
                  className="w-full border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:border-sky-500 focus:outline-none"
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
