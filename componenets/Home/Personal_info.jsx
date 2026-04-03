"use client";
import React, { useCallback } from "react";
import { TypeAnimation } from "react-type-animation";
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
      className="group relative glass-card rounded-[2rem] p-5 interactive-element hover:bg-slate-50 hover:border-primary-500/20"
      title={item.text}
    >
      <div className="relative z-10 flex flex-col items-center gap-2">
        <div className="text-primary-500 transition-colors duration-300">
          {item.icon}
        </div>
        <p className="text-[10px] uppercase tracking-widest font-black text-slate-400 group-hover:text-primary-500 transition-colors duration-300">
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
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, value]);

  return (
    <div ref={elementRef} className="text-center group">
      <div className="text-5xl md:text-6xl font-black tracking-tighter text-slate-950 group-hover:text-primary-500 transition-colors">
        {count}{suffix}
      </div>
      <div className="text-[10px] md:text-xs font-black tracking-[0.2em] text-slate-400 group-hover:text-slate-600 transition-colors mt-2">
        {label}
      </div>
    </div>
  );
};

const PersonalInfo = () => {
  const openResume = useCallback(() => {
    window.open("/Pratik Dabhade.pdf", "_blank");
  }, []);

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl w-full relative z-10">
        <div className="text-center space-y-10">
          {/* Greeting & Name */}
          <div className="space-y-4 relative group">
            
            <div className="relative inline-block">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-[800] tracking-tighter leading-[0.85] text-slate-950">
                PRATIK <br className="hidden md:block"/>
                <span className="text-primary-600">
                  DABHADE
                </span>
              </h1>
            </div>
          </div>

          {/* Role Animation */}
          <div className="inline-flex items-center glass-card px-8 py-4 rounded-[3.5rem] text-xl md:text-3xl font-bold tracking-tight border-primary-500/10">
            <span className="text-slate-500 mr-3 lowercase tracking-wide font-normal italic">I am a</span>
            <span className="text-primary-500">
              <TypeAnimation
                sequence={[
                  "FULL STACK DEVELOPER",
                  2000,
                  "UI/UX ENTHUSIAST", 
                  2000,
                  "PROBLEM SOLVER",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </span>
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-2xl text-slate-600 font-medium leading-relaxed">
              Crafting high-velocity digital experiences with 
              <span className="text-slate-950 mx-1.5">Modern Tech Stacks</span> 
              and a passion for 
              <span className="text-slate-950 mx-1.5">Visual Excellence.</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <button
              onClick={openResume}
              className="group px-10 py-5 bg-primary-500 text-white rounded-[2.5rem] font-black  text-xl interactive-element border-2 border-primary-500"
            >
              DOWNLOAD RESUME
            </button>
            <Link href="#contact">
              <button className="group px-10 py-5 glass-card text-slate-950 rounded-[2.5rem] font-black  text-xl interactive-element border-slate-200 hover:border-primary-500/50">
                LET'S TALK
              </button>
            </Link>
          </div>

          {/* Stats Counter */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 pt-8">
            <StatCounter label="PROJECTS" value={15} />
            <StatCounter label="EXPERIENCE" value={2} suffix="Y+" />
            <StatCounter label="COMMITS" value={500} suffix="+" />
          </div>

          {/* Social Media */}
          <div className="pt-12">
            <div className="flex justify-center gap-6">
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
