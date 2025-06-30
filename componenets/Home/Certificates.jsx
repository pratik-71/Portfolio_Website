"use client";
import Image from "next/image";
import React, { useMemo, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ImageViewer from "../common/ImageViewer";

const Certificates = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMarksheet, setSelectedMarksheet] = useState("");

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

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const openMarksheetModal = (marksheetImage) => {
    setSelectedMarksheet(marksheetImage);
    setIsModalOpen(true);
  };

  const closeMarksheetModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center py-10 gap-8 px-2">
      <h1 className="text-4xl font-extrabold mb-6 text-purple-400">- Certificates -</h1>
      <div className="flex items-center gap-2 md:gap-4">
        <button
          onClick={scrollLeft}
          className="bg-gradient-to-r from-purple-700 to-blue-700 text-white p-3 rounded-full hover:bg-purple-500 transition-transform hover:scale-110 shadow-lg"
        >
          <FaChevronLeft />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-8 no-scrollbar overflow-x-scroll scroll-smooth w-[70vw] md:w-[75vw] py-6"
        >
          {Certificate.map((edu, index) => (
            <div
              key={index}
              className="min-w-[260px] max-w-[400px] min-h-[320px] bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col items-center gap-4  transition-all duration-300 hover:shadow-purple-700/30 hover:border-purple-400/40 hover:-translate-y-2 group"
            >
              <div className="relative w-full h-48 md:h-64 overflow-hidden rounded-t-2xl">
                <Image
                  src={edu.image}
                  alt={edu.name}
                  fill
                  className="object-cover w-full h-full rounded-t-2xl transition-all duration-200 hover:scale-105 cursor-zoom-in"
                  onClick={() => openMarksheetModal(edu.image)}
                />
              </div>
              <p className="text-center p-2 text-white font-semibold text-lg mt-2 group-hover:text-purple-300 transition-colors duration-300">
                {edu.name}
              </p>
              <div className="flex w-full justify-center mt-auto mb-2">
                <button
                  className="group/button bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white rounded-xl px-6 py-2 font-semibold text-base shadow-lg transition-all duration-300 hover:from-purple-600 hover:to-blue-600 hover:shadow-purple-500/40 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  onClick={() => openMarksheetModal(edu.image)}
                >
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="bg-gradient-to-r from-purple-700 to-blue-700 text-white p-3 rounded-full hover:bg-purple-500 transition-transform hover:scale-110 shadow-lg"
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
