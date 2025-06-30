"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ImageViewer from "../common/ImageViewer";

const Education = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMarksheet, setSelectedMarksheet] = useState("");

  const education = [
    {
      image: "/education/sahyog.jpeg",
      marksheet: "/education/Bsc-IT MarkSheet.jpeg",
      name: "Sahyog College of Management Studies Thane",
      program: "Bachelors in Information Technology",
      grade: "9.18 CGPA",
      startyear: "2020",
      endyear: "2023",
      description:
        "I had done Bachelor's degree in Information technology at Sahyog College of management studies, Thane, where I am honing my skills in computer science and information technology.",
    },
    {
      image: "/education/abhinav.jpeg",
      marksheet: "/education/Bsc-IT MarkSheet.jpeg",
      name: "Abhinav Gyan Mandir Prashala Karjat",
      program: "SSC Science - 11th-12th",
      grade: "65 %",
      startyear: "2018",
      endyear: "2020",
      description:
        "This program is equipping me with the knowledge and expertise required to thrive in the dynamic field of technology and software development.",
    },
    {
      image: "/education/ytps.jpeg",
      marksheet: "/education/10th MarkSheet.jpg",
      name: "Yadavrao Tasgaonkar Public School",
      grade: "78 %",
      program: "CBSE 5th-10th",
      startyear: "2013",
      endyear: "2018",
      description:
        "I developed a strong academic foundation through a diverse curriculum that prepared me for higher education in the technology field.",
    },
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    scrollRef.current.scrollBy({ left: direction === "left" ? -300 : 300, behavior: "smooth" });
  };

  const openMarksheetModal = (marksheetImage) => {
    setSelectedMarksheet(marksheetImage);
    setIsModalOpen(true);
  };

  const closeMarksheetModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 gap-8 px-2">
      <h1 className="text-4xl font-extrabold  mb-6 text-purple-400">Education</h1>
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() => scroll("left")}
          className="bg-gradient-to-r from-purple-700 to-blue-700 text-white p-3 rounded-full hover:bg-purple-500 transition-transform hover:scale-110 shadow-lg"
          aria-label="Scroll left"
        >
          <FaChevronLeft />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-8 no-scrollbar overflow-x-scroll scroll-smooth w-[70vw] md:w-[90vw] py-4 mx-auto justify-center"
        >
          {education.map((edu, index) => (
            <div
              key={edu.name}
              className="min-w-[280px] max-w-[400px] min-h-[340px] bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col justify-between px-6 py-7 transition-all duration-300 hover:shadow-purple-700/30 hover:border-purple-400/40 hover:-translate-y-2 group"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-900/40 to-blue-900/30 rounded-2xl shadow-md overflow-hidden">
                  <Image
                    src={edu.image}
                    height={64}
                    width={64}
                    alt={`Logo of ${edu.name}`}
                    className="object-contain w-16 h-16"
                    priority
                  />
                </div>
                <div className="flex flex-col gap-1 text-white text-center md:text-left">
                  <h2 className="font-extrabold text-xl md:text-2xl group-hover:text-purple-300 transition-colors duration-300">{edu.name}</h2>
                  <p className="text-purple-200 text-sm md:text-md font-semibold">{edu.program}</p>
                </div>
              </div>
              <div className="text-white mt-2 text-center md:text-left">
                <p className="text-md md:text-lg italic text-purple-300 font-bold">Grade: {edu.grade}</p>
                <p className="text-xs md:text-sm text-gray-300 mt-2">{edu.description}</p>
              </div>
              <div className="flex w-full justify-center">
                <button
                  onClick={() => openMarksheetModal(edu.marksheet)}
                  className="group/button bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white rounded-xl px-6 py-2 font-semibold text-base shadow-lg transition-all duration-300 hover:from-purple-600 hover:to-blue-600 hover:shadow-purple-500/40 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  aria-label={`View marksheet for ${edu.name}`}
                >
                  View Marksheet
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => scroll("right")}
          className="bg-gradient-to-r from-purple-700 to-blue-700 text-white p-3 rounded-full hover:bg-purple-500 transition-transform hover:scale-110 shadow-lg"
          aria-label="Scroll right"
        >
          <FaChevronRight />
        </button>
      </div>
      <ImageViewer
        isOpen={isModalOpen}
        onClose={closeMarksheetModal}
        imageSrc={selectedMarksheet}
        width={400}
      />
    </div>
  );
};

export default Education;
