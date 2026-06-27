"use client";
import React, { useCallback, useState, useRef, useEffect } from "react";
import ImageViewer from "../common/ImageViewer";
import Image from "next/image";

const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [visible, setVisible] = useState([]);
  const cardRefs = useRef([]);

  const openImageModal = useCallback((image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  }, []);

  const closeImageModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const projects = [
    {
      image: "/projects/icon.png",
      name: "MEMORIES: TIMELINE TRACKER",
      technology: "REACT NATIVE, EXPO, SUPABASE, AI, Tailwind CSS",
      description:
        "A premium iOS application for tracking life's timelines and milestones. Users can effortlessly create visual journals of their memories, track durations of important events, and maintain a aesthetic digital history.",
      link: "https://apps.apple.com/us/app/memories-timeline-tracker/id6758773374",
    },
    {
      image: "/projects/Resume_maker.png",
      name: "ResumeAlly",
      technology: "REACT, EXPRESS, SUPABASE, REDIS, KAFKA, SEO",
      description:
        "An AI-powered resume optimization platform that boosts ATS scores. Includes a browser extension that instantly auto-customizes resumes to match job descriptions, built with a secure, high-performance architecture.",
      link: "https://resumeally.in/",
    },
    {
      image: "/projects/2D RPG GAME.png",
      name: "MULTIPLAYER RPG GAME",
      technology: "PHASER 3, SOCKET.IO, REACT JS, NODE.JS",
      description:
        "An immersive 2D Multiplayer RPG engineered with Phaser 3 and Socket.io for low-latency real-time synchronization. Features dynamic room-based matchmaking, an interactive combat system, seamless player movement, and robust server-side state management.",
      link: "https://github.com/pratik-71/2D_RPG.git",
    },
  ];

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-idx'));
            setVisible((prev) => [...new Set([...prev, idx])]);
          }
        });
      },
      { threshold: 0.1 }
    );
    cardRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center py-12 px-4 relative overflow-hidden text-white">
      {/* Ambient Glow */}
      <div className="ambient-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5" />

      <div className="text-center space-y-3 mb-12">
        <h2 className="text-gold font-bold tracking-widest capitalize lowercase text-xs">Portfolio</h2>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white capitalize lowercase">FEATURED <span className="text-gold">PROJECTS</span></h1>
      </div>

      <div className="flex flex-col gap-24 w-full max-w-6xl mx-auto">
        {projects.map((pro, index) => (
          <div
            key={index}
            ref={el => cardRefs.current[index] = el}
            data-idx={index}
            className={`flex flex-col lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} gap-10 items-center transition-all duration-1000 ease-out
              ${visible.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}
            `}
          >
            {/* Image Section */}
            <div className="w-full lg:w-[55%] relative h-[300px] sm:h-[400px] rounded-3xl overflow-hidden group shadow-2xl cursor-pointer" onClick={() => openImageModal(pro.image)}>
              <Image
                src={pro.image}
                fill
                alt={pro.name}
                unoptimized
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500" />
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-[45%] flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-6">
                {pro.technology.split(", ").map((tech, idx) => (
                  <span key={idx} className="text-[10px] font-bold tracking-widest text-gold border border-gold/20 bg-black/50 px-3 py-1.5 rounded-full capitalize lowercase">
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-3xl sm:text-4xl font-black tracking-tighter text-white mb-6 capitalize lowercase leading-tight">
                {pro.name}
              </h3>

              <p className="text-white/70 text-base font-medium mb-8 leading-relaxed">
                {pro.description}
              </p>

              {pro.link && (
                <div className="mt-auto">
                  <a
                    href={pro.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3.5 bg-gold text-black rounded-full font-bold tracking-widest transition-all duration-300 hover:bg-white hover:shadow-gold-glow capitalize lowercase text-xs"
                  >
                    {pro.link.includes('github.com') ? 'Explore Code' : 'Launch Project'}
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <ImageViewer
        isOpen={isModalOpen}
        onClose={closeImageModal}
        imageSrc={selectedImage}
        width={700}
      />
    </div>
  );
};

export default Project;
