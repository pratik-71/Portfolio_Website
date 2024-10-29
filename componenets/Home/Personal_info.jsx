"use client";
import Image from "next/image";
import React, { useCallback } from "react";
import pratik from "@/public/pratik.jpeg";
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
      className="bg-gradient-to-r hover:scale-105 duration-150 flex flex-col from-[#270a36] to-[#03213f] w-[20vw] max-w-[110px] py-2 rounded-xl items-center justify-center gap-3 transition-all group"
      title={item.text}
    >
      <img
        src={item.image}
        className="w-[35%] max-w-[86px] h-auto max-h-[56px]"
        alt={item.text}
      />
      <p className="text-center" style={{ fontSize: "clamp(5px, 3vw, 16px)" }}>
        {item.text}
      </p>
    </button>
  </Link>
));

const PersonalInfo = () => {
  const openResume = useCallback(() => {
    window.open("/PRATIK DABHADE RESUME.pdf", "_blank");
  }, []);

  return (
    <div className="bg-gray-900 md:h-screen px-4 md:px-10 pt-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full items-center">
        {/* Left Section (Text) */}
        <div className="text-white flex flex-col justify-center items-center md:items-start text-center md:text-left order-2 md:order-1">
          <h1 className="font-extrabold text-[clamp(24px,5vw,45px)]">Hi, I am</h1>
          <h1 className="font-extrabold text-[clamp(24px,5vw,45px)]">Pratik Dabhade</h1>
          <h3 className="font-extrabold flex gap-3 text-center md:text-left text-nowrap text-[clamp(20px,4vw,40px)]">
            I am
            <span className="text-purple-800">
              <TypeAnimation
                sequence={["Full Stack Developer", 1000, "Web Developer", 1000, "Freelancer", 1000]}
                wrapper="span"
                speed={40}
                style={{ fontSize: "inherit", display: "inline-block" }}
                repeat={Infinity}
              />
            </span>
          </h3>
          <p className="text-gray-400 mt-5" style={{ fontSize: "clamp(12px,2.5vw,20px)" }}>
            I am a motivated and versatile individual, always eager to take on new challenges.
            With a passion for learning, I am dedicated to delivering high-quality results. With a
            positive attitude and a growth mindset, I am ready to make a meaningful contribution and
            achieve great things.
          </p>

          <button
            className="rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white w-full px-5 py-3 my-5"
            onClick={openResume}
          >
            Check Resume
          </button>

          <div className="flex items-center justify-center md:justify-start w-full py-2 mt-0 md:mt-5">
            <div className="flex gap-4 md:gap-8">
              {social_media.map((item, index) => (
                <SocialMediaButton key={index} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Section (Profile Image) */}
        <div className="flex justify-center items-center order-1 md:order-2">
          <div className="relative p-[10px]">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur-[20px] animate-pulse z-0"></div>
            <div className="relative z-10 transition-all duration-300 ease-in-out hover:scale-105">
              <Image
                src={pratik}
                className="rounded-full h-full w-full max-h-[35vh] md:max-h-[50vh] max-w-[70vh] shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                alt="Profile Image"
                priority 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
