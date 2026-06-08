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
      className="group relative glass-card rounded-[1.25rem] p-3 md:p-4 interactive-element hover:bg-white/5 hover:border-gold/20 min-w-[70px] flex justify-center items-center"
      title={item.text}
    >
      <div className="relative z-10 flex flex-col items-center gap-1.5">
        <div className="text-gold transition-colors duration-300">
          {React.cloneElement(item.icon, { className: 'text-xl' })}
        </div>
        <p className="text-[9px] capitalize lowercase tracking-widest font-black text-white/40 group-hover:text-gold transition-colors duration-300">
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
    <div ref={elementRef} className="text-left group">
      <div className="text-3xl md:text-4xl lg:text-[2.5rem] font-black tracking-tighter text-white group-hover:text-gold transition-colors leading-none">
        {count}{suffix}
      </div>
      <div className="text-[9px] font-black tracking-[0.2em] text-white/40 group-hover:text-white/60 transition-colors mt-2 capitalize lowercase">
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
          <div className="lg:col-span-8 space-y-6 text-center lg:text-left z-10">
            <div className="space-y-1">
              <h1 className="font-playfair text-5xl md:text-6xl lg:text-[6.5rem] font-bold tracking-tight leading-[1] text-white drop-shadow-xl">
                <span>Pratik</span> <br/>
                <span className="text-gold tracking-tight">Dabhade</span>
              </h1>
            </div>

            <div className="inline-flex items-center text-xl md:text-2xl lg:text-3xl font-black tracking-tight mt-1">
              <span className="text-white/80 mr-3 capitalize lowercase tracking-wide">I AM A</span>
              <span className="text-gold relative h-[1.2em] min-w-[220px] sm:min-w-[280px] overflow-hidden inline-block text-left">
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

            {/* Stats Grid */}
            <div className="flex flex-row flex-wrap gap-8 md:gap-12 w-full pt-4">
              {[
                { label: "PROJECTS", value: 15, suffix: "+" },
                { label: "EXPERIENCE", value: 1.2, suffix: " YRS" },
                { label: "COMMITS", value: 500, suffix: "+" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col justify-center items-start border-l-2 border-gold/30 pl-5 group hover:border-gold transition-colors duration-300">
                  <StatCounter value={stat.value} label={stat.label} suffix={stat.suffix} />
                </div>
              ))}
            </div>

            <div className="flex flex-col xl:flex-row items-center justify-center lg:justify-start gap-5 pt-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={openResume}
                  className="group px-6 py-3 bg-gold text-black rounded-full font-black text-sm interactive-element border border-gold shadow-gold-glow hover:shadow-gold-glow-strong"
                >
                  DOWNLOAD RESUME
                </button>
                <Link href="#contact">
                  <button className="group px-6 py-3 glass-card text-white rounded-full font-black text-sm interactive-element border-white/10 hover:border-gold/50">
                    LET'S TALK
                  </button>
                </Link>
              </div>

              {/* Social Media Links */}
              <div className="flex gap-3 xl:border-l border-white/10 pt-3 xl:pt-0 xl:pl-5">
                {social_media.map((item, index) => (
                  <SocialMediaButton key={index} item={item} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
