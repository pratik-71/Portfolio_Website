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

  const experience_data = [{
    company: "Qviq",
    position: "Full Stack Developer Intern",
    image: "/experience/qviq.png",
    date: "28 April - 20 June",
    description: [
      "Participated in daily standup meetings with project teams in order to discuss progress updates.",
      "Utilized source control systems such as Git to manage codebase changes.",
      "Collaborated with other developers to design, develop, test and deploy applications.",
      "Converted Figma designs into code.",
      "Made API calls to backend and third-party services for seamless data integration."
    ],
    certificate: "/certificates/tapop.png"
  },
  {
    company: "Persist Ventures",
    position: "Full Stack Developer and CTO",
    image: "/experience/Persist.jpeg",
    date: "12 Dec 2024 - Present",
    description: [
      "Led daily stand-up meetings to discuss progress, address blockers, and align on next steps with the development team.",
      "Developed full-stack features, handling both frontend UI and backend logic, and ensured smooth API integration.",
      "Translated responsive Figma designs into production-ready code, maintaining pixel-perfect layouts across devices.",
      "Collaborated with stakeholders, investors, and partner organizations to present product pitches and align business goals with technical execution."
    ],
    certificate: "/certificates/persist Offer letter.png"
  },
];

  return (
    <div className="flex flex-col items-center py-16 gap-8 px-2 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-purple-400 text-center">- Experience Roadmap -</h1>
      
      <div className="relative w-full max-w-6xl px-1 sm:px-4 md:px-8">
        {/* Main vertical timeline line */}
        <div className="absolute left-1/2 md:left-1/2 sm:left-8 transform -translate-x-1/2 md:-translate-x-1/2 sm:translate-x-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 h-full rounded-full shadow-lg z-0 sm:left-4 sm:-translate-x-0"></div>
        
        {/* Timeline items */}
        <div className="relative space-y-16">
          {experience_data.map((data, index) => (
            <div key={index} className="relative flex flex-col md:block">
              {/* Horizontal branch line */}
              <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 w-1/4 h-0.5 
                ${index % 2 === 0 
                  ? 'right-1/2 bg-gradient-to-l from-purple-500/50 to-transparent' 
                  : 'left-1/2 bg-gradient-to-r from-purple-500/50 to-transparent'}`}></div>
              
              {/* Experience card */}
              <div className={`w-full flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} justify-center`}>
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'ml-0' : 'mr-0'} max-w-lg`}> 
                  <div
                    className="relative group bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 transition-all duration-300 hover:shadow-purple-700/30 hover:border-purple-400/40 hover:-translate-y-2 cursor-pointer"
                    onClick={() => openMarksheetModal(data.certificate)}
                  >
                    {/* Date badge */}
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-xs md:text-sm font-semibold shadow-lg">
                      {data.date}
                    </div>
                    
                    <div className="flex flex-col gap-4 mt-4">
                      {/* Company logo and name */}
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-900/40 to-blue-900/30 rounded-xl shadow-md overflow-hidden">
                          <Image
                            src={data.image}
                            height={48}
                            width={48}
                            alt={`Logo of ${data.company}`}
                            className="object-contain w-10 h-10 md:w-12 md:h-12"
                            priority
                          />
                        </div>
                        <div className="flex flex-col">
                          <h2 className="font-extrabold text-lg md:text-2xl text-white group-hover:text-purple-300 transition-colors duration-300">
                            {data.company}
                          </h2>
                          <p className="text-purple-300 font-bold text-sm md:text-lg">
                            {data.position}
                          </p>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <ul className="list-disc text-gray-300 pl-5 space-y-2">
                        {data.description.map((desc, i) => (
                          <li key={i} className="text-xs md:text-sm leading-relaxed">
                            {desc}
                          </li>
                        ))}
                      </ul>
                      
                      {/* View Certificate button */}
                      <div className="flex justify-center mt-4">
                        <button
                          onClick={e => { e.stopPropagation(); openMarksheetModal(data.certificate); }}
                          className="group/button bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white rounded-xl px-4 md:px-6 py-2 font-semibold text-xs md:text-sm shadow-lg transition-all duration-300 hover:from-purple-600 hover:to-blue-600 hover:shadow-purple-500/40 focus:outline-none focus:ring-2 focus:ring-purple-400"
                          aria-label={`View certificate for ${data.company}`}
                        >
                          View Certificate
                        </button>
                      </div>
                    </div>
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
