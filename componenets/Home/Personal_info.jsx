"use client";
import React, { useCallback } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

const social_media = [
  {
    icon: <FaCode className="text-2xl" />,
    text: "Leetcode",
    link: "https://leetcode.com/u/pratik___7/"
  },
  {
    icon: <FaGithub className="text-2xl" />,
    text: "Github",
    link: "https://github.com/pratik-71"
  },
  {
    icon: <FaLinkedin className="text-2xl" />,
    text: "Linkedin",
    link: "https://www.linkedin.com/in/pratik-dabhade-a9a600175/"
  },
];

const SocialMediaButton = React.memo(({ item }) => (
  <Link href={item.link} target="_blank" rel="noopener noreferrer">
    <button
      className="group relative glass-card rounded-[2rem] p-5 interactive-element hover:bg-white/5 hover:border-gold/20"
      title={item.text}
    >
      <div className="relative z-10 flex flex-col items-center gap-2">
        <div className="text-gold transition-colors duration-300">
          {item.icon}
        </div>
        <p className="text-[10px] uppercase tracking-widest font-black text-white/40 group-hover:text-gold transition-colors duration-300">
          {item.text}
        </p>
      </div>
    </button>
  </Link>
));

SocialMediaButton.displayName = 'SocialMediaButton';

const StatCounter = ({ value, label, suffix = "" }) => {
  const [count, setCount] = React.useState(0);
  const elementRef = React.useRef(null);
  const [hasStarted, setHasStarted] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setHasStarted(true);
    }, { threshold: 0.5 });
    
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!hasStarted) return;
    
    let start = 0;
    const end = value;
    const duration = 2000; // 2 seconds
    let startTime = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const currentVal = progress * end;
      setCount(Number.isInteger(end) ? Math.floor(currentVal) : currentVal.toFixed(1));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, value]);

  return (
    <div ref={elementRef} className="text-center group">
      <div className="text-3xl md:text-4xl font-black tracking-tighter text-white group-hover:text-gold transition-colors">
        {count}{suffix}
      </div>
      <div className="text-[9px] md:text-[10px] font-black tracking-[0.2em] text-white/40 group-hover:text-white/60 transition-colors mt-1 uppercase">
        {label}
      </div>
    </div>
  );
};

const PersonalInfo = () => {
  const openResume = useCallback(() => {
    window.open("/Pratik Dabhade.pdf", "_blank");
  }, []);

  const [titleIndex, setTitleIndex] = React.useState(0);
  const titles = ["FULL STACK DEVELOPER", "CTO", "SOLOPRENEUR"];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[85vh] flex items-center justify-center px-4 overflow-hidden pt-20">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-[900] tracking-tighter leading-[0.9] text-white uppercase">
                PRATIK <br/>
                <span className="text-gold">DABHADE</span>
              </h1>
            </div>

            <div className="inline-flex items-center text-2xl md:text-4xl font-black tracking-tight mt-2">
              <span className="text-white mr-3 uppercase tracking-wide">I AM A</span>
              <span className="text-gold relative h-[1.2em] min-w-[280px] sm:min-w-[320px] overflow-hidden inline-block text-left">
                {titles.map((title, i) => {
                  let positionClass = '';
                  if (i === titleIndex) {
                    positionClass = 'translate-y-0 opacity-100';
                  } else if (i === (titleIndex - 1 + titles.length) % titles.length) {
                    positionClass = 'translate-y-full opacity-0';
                  } else {
                    positionClass = '-translate-y-full opacity-0';
                  }
                  
                  return (
                    <span
                      key={title}
                      className={`absolute left-0 top-0 w-full transition-all duration-500 ease-in-out ${positionClass}`}
                    >
                      {title}
                    </span>
                  );
                })}
              </span>
            </div>

            <p className="text-sm md:text-base text-white/70 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Results-driven Full Stack Developer with experience building scalable, robust, and high-performance digital products and real-time systems. Skilled in developing end-to-end solutions, optimizing system performance, improving user experience, and delivering business-focused applications. Strong problem-solving abilities with a focus on scalability, reliability, and impactful product development.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={openResume}
                className="group px-8 py-4 bg-gold text-black rounded-[2.5rem] font-black text-base interactive-element border-2 border-gold shadow-gold-glow hover:shadow-gold-glow-strong"
              >
                DOWNLOAD RESUME
              </button>
              <Link href="#contact">
                <button className="group px-8 py-4 glass-card text-white rounded-[2.5rem] font-black text-base interactive-element border-white/10 hover:border-gold/50">
                  LET'S TALK
                </button>
              </Link>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center lg:items-end gap-6">
             <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 w-full sm:w-auto">
                {[
                  { label: "PROJECTS", value: 15, suffix: "+" },
                  { label: "EXPERIENCE", value: 1.2, suffix: " YEARS" },
                  { label: "COMMITS", value: 500, suffix: "+" }
                ].map((stat, i) => (
                  <div key={i} className="glass-card p-6 rounded-[2.5rem] border-white/5 hover:border-gold/20 transition-all duration-500 group min-w-[200px]">
                     <div className="text-4xl md:text-5xl font-black tracking-tighter text-white group-hover:text-gold transition-colors">
                        <StatCounter value={stat.value} label={stat.label} suffix={stat.suffix} />
                     </div>
                  </div>
                ))}
             </div>

             <div className="flex gap-4 mt-4">
                {social_media.map((item, index) => (
                  <SocialMediaButton key={index} item={item} />
                ))}
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
