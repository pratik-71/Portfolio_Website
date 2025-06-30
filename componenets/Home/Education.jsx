"use client";
import Image from "next/image";
import React, { useState } from "react";
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

  const openMarksheetModal = (marksheetImage) => {
    setSelectedMarksheet(marksheetImage);
    setIsModalOpen(true);
  };

  const closeMarksheetModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center py-10 px-2">
      <h1 className="text-4xl font-extrabold mb-12 text-purple-400">Education</h1>
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {education.map((edu, idx) => (
          <div
            key={edu.name}
            className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col px-6 py-7 transition-all duration-300 hover:shadow-purple-700/30 hover:border-purple-400/40 hover:-translate-y-2 hover:scale-105 group"
            style={{ minHeight: 320, height: 'auto' }}
          >
            <div className="flex flex-col items-center gap-2 mb-2">
              <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white shadow-md mb-2">
                <Image src={edu.image} width={64} height={64} alt={edu.name} className="object-cover w-full h-full" />
              </div>
              <h2 className="font-bold text-lg text-center text-purple-100 drop-shadow-md">{edu.name}</h2>
              <p className="text-purple-300 text-sm font-semibold">{edu.program}</p>
              <p className="text-xs text-purple-200 italic">{edu.startyear} - {edu.endyear}</p>
              <p className="text-purple-300 font-bold text-md mt-2">Grade: {edu.grade}</p>
            </div>
            <p className="text-xs text-gray-200 mt-2 text-center mb-4">{edu.description}</p>
            <div className="flex w-full justify-center mt-auto">
              <button
                onClick={() => openMarksheetModal(edu.marksheet)}
                className="group/button bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white rounded-xl px-6 py-2 font-semibold text-base shadow-lg transition-all duration-300 hover:from-purple-600 hover:to-blue-600 hover:shadow-purple-500/40 focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                View Marksheet
              </button>
            </div>
          </div>
        ))}
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
