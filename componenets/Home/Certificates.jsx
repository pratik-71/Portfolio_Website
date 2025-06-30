"use client";
import Image from "next/image";
import React, { useMemo, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ImageViewer from "../common/ImageViewer";

const Certificates = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMarksheet, setSelectedMarksheet] = useState("");
  const [centerIdx, setCenterIdx] = useState(1); // Start with the second certificate centered
  const dragStartX = useRef(null);

  const Certificate = useMemo(() => [
    {
      name: "Udacity Gen-AI with Google Cloud",
      image: "/certificates/genAi.jpg",
    },
    {
      name: "UpGrad Full Stack Development Certificate",
      image: "/certificates/FSD.jpg",
    },
    {
      name: "Tapop Internship Certificate",
      image: "/certificates/tapop.png",
    },
    {
      name: "Persist Ventures Offer Letter",
      image: "/certificates/persist Offer letter.png",
    },
  ], []);

  const handleLeft = () => {
    setCenterIdx((prev) => (prev - 1 + Certificate.length) % Certificate.length);
  };
  const handleRight = () => {
    setCenterIdx((prev) => (prev + 1) % Certificate.length);
  };

  // Drag/swipe support
  const handleDragStart = (e) => {
    dragStartX.current = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
  };
  const handleDragEnd = (e) => {
    if (dragStartX.current === null) return;
    const endX = e.type === 'touchend' ? e.changedTouches[0].clientX : e.clientX;
    const diff = endX - dragStartX.current;
    if (diff > 50) handleLeft();
    else if (diff < -50) handleRight();
    dragStartX.current = null;
  };

  const openMarksheetModal = (marksheetImage) => {
    setSelectedMarksheet(marksheetImage);
    setIsModalOpen(true);
  };

  const closeMarksheetModal = () => {
    setIsModalOpen(false);
  };

  // Helper to get the correct certificate for each position
  const getCertIdx = (offset) => (centerIdx + offset + Certificate.length) % Certificate.length;

  // 3D Coverflow positions
  const positions = [
    { offset: -2, x: -220, z: -200, rotate: 40, scale: 0.7, opacity: 0.3 },
    { offset: -1, x: -120, z: -80, rotate: 25, scale: 0.85, opacity: 0.7 },
    { offset: 0, x: 0, z: 0, rotate: 0, scale: 1, opacity: 1 },
    { offset: 1, x: 120, z: -80, rotate: -25, scale: 0.85, opacity: 0.7 },
    { offset: 2, x: 220, z: -200, rotate: -40, scale: 0.7, opacity: 0.3 },
  ];

  return (
    <div className="flex flex-col items-center py-10 gap-8 px-2">
      <h1 className="text-4xl font-extrabold mb-6 text-purple-400">- Certificates -</h1>
      <div className="relative flex items-center justify-center w-full max-w-4xl min-h-[420px] select-none"
        style={{ perspective: 1200 }}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
      >
        {/* Left Arrow */}
        <button
          className="flex absolute left-0 z-20 bg-gradient-to-br from-purple-700 to-blue-700 text-white rounded-full p-2 md:p-3 shadow-lg hover:scale-110 transition disabled:opacity-30"
          onClick={handleLeft}
          aria-label="Previous Certificate"
        >
          <FaChevronLeft />
        </button>
        {/* 3D Carousel Cards */}
        <div className="relative w-full flex items-center justify-center h-[420px]" style={{ perspective: 1200 }}>
          {positions.map((pos, i) => {
            const idx = getCertIdx(pos.offset);
            const isCenter = pos.offset === 0;
            return (
              <div
                key={idx}
                className={`absolute left-1/2 top-1/2 w-[320px] h-[420px] flex-shrink-0 rounded-2xl shadow-xl flex flex-col justify-between items-center transition-all duration-700 group cursor-pointer
                  ${isCenter ? 'bg-gradient-to-br from-white to-purple-100 border-4 border-purple-400 shadow-2xl' : 'bg-gradient-to-br from-[#f8fafc]/80 to-[#e0e7ff]/60 border border-purple-300/30 opacity-60'}
                  ${isCenter ? 'ring-4 ring-purple-300/40' : ''}
                `}
                style={{
                  transform: `translate(-50%, -50%) translateX(${pos.x}px) translateZ(${pos.z}px) rotateY(${pos.rotate}deg) scale(${pos.scale})`,
                  zIndex: 10 - Math.abs(pos.offset),
                  boxShadow: isCenter ? '0 8px 32px 0 rgba(80, 0, 120, 0.18), 0 0 0 8px rgba(168,85,247,0.10)' : '0 2px 8px 0 rgba(80,0,120,0.10)',
                  pointerEvents: isCenter ? 'auto' : 'none',
                }}
                onClick={pos.offset === 1 ? handleRight : pos.offset === -1 ? handleLeft : undefined}
              >
                {/* Colored Ribbon/Top Border */}
                <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-purple-500 via-pink-400 to-blue-500 rounded-t-2xl z-10" />
                <div className="relative w-full h-48 overflow-hidden rounded-t-2xl mt-3">
                  <Image
                    src={Certificate[idx].image}
                    alt={Certificate[idx].name}
                    fill
                    className="object-cover w-full h-full rounded-t-2xl transition-all duration-200 hover:scale-105 cursor-zoom-in"
                    onClick={() => openMarksheetModal(Certificate[idx].image)}
                  />
                </div>
                <p className={`text-center p-2 font-bold text-lg flex-1 flex items-center justify-center transition-colors duration-300
                  ${isCenter ? 'text-purple-900 group-hover:text-purple-700' : 'text-gray-700 group-hover:text-purple-400'}`}
                >
                  {Certificate[idx].name}
                </p>
                <div className="flex w-full justify-center mb-4 mt-auto">
                  <button
                    className={`group/button bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white rounded-xl px-6 py-2 font-semibold text-base shadow-lg transition-all duration-300
                      hover:from-purple-600 hover:to-blue-600 hover:shadow-purple-500/40 focus:outline-none focus:ring-2 focus:ring-purple-400
                      ${isCenter ? '' : 'opacity-80'}`}
                    onClick={() => openMarksheetModal(Certificate[idx].image)}
                  >
                    View Certificate
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {/* Right Arrow */}
        <button
          className="flex absolute right-0 z-20 bg-gradient-to-br from-purple-700 to-blue-700 text-white rounded-full p-2 md:p-3 shadow-lg hover:scale-110 transition disabled:opacity-30"
          onClick={handleRight}
          aria-label="Next Certificate"
        >
          <FaChevronRight />
        </button>
      </div>
      <ImageViewer
        isOpen={isModalOpen}
        onClose={closeMarksheetModal}
        imageSrc={selectedMarksheet}
        width={700}
      />
    </div>
  );
};

export default Certificates;
