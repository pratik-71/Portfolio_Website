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
    <div className="flex flex-col items-center py-10 gap-8 px-2">
      <h1 className="text-4xl font-extrabold mb-6 text-purple-400">- Experience -</h1>
      <div className="flex flex-col gap-10 w-full max-w-2xl items-center">
        {experience_data.map((data, index) => (
          <div
            key={index}
            className="relative group bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col w-full p-7 gap-6 transition-all duration-300 hover:shadow-purple-700/30 hover:border-purple-400/40 hover:-translate-y-2 cursor-pointer"
            onClick={() => openMarksheetModal(data.certificate)}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-900/40 to-blue-900/30 rounded-2xl shadow-md overflow-hidden">
                <Image
                  src={data.image}
                  height={64}
                  width={64}
                  alt={`Logo of ${data.company}`}
                  className="object-contain w-16 h-16"
                  priority
                />
              </div>
              <div className="flex flex-col gap-1 text-white text-left w-full">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-2">
                  <h2 className="font-extrabold text-2xl md:text-3xl text-white group-hover:text-purple-300 transition-colors duration-300">{data.company}</h2>
                  <span className="text-xs md:text-sm font-semibold text-purple-200 bg-purple-900/30 px-3 py-1 rounded-full shadow-sm">{data.date}</span>
                </div>
                <p className="text-purple-300 font-bold text-md md:text-lg mt-1">{data.position}</p>
                <ul className="list-disc text-gray-300 pl-5 mt-2 space-y-1">
                  {data.description.map((desc, i) => (
                    <li key={i} className="text-sm md:text-base leading-relaxed">{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex justify-center md:justify-start mt-2">
              <button
                onClick={e => { e.stopPropagation(); openMarksheetModal(data.certificate); }}
                className="group/button bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white rounded-xl px-6 py-2 font-semibold text-base shadow-lg transition-all duration-300 hover:from-purple-600 hover:to-blue-600 hover:shadow-purple-500/40 focus:outline-none focus:ring-2 focus:ring-purple-400"
                aria-label={`View certificate for ${data.company}`}
              >
                View Certificate
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

export default Experience;
