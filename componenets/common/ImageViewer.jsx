"use client";
import React from "react";
import Image from "next/image";

const ImageViewer = ({ isOpen, onClose, imageSrc, width = 800 }) => { // Default width to 800 if not provided
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md flex items-center justify-center z-50">
      <div className="relative bg-gray-900 p-6 rounded-lg shadow-lg flex justify-center">
        <button
          onClick={onClose}
          className="absolute top-[-1%] right-2 text-white text-2xl font-bold hover:text-gray-900"
        >
          &times;
        </button>
        <Image
          src={imageSrc}
          alt="Marksheet"
          width={width} // Using the width prop here
          height={800}
          className="rounded-md object-cover"
        />
      </div>
    </div>
  );
};

export default ImageViewer;
