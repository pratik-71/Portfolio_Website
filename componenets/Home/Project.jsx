"use client";
import React, { useCallback, useState } from 'react';
import ImageViewer from '../common/ImageViewer';

const Project = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

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
  ];

  return (
    <div className="bg-gradient-to-r from-[#440b45] to-[#2a0132] flex flex-col items-center py-10 px-6 md:px-16">
      <p className="text-white text-3xl md:text-4xl font-extrabold mb-8">- Projects -</p>

      <div className="flex flex-col sm:flex-row gap-8 w-full max-w-screen-lg">
        {projects.map((pro, index) => (
          <div
            key={index}
            className="relative bg-white/10 backdrop-blur-lg rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 flex flex-col w-full sm:w-[500px] h-[500px] overflow-hidden cursor-pointer"
          >
            <img
              src={pro.image}
              onClick={()=>openImageModal(pro.image)}
              alt="Project Image"
              className="w-full h-[200px] object-contain md:object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-lg font-bold text-white mb-2 text-center">{pro.name}</h3>

            <div className="flex">
              <div className="text-sm flex flex-wrap gap-2 text-gray-100 font-semibold mb-2 px-2 text-nowrap">Technologies Used:
                {pro.technology.split(", ").map((tech, idx) => (
                  <div
                    key={idx}
                    className="px-1 md:px-3 py-1 bg-gray-900 text-white rounded-md text-sm"
                  >
                    {tech}
                  </div>
                ))}
              </div>

            </div> 

            <p className="text-sm text-gray-300 px-4 mt-4 pb-2">{pro.description}</p>
            
            {/* GitHub Button */}
            <a
              href={pro.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-4 bg-purple-950 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 transition"
            >
              GitHub
            </a>
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
