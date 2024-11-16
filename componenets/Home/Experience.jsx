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
  }];

  return (
    <div className="bg-gradient-to-b from-[#310c43] to-[#0e000d] flex flex-col items-center py-10 gap-6">
      <h1 className="text-white font-extrabold text-3xl md:text-4xl">- Experience -</h1>

      <div className="flex flex-wrap px-6 justify-center items-center">
        {experience_data.map((data, index) => (
          <div
            key={index}
            onClick={() => openMarksheetModal(data.certificate)}
            className="bg-white/10 backdrop-blur-lg rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 flex flex-col w-full sm:w-[700px] h-auto p-4 cursor-pointer gap-6"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <Image
                src={data.image}
                height={80}
                width={100}
                alt={`Image of ${data.company}`}
                className="object-cover rounded-md"
                priority
              />
              <div className="flex flex-col gap-1 text-white text-left w-full">
                <h2 className="font-bold text-xl md:text-3xl">{data.company}</h2>
                <div className="flex flex-wrap items-center justify-between w-full">
                  <p className="text-white font-bold text-md md:text-xl">{data.position}</p>
                  <p className="text-white font-semibold text-sm md:text-md">{data.date}</p>
                </div>
                <ul className="list-disc text-gray-400 pl-5 mt-2">
                  {data.description.map((desc, i) => (
                    <li key={i} className="text-sm text-white md:text-md">{desc}</li>
                  ))}
                </ul>
              </div>
            </div>

            <button
                onClick={() => openMarksheetModal(data.certificate)}
                className="bg-purple-900 text-white rounded-xl border-2 border-purple-950 shadow-xl py-2 px-4 w-auto self-center md:self-start text-sm"
                aria-label={`View marksheet for ${data.company}`}
              >
                View Certificate
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

export default Experience;
