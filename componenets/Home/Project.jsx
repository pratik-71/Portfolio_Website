"use client";
import React, { useCallback, useState, useRef, useEffect } from "react";
import ImageViewer from "../common/ImageViewer";
import Image from "next/image";

const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [visible, setVisible] = useState([]);
  const cardRefs = useRef([]);

  const openImageModal = useCallback((image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  }, []);

  const closeImageModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const projects = [
    {
      image: "/projects/food_delievery.png",
      name: "Food Delivery App",
      technology: "React Js, TailWind CSS",
      description:
        "A sleek and user-friendly food delivery app frontend designed for seamless navigation. Users can browse a diverse menu, place orders, track delivery in real-time, and enjoy a hassle-free checkout process. Features include interactive UI elements, vibrant food images, and responsive design for a delightful user experience.",
      githubLink: "https://github.com/pratik-71/React-Food-Delivery-App",
    },
    {
      image: "/projects/shoe_shop.png",
      name: "OXY Shoe Ecommerce Shop",
      technology: "TailWind CSS, React Js, Express Js, Mongo-DB",
      description:
        "A comprehensive shoe e-commerce platform with a modern frontend and robust backend. Customers can easily browse a wide selection of footwear, filter by size and style, and enjoy a seamless checkout experience. The backend manages inventory and user accounts, while responsive design ensures accessibility across all devices.",
      githubLink: "https://github.com/pratik-71/Shoes_Online_Shop",
    },
    {
      image: "/projects/2D RPG GAME.png",
      name: "2D Multiplayer RPG Game",
      technology: "TailWind CSS, React Js, Phaser 3, Node Js, Socket.io",
      description:
        "A 2D Multiplayer RPG Game built with Phaser 3, Node.js, and Socket.io. Players can join a game room, move around, and interact with other players in real-time. The game features a simple combat system and a team play mode. gives real ime fun experience also message system is also implemented",
      githubLink: "https://github.com/pratik-71/2D_RPG.git",
    },
  ];

  // Staggered fade-in animation using Intersection Observer
  useEffect(() => {
    if (!cardRefs.current) return;
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-idx'));
            setVisible((prev) => {
              if (prev.includes(idx)) return prev;
              return [...prev, idx];
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center py-10 px-2 md:px-8">
      <h1 className="text-4xl font-extrabold mb-8 text-purple-400">- Projects -</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {projects.map((pro, index) => (
          <div
            key={index}
            ref={el => cardRefs.current[index] = el}
            data-idx={index}
            className={`relative group bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col w-full max-w-[420px] min-h-[540px] overflow-hidden transition-all duration-700 ease-out
              hover:shadow-purple-700/30 hover:border-purple-400/40 hover:-translate-y-2 cursor-pointer
              ${visible.includes(index)
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10 pointer-events-none'}
            `}
            style={{ transitionDelay: visible.includes(index) ? `${index * 120}ms` : '0ms' }}
          >
            <div className="w-full h-56 overflow-hidden">
              <Image
                src={pro.image}
                onClick={() => openImageModal(pro.image)}
                alt="Project Image"
                width={400}
                height={224}
                className="object-cover w-full h-full rounded-t-2xl transition-all duration-200 hover:scale-105"
                style={{ cursor: 'zoom-in' }}
              />
            </div>
            <div className="flex flex-col flex-1 px-6 py-4">
              <h3 className="text-2xl font-bold text-white mb-2 text-center group-hover:text-purple-300 transition-colors duration-300">
                {pro.name}
              </h3>
              <div className="flex flex-wrap justify-center gap-2 mb-3">
                {pro.technology.split(", ").map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-[#2a0a3c] to-[#0a1a2f] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md border border-white/10 hover:scale-110 hover:shadow-purple-500/30 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-300 text-center mb-6 flex-1">
                {pro.description}
              </p>
              <div className="flex justify-center mt-auto">
                <a
                  href={pro.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/button bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white rounded-xl px-6 py-2 font-semibold text-base shadow-lg transition-all duration-300 hover:from-purple-600 hover:to-blue-600 hover:shadow-purple-500/40 focus:outline-none focus:ring-2 focus:ring-purple-400"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ImageViewer
        isOpen={isModalOpen}
        onClose={closeImageModal}
        imageSrc={selectedImage}
        width={700}
      />
    </div>
  );
};

export default Project;
