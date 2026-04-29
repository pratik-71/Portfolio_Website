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
      marksheet: "/education/Bsc-IT Marksheet.jpeg",
      name: "SAHYOG COLLEGE OF MANAGEMENT",
      program: "BACHELORS IN INFORMATION TECHNOLOGY",
      grade: "9.18 CGPA",
      startyear: "2020",
      endyear: "2023",
      description:
        "Specialized in Software Engineering and Database Management, maintaining high academic standards throughout the degree.",
    },
    {
      image: "/education/abhinav.jpeg",
      marksheet: "/education/12th Marksheet.jpeg",
      name: "ABHINAV GYAN MANDIR PRASHALA",
      program: "SCIENCE - HIGHER SECONDARY",
      grade: "65 %",
      startyear: "2018",
      endyear: "2020",
      description:
        "Focused on Mathematics and Physics, building a strong foundation for technical studies in Information Technology.",
    },
    {
      image: "/education/ytps.jpeg",
      marksheet: "/education/10th Marksheet.jpg",
      name: "YADAVRAO TASGAONKAR SCHOOL",
      grade: "78 %",
      program: "CBSE SECONDARY EDUCATION",
      startyear: "2013",
      endyear: "2018",
      description:
        "Developed core analytical and problem-solving skills through a diverse and rigorous CBSE curriculum.",
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
    <div className="flex flex-col items-center py-24 px-4 relative overflow-hidden">
      {/* Background Section Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="text-center space-y-3 mb-12">
        <h2 className="text-gold font-bold tracking-widest uppercase text-xs">Academic History</h2>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white uppercase sm:leading-none">Learning <span className="text-gold">Journey</span></h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {education.map((edu, idx) => (
          <div
            key={edu.name}
            className="glass-card rounded-[3.5rem] p-8 interactive-element hover:border-gold/30 flex flex-col items-center text-center group"
          >
            <div className="w-20 h-20 rounded-[1.5rem] overflow-hidden mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-500">
               <Image src={edu.image} width={80} height={80} alt={edu.name} className="object-cover w-full h-full" />
            </div>

            <div className="flex-1 space-y-4">
              <span className="text-gold text-xs font-bold tracking-widest uppercase">{edu.startyear} — {edu.endyear}</span>
              <h3 className="text-xl font-bold tracking-tighter text-white uppercase leading-tight group-hover:text-gold transition-colors duration-300">
                {edu.name}
              </h3>
              <p className="text-white font-bold text-sm tracking-wide uppercase">{edu.program}</p>
              <div className="inline-block px-4 py-1.5 bg-gold/10 rounded-full border border-gold/20">
                 <span className="text-gold font-bold text-xs">GRADE: {edu.grade}</span>
              </div>
              <p className="text-white/80 text-sm font-medium leading-relaxed pt-2">
                {edu.description}
              </p>
            </div>

            <button
              onClick={() => openMarksheetModal(edu.marksheet)}
              className="w-full mt-8 py-3.5 bg-gold/10 hover:bg-gold text-gold hover:text-white rounded-[2rem] font-bold tracking-widest transition-all duration-300 border border-gold/20 uppercase text-[10px]"
            >
              view
            </button>
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
