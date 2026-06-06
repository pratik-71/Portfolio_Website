"use client";
import React, { useState } from "react";
import ImageViewer from "../common/ImageViewer";
import Image from "next/image";

const Experience = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMarksheet, setSelectedMarksheet] = useState("");

  const closeMarksheetModal = () => {
    setIsModalOpen(false);
  };

  const openMarksheetModal = (certificate) => {
    setSelectedMarksheet(certificate);
    setIsModalOpen(true);
  };

  const experience_data = [
    {
      company: "Persist Ventures",
      position: "Full Stack Developer and CTO",
      image: "/experience/Persist.jpeg",
      date: "DEC 2024 - JAN 2026",
      description: [
        "Led daily stand-up meetings to discuss progress, address blockers, and align on next steps with the development team.",
        "Developed full-stack features, handling both frontend UI and backend logic, and ensured smooth API integration.",
        "Translated responsive Figma designs into production-ready code, maintaining pixel-perfect layouts across devices.",
        "Collaborated with stakeholders, investors, and partner organizations to present product pitches and align business goals with technical execution."
      ],
      certificate: "/certificates/persist Offer letter.png"
    },{
    company: "Qviq",
    position: "Full Stack Developer Intern",
    image: "/experience/qviq.png",
    date: "APRIL 2024 - JUNE 2024",
    description: [
      "Participated in daily standup meetings with project teams in order to discuss progress updates.",
      "Utilized source control systems such as Git to manage codebase changes.",
      "Collaborated with other developers to design, develop, test and deploy applications.",
      "Converted Figma designs into code.",
      "Made API calls to backend and third-party services for seamless data integration."
    ],
    certificate: "/certificates/tapop.png"
  }
];

  return (
    <div className="flex flex-col items-center py-12 gap-12 px-4 min-h-screen relative overflow-hidden">
      {/* Background Section Glow */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="text-center space-y-3">
        <h2 className="text-gold font-bold tracking-widest uppercase text-xs">Career Journey</h2>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">REMARKABLE <span className="text-gold">EXPERIENCE</span></h1>
      </div>
      
      <div className="relative w-full max-w-6xl mt-12">
        {/* Main vertical timeline line */}
        <div className="absolute left-12 md:left-1/2 transform -translate-x-1/2 w-1.5 bg-white/10 h-full rounded-full overflow-hidden">
           <div className="w-full h-1/2 bg-gold shadow-gold-glow" />
        </div>
        
        {/* Timeline items */}
        <div className="relative space-y-24">
          {experience_data.map((data, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-12 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-black border-4 border-gold rounded-full z-10 shadow-gold-glow" />

              <div className={`w-full flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} justify-center pl-24 md:pl-0`}>
                <div className={`w-full md:w-[45%] group interactive-element`}> 
                  <div
                    className="glass-card rounded-[3rem] p-6 hover:border-gold/30 transition-all duration-500 cursor-pointer"
                    onClick={() => openMarksheetModal(data.certificate)}
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 text-center sm:text-left">
                       <div className="w-16 h-16 bg-white/5 rounded-[1.2rem] flex items-center justify-center p-2.5 shadow-inner border border-white/10">
                          <Image
                            src={data.image}
                            height={48}
                            width={48}
                            alt={data.company}
                            className="object-contain"
                          />
                       </div>
                       <div className="flex-1">
                          <span className="text-gold text-sm font-bold tracking-widest">{data.date}</span>
                          <h2 className="text-xl font-bold tracking-tighter text-white  transition-colors duration-300 uppercase leading-none mt-1">
                            {data.company}
                          </h2>
                          <p className="text-white/80 font-bold text-base mt-1">
                            {data.position}
                          </p>
                       </div>
                    </div>
                    
                    {/* Description */}
                    <ul className="space-y-4 mb-8">
                      {data.description.map((desc, i) => (
                        <li key={i} className="flex gap-3 text-white/90">
                          <span className="text-gold mt-1.5 flex-shrink-0">
                            <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4"/></svg>
                          </span>
                          <p className="text-sm font-medium leading-relaxed">{desc}</p>
                        </li>
                      ))}
                    </ul>
                    
                    <button
                      onClick={e => { e.stopPropagation(); openMarksheetModal(data.certificate); }}
                      className="w-full py-3 bg-gold/10 hover:bg-gold text-gold hover:text-white rounded-2xl font-bold tracking-widest transition-all duration-300 border border-gold/20 uppercase text-[10px]"
                    >
                      View Credential
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
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

export default Experience;
