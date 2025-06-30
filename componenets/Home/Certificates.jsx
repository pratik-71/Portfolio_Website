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
    <div className="bg-gray-900 flex flex-col items-center py-10 gap-4">
      <p className="text-white font-extrabold text-3xl md:text-4xl ">
        - Certificates -
      </p>

      <div className="flex items-center gap-1 md:gap-4" >
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="bg-purple-900 text-white p-3 rounded-full hover:bg-purple-500 transition-transform transform hover:scale-110 shadow-lg"
        >
          <FaChevronLeft />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 no-scrollbar overflow-x-scroll scroll-smooth w-[70vw] md:w-[75vw] py-6"
        >
          {Certificate.map((edu, index) => (
            <div
            key={index}
            className="min-w-[220px] w-full max-w-[550px] min-h-[250px] md:min-h-[420px] bg-gradient-to-r from-[#310c43] to-[#190128] backdrop-blur-lg border border-gray-500 shadow-md hover:shadow-2xl rounded-lg flex flex-col items-center gap-2 transition-transform duration-300 transform hover:-translate-y-4 hover:border-purple-400"
          >
            <div className="relative w-full min-h-[200px] md:min-h-[290px] overflow-hidden rounded-md">
              <Image
                src={edu.image}
                alt={edu.name}
                layout="fill" 
                objectFit="contain" 
                className="rounded-md transition-transform hover:shadow-md hover:shadow-purple-300"
              />
            </div>
            <p className="text-center text-white font-semibold text-lg mt-3">
              {edu.name}
            </p>
            <button
              className="bg-purple-900 text-white border-2 hover:border-0 py-2 px-4 border-purple-950 rounded-lg hover:shadow-md hover:shadow-purple-300 mb-4"
              onClick={() => openMarksheetModal(edu.image)}
            >
              View Certificate
            </button>
          </div>
          
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="bg-purple-900 text-white p-3 rounded-full hover:bg-purple-500 transition-transform transform hover:scale-110 shadow-lg"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Image Viewer Modal */}
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
