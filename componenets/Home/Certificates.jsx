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
    <div className="flex flex-col items-center py-12 px-4 relative overflow-hidden">
      {/* Background Section Glow */}
      <div className="ambient-glow top-1/2 left-1/4 opacity-5" />

      <div className="text-center space-y-3 mb-12">
        <h2 className="text-gold font-bold tracking-widest capitalize lowercase text-xs">Recognition</h2>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white capitalize lowercase"><span className="text-gold">CERTIFICATES</span></h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl mx-auto">
        {Certificate.map((cert, index) => (
          <div 
            key={index}
            className="group relative w-full aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer shadow-2xl bg-black border border-white/20 transition-all duration-500 hover:scale-[1.02] hover:border-gold/50"
            onClick={() => openMarksheetModal(cert.image)}
          >
            <Image
              src={cert.image}
              alt={cert.name}
              fill
              unoptimized
              className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Elegant Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 pointer-events-none">
               <h3 className="text-2xl sm:text-3xl font-black tracking-tighter text-white capitalize lowercase translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                 {cert.name}
               </h3>
               <p className="text-gold text-xs font-bold tracking-widest mt-3 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75 uppercase">
                 View Full Credential →
               </p>
            </div>
          </div>
        ))}
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
