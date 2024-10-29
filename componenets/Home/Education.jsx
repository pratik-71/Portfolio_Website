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
    <div className="bg-gradient-to-b from-[#310c43] to-[#151616] flex flex-col items-center py-5 gap-6">
      <h1 className="text-white font-extrabold text-3xl md:text-4xl">Education</h1>

      <div className="flex items-center gap-2">
        <button
          onClick={() => scroll("left")}
          className="bg-indigo-500 text-white py-3 px-3 rounded-full hover:bg-purple-400 transition-transform transform hover:scale-110"
          aria-label="Scroll left"
        >
          <FaChevronLeft />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 no-scrollbar overflow-x-scroll scroll-smooth w-[70vw] md:w-[90vw] py-4"
        >
          {education.map((edu, index) => (
            <div
              key={edu.name} // Unique key for better performance
              className="w-full min-w-[240px] max-w-[600px] min-h-[300px] bg-white/10 backdrop-blur-lg border border-gray-500 shadow-lg hover:shadow-2xl rounded-lg py-6 px-2 flex flex-col gap-4 transition-transform duration-300 transform hover:-translate-y-2"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <Image
                  src={edu.image}
                  height={80}
                  width={100}
                  alt={`Image of ${edu.name}`}
                  className="object-cover rounded-md border border-gray-400"
                  priority // Optimize loading for important images
                />
                <div className="flex flex-col gap-1 text-white text-center md:text-left">
                  <h2 className="font-bold text-2xl md:text-xl">{edu.name}</h2>
                  <p className="text-gray-300 text-sm md:text-md">{edu.program}</p>
                </div>
              </div>

              <div className="text-white mt-2 text-center md:text-left">
                <p className="text-md md:text-lg italic">Grade: {edu.grade}</p>
                <p className="text-xs md:text-sm text-gray-300 mt-2">{edu.description}</p>
              </div>

              <button
                onClick={() => openMarksheetModal(edu.marksheet)}
                className="bg-purple-900 text-white rounded-xl border-2 border-purple-950 shadow-xl py-2 px-4 w-auto self-center md:self-start text-sm"
                aria-label={`View marksheet for ${edu.name}`}
              >
                View Marksheet
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="bg-indigo-500 text-white p-3 rounded-full hover:bg-purple-400 transition-transform transform hover:scale-110"
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
