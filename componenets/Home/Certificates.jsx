"use client";
import Image from "next/image";
import React, { useMemo, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ImageViewer from "../common/ImageViewer";

const Certificates = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMarksheet, setSelectedMarksheet] = useState("");
  const [centerIdx, setCenterIdx] = useState(1); 
  const dragStartX = useRef(null);

  const Certificate = useMemo(() => [
    { name: "GEN-AI WITH GOOGLE CLOUD", image: "/certificates/genAi.jpg" },
    { name: "FULL STACK DEVELOPMENT", image: "/certificates/FSD.jpg" },
    { name: "TAPOP INTERNSHIP", image: "/certificates/tapop.png" },
    { name: "PERSIST VENTURES OFFER", image: "/certificates/persist Offer letter.png" },
  ], []);

  const handleLeft = () => setCenterIdx((prev) => (prev - 1 + Certificate.length) % Certificate.length);
  const handleRight = () => setCenterIdx((prev) => (prev + 1) % Certificate.length);

  const openMarksheetModal = (marksheetImage) => {
    setSelectedMarksheet(marksheetImage);
    setIsModalOpen(true);
  };

  const closeMarksheetModal = () => setIsModalOpen(false);

  const getCertIdx = (offset) => (centerIdx + offset + Certificate.length) % Certificate.length;

  const positions = [
    { offset: -2, x: -280, z: -300, rotate: 45, scale: 0.6, opacity: 0.2 },
    { offset: -1, x: -180, z: -150, rotate: 25, scale: 0.8, opacity: 0.6 },
    { offset: 0, x: 0, z: 0, rotate: 0, scale: 1, opacity: 1 },
    { offset: 1, x: 180, z: -150, rotate: -25, scale: 0.8, opacity: 0.6 },
    { offset: 2, x: 280, z: -300, rotate: -45, scale: 0.6, opacity: 0.2 },
  ];

  return (
    <div className="flex flex-col items-center py-24 px-4 relative overflow-hidden">
      {/* Background Section Glow */}
      <div className="ambient-glow top-1/2 left-1/4 opacity-5" />

      <div className="text-center space-y-4 mb-16">
        <h2 className="text-primary-500 font-bold tracking-widest uppercase">Recognition</h2>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-950 uppercase">Expert <span className="text-primary-500">Credentials</span></h1>
      </div>

      <div className="relative flex items-center justify-center w-full max-w-6xl min-h-[500px] select-none" style={{ perspective: 1500 }}>
        {/* Left Arrow */}
        <button
          className="absolute left-4 md:left-10 z-30 w-14 h-14 bg-primary-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 pointer-events-auto"
          onClick={handleLeft}
        >
          <FaChevronLeft className="text-xl" />
        </button>

        {/* 3D Carousel Cards */}
        <div className="relative w-full flex items-center justify-center h-[500px]" style={{ transformStyle: 'preserve-3d' }}>
          {positions.map((pos) => {
            const idx = getCertIdx(pos.offset);
            const isCenter = pos.offset === 0;
            return (
              <div
                key={`${idx}-${pos.offset}`}
                className={`absolute w-[340px] md:w-[400px] aspect-[4/5] glass-card rounded-[3.5rem] p-4 flex flex-col transition-all duration-700 ease-out cursor-pointer
                  ${isCenter ? 'border-primary-500/50' : ''}
                `}
                style={{
                  transform: `translateX(${pos.x}px) translateZ(${pos.z}px) rotateY(${pos.rotate}deg) scale(${pos.scale})`,
                  opacity: pos.opacity,
                  zIndex: 20 - Math.abs(pos.offset),
                  pointerEvents: isCenter ? 'auto' : 'none',
                }}
                onClick={() => isCenter && openMarksheetModal(Certificate[idx].image)}
              >
                <div className="relative flex-1 rounded-[2.5rem] overflow-hidden mb-6 border border-slate-100">
                  <Image
                    src={Certificate[idx].image}
                    alt={Certificate[idx].name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary-500/5" />
                </div>
                
                <div className="px-4 pb-6 text-center space-y-4">
                  <h3 className={`font-bold tracking-tighter leading-tight uppercase transition-colors duration-300
                    ${isCenter ? 'text-primary-500 text-2xl' : 'text-slate-400 text-lg'}`}
                  >
                    {Certificate[idx].name}
                  </h3>
                  {isCenter && (
                    <button
                      className="w-full py-4 bg-primary-500 text-white rounded-2xl font-bold tracking-widest text-xs transition-all duration-300 uppercase shadow-lg"
                      onClick={() => openMarksheetModal(Certificate[idx].image)}
                    >
                      Authenticate
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-4 md:right-10 z-30 w-14 h-14 bg-primary-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 pointer-events-auto"
          onClick={handleRight}
        >
          <FaChevronRight className="text-xl" />
        </button>
      </div>

      <ImageViewer
        isOpen={isModalOpen}
        onClose={closeMarksheetModal}
        imageSrc={selectedMarksheet}
        width={800}
      />
    </div>
  );
};

export default Certificates;
