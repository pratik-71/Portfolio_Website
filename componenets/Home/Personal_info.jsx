"use client";
import React, { useCallback } from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const social_media = [
  {
    image: "/icons/leetcode.png",
    text: "Leetcode",
    link: "https://leetcode.com/u/pratik___7/"
  },
  {
    image: "/icons/github.png",
    text: "Github",
    link: "https://github.com/pratik-71"
  },
  {
    image: "/icons/hackerank.png",
    text: "Instagram",
    link: "https://www.instagram.com/pratik___dabhade/"
  },
  {
    image: "/icons/linkedin.png",
    text: "Linkedin",
    link: "https://www.linkedin.com/in/pratik-dabhade-a9a600175/"
  },
];

const SocialMediaButton = React.memo(({ item }) => (
  <Link href={item.link} target="_blank" rel="noopener noreferrer">
    <button
      className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-2xl p-4 transition-all duration-300 hover:scale-105 hover:bg-white/10"
      title={item.text}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10 flex flex-col items-center gap-3">
        <img
          src={item.image}
          className="w-8 h-8 object-contain transition-all duration-300"
          alt={item.text}
        />
        <p className="text-xs font-medium text-white/80 group-hover:text-white transition-colors duration-300">
          {item.text}
        </p>
      </div>
    </button>
  </Link>
));

SocialMediaButton.displayName = 'SocialMediaButton';

const PersonalInfo = () => {
  const openResume = useCallback(() => {
    window.open("/Pratik Dabhade.pdf", "_blank");
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">

      <div className="max-w-4xl w-full relative z-10">
        {/* Main Content Container */}
        <div className="text-center space-y-6 pt-8">
          {/* Greeting */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Pratik Dabhade
              </span>
            </h1>
          
          </div>

          {/* Role Animation */}
          <div className="flex items-center justify-center gap-3 text-xl md:text-2xl lg:text-3xl font-semibold">
            <span className="text-white/70">I&apos;m a</span>
            <span className="text-purple-400">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "Web Developer", 
                  2000,
                  "Freelancer",
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
            <p className="text-lg md:text-xl text-white/60 leading-relaxed">
              I am a motivated and versatile individual, always eager to take on new challenges.
              With a passion for learning and a dedication to delivering high-quality results, 
              I bring a positive attitude and growth mindset to every project.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <button
              onClick={openResume}
              className="group relative overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="relative z-10">View Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Social Media */}
          <div className="pt-8">
            <p className="text-white/50 text-sm mb-4 font-medium">Connect with me</p>
            <div className="flex justify-center gap-4 md:gap-6">
              {social_media.map((item, index) => (
                <SocialMediaButton key={index} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Elements (optional, can be removed for cleaner look) */}
        <div className="pointer-events-none absolute top-20 left-20 w-72 h-72 bg-purple-900/10 rounded-full blur-3xl z-0"></div>
        <div className="pointer-events-none absolute bottom-20 right-20 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl z-0"></div>
      </div>
    </div>
  );
};

export default PersonalInfo;
