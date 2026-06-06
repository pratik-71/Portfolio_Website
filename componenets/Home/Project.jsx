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
      image: "/projects/memories.png",
      name: "MEMORIES: TIMELINE TRACKER",
      technology: "REACT NATIVE, EXPO",
      description:
        "A premium iOS application for tracking life's timelines and milestones. Users can effortlessly create visual journals of their memories, track durations of important events, and maintain a aesthetic digital history.",
      link: "https://apps.apple.com/us/app/memories-timeline-tracker/id6758773374",
    },
    {
      image: "/projects/Resume_maker.png",
      name: "RESUMEFLOW: AI RESUME PLATFORM",
      technology: "REACT, EXPRESS, SUPABASE, REDIS, KAFKA, SEO",
      description:
        "An AI-powered resume optimization platform that boosts ATS scores. Includes a browser extension that instantly auto-customizes resumes to match job descriptions, built with a secure, high-performance architecture.",
      link: "https://jobsflow.works/",
    },
    {
      image: "/projects/2D RPG GAME.png",
      name: "MULTIPLAYER RPG GAME",
      technology: "PHASER 3, SOCKET.IO, REACT JS",
      description:
        "A 2D Multiplayer RPG built with Phaser 3 and Socket.io. Features real-time player movement, combat systems, and room-based matchmaking.",
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
        <h2 className="text-gold font-bold tracking-widest uppercase text-xs">Portfolio</h2>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white uppercase">Featured <span className="text-gold">Projects</span></h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {projects.map((pro, index) => (
          <div
            key={index}
            ref={el => cardRefs.current[index] = el}
            data-idx={index}
            className={`group glass-card rounded-[3.5rem] overflow-hidden flex flex-col transition-all duration-700 ease-out interactive-element border-white/5
              ${visible.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'}
            `}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={pro.image}
                fill
                alt={pro.name}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                onClick={() => openImageModal(pro.image)}
              />
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                {pro.technology.split(", ").map((tech, idx) => (
                  <span key={idx} className="text-[10px] font-black tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full uppercase">
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-black tracking-tighter text-white mb-3 group-hover:text-gold transition-colors uppercase leading-tight">
                {pro.name}
              </h3>

              <p className="text-white/80 text-sm font-medium mb-8 flex-1 leading-relaxed">
                {pro.description}
              </p>

              {pro.link && (
                <a
                  href={pro.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-gold text-black rounded-[2rem] font-black tracking-widest text-center transition-all duration-300 hover:shadow-gold-glow uppercase text-xs inline-block"
                >
                  {pro.link.includes('github.com') ? 'Explore Code' : 'Launch Project'}
                </a>
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
