import React, { useRef, useEffect, useState } from "react";
import Footer from "./components/Footer";
import HeadingNText from "./components/HeadingNText";
import { Spotlight } from "./components/Spotlight";
import BorderedButton from "./components/BorderedButton";
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa6';

function SRC() {
  const desktopScrollRef = useRef(null);
  const mobileScrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const desktopTranslateXRef = useRef(0);
  const mobileTranslateXRef = useRef(0);
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

    const track = desktopScrollRef.current;
    if (!track) return;

    let animationId;
    const speed = 1.8; // Slightly increased speed

    const totalWidth = track.scrollWidth / 2;

    const animate = () => {
      if (!isPaused) {
        desktopTranslateXRef.current -= speed;

        if (Math.abs(desktopTranslateXRef.current) >= totalWidth) {
          desktopTranslateXRef.current = 0;
        }

        track.style.transform = `translateX(${desktopTranslateXRef.current}px)`;
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
  // Store current card index in state to avoid position calculation issues
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  
  // Initialize with first set of cards
  useEffect(() => {
    if (!isMobile) return;

    const track = mobileScrollRef.current;
    if (!track) return;

    const cards = track.querySelectorAll('.mobile-card');
    if (!cards.length) return;

    const cardWidth = cards[0].offsetWidth || 300;
    const gap = 16;
    const position = -(0 * (cardWidth + gap)); // Start at first card

    mobileTranslateXRef.current = position;
    setCurrentCardIndex(0);
    track.style.transform = `translateX(${position}px)`;
  }, [isMobile]); // run when switching to mobile
  
  const handleNext = () => {
    if (!isMobile) return;

    const track = mobileScrollRef.current;
    if (!track) return;

    const cards = track.querySelectorAll('.mobile-card');
    const originalCount = researchPapers.length; // 11 original cards
    const totalCards = cards.length; // 22 total cards (with duplicates)
    if (!totalCards) return;

    const cardWidth = cards[0].offsetWidth || 300;
    const gap = 16;

    // Calculate next index
    const nextIndex = (currentCardIndex + 1) % totalCards;
    
    // Calculate the position for the next card
    const nextPosition = -(nextIndex * (cardWidth + gap));
    
    mobileTranslateXRef.current = nextPosition;
    setCurrentCardIndex(nextIndex);
    track.style.transform = `translateX(${nextPosition}px)`;
  };

  const handlePrev = () => {
    if (!isMobile) return;

    const track = mobileScrollRef.current;
    if (!track) return;

    const cards = track.querySelectorAll('.mobile-card');
    const originalCount = researchPapers.length; // 11 original cards
    const totalCards = cards.length; // 22 total cards (with duplicates)
    if (!totalCards) return;

    const cardWidth = cards[0].offsetWidth || 300;
    const gap = 16;

    // Calculate previous index
    const prevIndex = (currentCardIndex - 1 + totalCards) % totalCards;
    
    // Calculate the position for the previous card
    const prevPosition = -(prevIndex * (cardWidth + gap));
    
    mobileTranslateXRef.current = prevPosition;
    setCurrentCardIndex(prevIndex);
    track.style.transform = `translateX(${prevPosition}px)`;
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
        {/* <p className="mt-6 max-w-4xl text-lg md:text-xl text-slate-300 leading-relaxed">
          A student-led research initiative focused on innovation, publications,
          patents, and academic excellence — empowering students to transform ideas
          into impactful research.
        </p> */}

        <p className="mt-4 text-sm text-slate-400">
          A Specialized Research Wing under Coding Brigade BVRIT
        </p>
        
        {/* Know More Button */}
        <div className="mt-8">
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
      <section id="about" className="py-28 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <HeadingNText title="About SRC">
            SRC (Student Research Cell) is a dedicated research-focused initiative under Coding Brigade BVRIT (CBB) that encourages students to engage in research, innovation, and advanced technical exploration. It provides a structured platform for students to transform ideas into meaningful research outcomes through guidance, mentorship, and academic collaboration.
          </HeadingNText>

          <div className="mt-12 bg-slate-900/80 border border-slate-800 rounded-2xl p-10 leading-relaxed text-slate-300">
            SRC is a student-driven community that nurtures curiosity, critical thinking, and research excellence among aspiring researchers. The club bridges the gap between academic learning and advanced research by supporting research paper publications, patent development, interdisciplinary innovation, and participation in national and international conferences, while maintaining a strong focus on academic rigor and impactful innovation.          </div>
        </div>
      </section>

      {/* MISSION, VISION, WHAT WE DO & VALUES */}
      <section className="py-28 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto text-center">
          <HeadingNText title="Our Core">
            The fundamental aspects that define our research community.
          </HeadingNText>

          <div className="mt-16 grid md:grid-cols-2 gap-12">
            {/* MISSION */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-sky-400 mb-4">
                Our Mission
              </h3>
              <p className="text-slate-300 leading-relaxed">
                To foster a research-driven environment where students are encouraged to explore innovative ideas, apply systematic research methods, and develop solutions with academic and real-world impact. SRC aims to guide students throughout their research journey with mentorship, resources, and exposure to recognized research platforms.
              </p>
            </div>

            {/* VISION */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-sky-400 mb-4">
                Our Vision
              </h3>
              <p className="text-slate-300 leading-relaxed">
                To establish SRC as a recognized hub for student-led research and innovation, where curiosity, creativity, and academic rigor come together. We envision nurturing future researchers, innovators, and scholars by enabling high-quality research, impactful publications, patents, and meaningful collaborations with leading academic, research, and industry institutions, contributing to technological advancement and societal progress.
              </p>
            </div>

            {/* WHAT WE DO */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-sky-400 mb-4">
                What We Do
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                SRC supports students in exploring research and innovation beyond the classroom by providing the right guidance, platforms, and opportunities.
              </p>
              <ul className="space-y-2 text-left">
                <li className="flex items-start">
                  <span className="text-sky-400 mr-2">•</span>
                  <span>Guide students in research methodology and technical exploration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-400 mr-2">•</span>
                  <span>Support research paper writing and publications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-400 mr-2">•</span>
                  <span>Encourage patent ideation and innovation-driven projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-400 mr-2">•</span>
                  <span>Prepare students for national and international conferences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-400 mr-2">•</span>
                  <span>Facilitate collaborations with academic and research organizations</span>
                </li>
              </ul>
            </div>

            {/* OUR VALUES */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-sky-400 mb-4">
                Our Values
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Core principles that guide our research and innovation activities.
              </p>
              <ul className="space-y-2 text-left">
                <li className="flex items-start">
                  <span className="text-sky-400 mr-2">•</span>
                  <span><strong>Research Excellence:</strong> Upholding high standards of quality, originality, and academic integrity in all research activities.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-400 mr-2">•</span>
                  <span><strong>Innovation & Curiosity:</strong> Encouraging students to question, explore, and innovate beyond conventional learning.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-400 mr-2">•</span>
                  <span><strong>Collaboration:</strong> Promoting collaboration with institutions, researchers, and professional bodies to enhance learning and research impact.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH DOMAINS */}
      <section className="py-28 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto text-center">
          <HeadingNText title="Research Domains">
            Exploring diverse research areas that shape the future of technology and innovation.
          </HeadingNText>

          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {/* AI & Machine Learning */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-left">
              <h4 className="text-lg font-semibold text-sky-400 mb-3">
                AI & Machine Learning
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                SRC promotes research in Artificial Intelligence and Machine Learning, covering areas such as deep learning, natural language processing, computer vision, and data-driven systems. Students apply intelligent algorithms to real-world problems while gaining exposure to ethical AI practices and modern research methodologies.
              </p>
            </div>

            {/* Systems & Software */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-left">
              <h4 className="text-lg font-semibold text-sky-400 mb-3">
                Systems & Software
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                This domain focuses on building reliable, secure, and scalable software systems. Research areas include cloud computing, cybersecurity, distributed systems, and software architecture, enabling students to understand both system design and real-world implementation challenges.
              </p>
            </div>

            {/* Interdisciplinary Research */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-left">
              <h4 className="text-lg font-semibold text-sky-400 mb-3">
                Interdisciplinary Research
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                SRC encourages research that integrates technology with domains like healthcare, agriculture, sustainability, and social impact. Students collaborate across disciplines to develop innovative solutions that address complex real-world problems.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* OUR ACADEMIC MENTORS */}
      <section id="mentors" className="py-28 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto text-center">
          <HeadingNText title="Our Academic Mentors">
            Guided by distinguished faculty who provide strategic direction and academic excellence in research.
          </HeadingNText>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Dr. Ch. Madhu Babu */}
            <div className="group bg-slate-900 border border-slate-700 rounded-2xl p-8 transition-all duration-300 hover:border-slate-500 hover:shadow-xl hover:shadow-slate-700/20">
              <div className="flex flex-col items-center">
                <div className="relative overflow-hidden rounded-xl border-2 border-slate-600 w-48 h-56 mb-6">
                  <img
                    src="/madhu_babu.jpg"
                    alt="Dr. Ch. Madhu Babu"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-sky-400 mb-1">
                    Dr. Ch. Madhu Babu
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Chief Academic Advisor – SRC
                  </p>
                  
                  <div className="space-y-2 text-left text-slate-300 text-sm">
                    <p className="font-semibold text-sky-300">Research Focus:</p>
                    <p>Strategic direction and academic leadership in advanced research initiatives, publications, and institutional collaborations.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dr. L. Pallavi */}
            <div className="group bg-slate-900 border border-slate-700 rounded-2xl p-8 transition-all duration-300 hover:border-slate-500 hover:shadow-xl hover:shadow-slate-700/20">
              <div className="flex flex-col items-center">
                <div className="relative overflow-hidden rounded-xl border-2 border-slate-600 w-48 h-56 mb-6">
                  <img
                    src="/pallavi.jpg"
                    alt="Dr. L. Pallavi"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-sky-400 mb-1">
                    Dr. L. Pallavi
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Research Program Director – SRC
                  </p>
                  
                  <div className="space-y-2 text-left text-slate-300 text-sm">
                    <p className="font-semibold text-sky-300">Research Focus:</p>
                    <p>Research methodology, paper writing, and interdisciplinary innovation with academic excellence.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dr. Jagadeesh */}
            <div className="group bg-slate-900 border border-slate-700 rounded-2xl p-8 transition-all duration-300 hover:border-slate-500 hover:shadow-xl hover:shadow-slate-700/20">
              <div className="flex flex-col items-center">
                <div className="relative overflow-hidden rounded-xl border-2 border-slate-600 w-48 h-56 mb-6">
                  <img
                    src="/jagadeesh.webp"
                    alt="Dr. Jagadeesh"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-sky-400 mb-1">
                    Mr. Jagadeesh Dandu
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Faculty Research Mentor – SRC
                  </p>
                  
                  <div className="space-y-2 text-left text-slate-300 text-sm">
                    <p className="font-semibold text-sky-300">Research Focus:</p>
                    <p>Research guidance and academic support for student research initiatives.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dr. Sreedevi */}
            <div className="group bg-slate-900 border border-slate-700 rounded-2xl p-8 transition-all duration-300 hover:border-slate-500 hover:shadow-xl hover:shadow-slate-700/20">
              <div className="flex flex-col items-center">
                <div className="relative overflow-hidden rounded-xl border-2 border-slate-600 w-48 h-56 mb-6">
                  <img
                    src="/sreedevi.webp"
                    alt="Dr. Sreedevi"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-sky-400 mb-1">
                    Mrs. Ch. Sreedevi
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Faculty Mentor – Research Methodologies
                  </p>
                  
                  <div className="space-y-2 text-left text-slate-300 text-sm">
                    <p className="font-semibold text-sky-300">Research Focus:</p>
                    <p>Research methodology and academic excellence in student research projects.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dr. Srinu */}
            <div className="group bg-slate-900 border border-slate-700 rounded-2xl p-8 transition-all duration-300 hover:border-slate-500 hover:shadow-xl hover:shadow-slate-700/20">
              <div className="flex flex-col items-center">
                <div className="relative overflow-hidden rounded-xl border-2 border-slate-600 w-48 h-56 mb-6">
                  <img
                    src="/srinu.webp"
                    alt="Dr. Srinu"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-sky-400 mb-1">
                    Mr. Srinuvasarao Sanapala
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Faculty Mentor – Research & Innovation
                  </p>
                  
                  <div className="space-y-2 text-left text-slate-300 text-sm">
                    <p className="font-semibold text-sky-300">Research Focus:</p>
                    <p>Academic research guidance and innovation support for students.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dr. Manzoor */}
            <div className="group bg-slate-900 border border-slate-700 rounded-2xl p-8 transition-all duration-300 hover:border-slate-500 hover:shadow-xl hover:shadow-slate-700/20">
              <div className="flex flex-col items-center">
                <div className="relative overflow-hidden rounded-xl border-2 border-slate-600 w-48 h-56 mb-6">
                  <img
                    src="/manzoor.webp"
                    alt="Dr. Manzoor"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-sky-400 mb-1">
                    Mr. M. Manzoor Hussain
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Faculty Mentor – Academic Research Support
                  </p>
                  
                  <div className="space-y-2 text-left text-slate-300 text-sm">
                    <p className="font-semibold text-sky-300">Research Focus:</p>
                    <p>Research excellence and academic mentorship for student researchers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE STUDENT TEAM */}
      <section id="team" className="py-28 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto text-center">
          <HeadingNText title="SRC Core Student Team">
            Dedicated student leaders driving research initiatives and academic excellence.
          </HeadingNText>
          
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { name: "Nikhil Mamilla", img: "/nikhil.png", role: "Team Lead"},
              { name: "Gadila Sowmya", img: "/sowmyab.png", role: "Research Head"},
              { name: "Beere Adbhutha", img: "/Adbutha.png", role: "Innovation Lead"},
              { name: "Amara Shivateja", img: "/amara.png", role: "Project Coordinator"},
              { name: "Dubasi Mukundh", img: "/mukundh.png", role: "Technical Lead"},
            ].map((member, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-700 rounded-2xl p-6 transition-all duration-500 hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-500/10 hover:-translate-y-2 overflow-hidden"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                
                <div className="relative">
                  <div className="relative mb-4">
                    <div className="absolute -inset-4 bg-sky-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-slate-600 mx-auto transition-all duration-500 group-hover:border-sky-500/50 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Role badge above name */}
                  <div className="mb-3">
                    <span className="inline-block bg-sky-500 text-slate-900 px-3 py-1 rounded-full text-xs font-bold tracking-tight shadow-lg">
                      {member.role}
                    </span>
                  </div>
                  
                  <div className="text-center">
                    <h4 className="text-lg font-bold text-slate-100 mb-1 group-hover:text-sky-300 transition-colors duration-300">
                      {member.name}
                    </h4>
                    <p className="text-sm text-slate-400 group-hover:text-sky-400 transition-colors duration-300">
                      Core Member
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-28 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto text-center">
          <HeadingNText title="Key Highlights">
            Measurable outcomes and academic impact driven by SRC.
          </HeadingNText>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {/* Research Publications */}
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 transition-all duration-300 hover:border-slate-500 hover:shadow-xl hover:shadow-slate-700/20 group">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-sky-500/10 border border-sky-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-sky-400 mb-4">Research Publications</h3>
              <p className="text-slate-300 leading-relaxed">
                Research paper publications in reputed national and international journals, with students gaining recognition in top-tier conferences.
              </p>
            </div>

            {/* Patent Support */}
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 transition-all duration-300 hover:border-slate-500 hover:shadow-xl hover:shadow-slate-700/20 group">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-sky-500/10 border border-sky-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-sky-400 mb-4">Patent Support</h3>
              <p className="text-slate-300 leading-relaxed">
                End-to-end support for patent ideation, drafting, and filing processes, fostering innovation and intellectual property development.
              </p>
            </div>

            {/* Conference Participation */}
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 transition-all duration-300 hover:border-slate-500 hover:shadow-xl hover:shadow-slate-700/20 group">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-sky-500/10 border border-sky-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-sky-400 mb-4">Conference Participation</h3>
              <p className="text-slate-300 leading-relaxed">
                Guidance and support for IEEE and other international conferences, providing students with global exposure and networking opportunities.
              </p>
            </div>

            {/* Advanced Mentoring */}
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 transition-all duration-300 hover:border-slate-500 hover:shadow-xl hover:shadow-slate-700/20 group">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-sky-500/10 border border-sky-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-sky-400 mb-4">Advanced Mentoring</h3>
              <p className="text-slate-300 leading-relaxed">
                Advanced mentoring for research-oriented and innovation-driven projects, providing one-on-one guidance from experienced mentors.
              </p>
            </div>

            {/* Research Methodologies */}
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 transition-all duration-300 hover:border-slate-500 hover:shadow-xl hover:shadow-slate-700/20 group">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-sky-500/10 border border-sky-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-sky-400 mb-4">Research Excellence</h3>
              <p className="text-slate-300 leading-relaxed">
                Hands-on exposure to structured research methodologies and best practices, ensuring academic rigor and innovation.
              </p>
            </div>

            {/* Innovation Hub */}
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 transition-all duration-300 hover:border-slate-500 hover:shadow-xl hover:shadow-slate-700/20 group">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-sky-500/10 border border-sky-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-sky-400 mb-4">Innovation Hub</h3>
              <p className="text-slate-300 leading-relaxed">
                A collaborative environment fostering interdisciplinary research and innovation, connecting students with industry experts and researchers.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* RESEARCH PUBLICATIONS */}
      <section id="publications" className="py-28 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto text-center">
          <HeadingNText title="Research Publications">
            Research papers published by SRC members in reputed journals and conferences.
          </HeadingNText>

          <div className="relative mt-20 overflow-hidden">
            {/* DESKTOP: Auto-scrolling */}
            {!isMobile && (
              <div
                className="relative mt-20 overflow-hidden"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* TRACK */}
                <div
                  ref={desktopScrollRef}
                  className="flex gap-6 w-max will-change-transform"
                >
                  {[...researchPapers, ...researchPapers].map((paper, index) => (
                    <div
                      key={index}
                      className="w-[440px] flex-shrink-0 bg-slate-900 border border-slate-800 rounded-2xl p-8 text-left"
                    >
                      <h3 className="text-lg font-semibold text-sky-400">
                        {paper.title}
                      </h3>

                      <p className="mt-4 text-sm text-slate-400">
                        <span className="text-slate-500">Authors:</span> {paper.authors}
                      </p>

                      <div className="mt-6 flex gap-4 text-xs">
                        <a
                          href={paper.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-block px-3 py-1.5 rounded-lg bg-sky-500/10 text-sky-400 hover:bg-sky-500/20 hover:text-sky-300 transition-colors border border-sky-500/30"
                        >
                          IEEE
                        </a>

                        {paper.FullPaper && (
                          <a
                            href={paper.FullPaper}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 hover:text-emerald-300 transition-colors border border-emerald-500/30"
                          >
                            Full Paper
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* MOBILE: Manual navigation */}
            {isMobile && (
              <div className="overflow-hidden w-full">
                <div
                  ref={mobileScrollRef}
                  className="flex gap-4 will-change-transform transition-transform duration-300 ease-in-out w-max"
                >
                  {[...researchPapers, ...researchPapers].map((paper, index) => (
                    <div
                      key={index}
                      className="mobile-card w-[300px] flex-shrink-0 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-left"
                    >
                      <h3 className="text-base font-semibold text-sky-400">
                        {paper.title}
                      </h3>

                      <p className="mt-3 text-xs text-slate-400">
                        <span className="text-slate-500">Authors:</span> {paper.authors}
                      </p>

                      <div className="mt-4 flex gap-3 text-xs">
                        <a
                          href={paper.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-block px-2.5 py-1 rounded bg-sky-500/10 text-sky-400 hover:bg-sky-500/20 hover:text-sky-300 transition-colors border border-sky-500/30"
                        >
                          IEEE
                        </a>

                        {paper.FullPaper && (
                          <a
                            href={paper.FullPaper}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 hover:text-emerald-300 transition-colors border border-emerald-500/30"
                          >
                            Full Paper
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* MOBILE CONTROLS */}
                <div className="mt-6 flex justify-center gap-3">
                  <button
                    onClick={handlePrev}
                    className="p-2.5 rounded-full border border-slate-600 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                    aria-label="Previous publication"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2.5 rounded-full border border-slate-600 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                    aria-label="Next publication"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
  id="contact"
  className="relative py-24 px-6 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"
>
  <div className="max-w-6xl mx-auto">
    <HeadingNText title="Contact SRC">
      {/* Reach out for research mentorship, academic collaboration, or SRC initiatives. */}
    </HeadingNText>

    <div className="mt-16 grid md:grid-cols-[1.1fr_1.1fr] gap-12 items-start">
      {/* LEFT: OFFICIAL INFO (NO BOX) */}
      <div className="space-y-8">
        <div>
          <h3 className="text-sm font-semibold tracking-[0.25em] text-sky-400 uppercase mb-3">
            Official Communication
          </h3>
          <h4 className="text-2xl md:text-3xl font-semibold text-white mb-3">
            Talk to the SRC core team.
          </h4>
          <p className="text-sm md:text-base text-slate-400 leading-relaxed max-w-xl">
            For research guidance, publications, patents, or institutional
            collaborations, connect with Student Research Club through these
            verified channels. Responses are typically within 1–2 working days.
          </p>
        </div>

        <div className="space-y-5 text-sm md:text-base">
          {/* EMAIL */}
          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/10 text-sky-400">
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
                  href="mailto:src@bvrit.ac.in"
                  className="text-sky-400 font-medium hover:text-sky-300 hover:underline"
                >
                  src@bvrit.ac.in
                </a>
              </div>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/10 text-sky-400">
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
                  href="tel:+917842070463"
                  className="font-medium text-slate-200 hover:text-sky-400"
                >
                  +91 78420 70463
                </a>
              </div>
            </div>
          </div>

          {/* LOCATION */}
          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/10 text-sky-400">
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
              <div className="font-medium text-slate-200">
                B V Raju Institute of Technology, Narsapur
              </div>
            </div>
          </div>

          {/* SOCIAL ICONS – EXACTLY BELOW LOCATION */}

        <div className="pt-4 flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/src-bvrit"
            target="_blank"
            rel="noreferrer noopener"
            className="group p-2.5 rounded-full border border-sky-500/40 bg-sky-500/10 flex items-center justify-center text-sky-400 transition-all duration-300 hover:bg-sky-500/20 hover:text-sky-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-500/25"
            aria-label="Student Research Cell on LinkedIn"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/src.bvrit"
            target="_blank"
            rel="noreferrer noopener"
            className="group p-2.5 rounded-full border border-pink-500/40 bg-pink-500/10 flex items-center justify-center text-pink-400 transition-all duration-300 hover:bg-pink-500/20 hover:text-pink-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25"
            aria-label="Student Research Cell on Instagram"
          >
            <FaInstagram className="h-5 w-5" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/src-bvrit"
            target="_blank"
            rel="noreferrer noopener"
            className="group p-2.5 rounded-full border border-slate-500/50 bg-slate-800/70 flex items-center justify-center text-slate-200 transition-all duration-300 hover:bg-slate-700 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-slate-400/30"
            aria-label="Student Research Cell on GitHub"
          >
            <FaGithub className="h-5 w-5" />
          </a>
        </div>

        </div>
      </div>

      {/* RIGHT: CONTACT FORM */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-sky-500/15 via-blue-500/10 to-purple-500/15 blur-xl opacity-80" />
        <form
          action="https://formspree.io/f/mjgvzonb"
          method="POST"
          className="bg-slate-950/70 border border-slate-800/80 rounded-3xl p-8 md:p-9 shadow-[0_18px_60px_rgba(15,23,42,0.9)] flex flex-col gap-6"
        >
          <div className="flex items-center gap-2 text-sky-400 mb-2">
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
              <label className="block text-xs font-medium text-slate-400 mb-1.5">
                Full Name
              </label>
              <input
                name="name"
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 outline-none transition resize-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
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
  );
}

export default SRC;
