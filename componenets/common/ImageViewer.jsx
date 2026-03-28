"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

const ImageViewer = ({ isOpen, onClose, imageSrc, width = 800 }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 h-screen w-screen bg-black/80 backdrop-blur-sm flex items-center justify-center z-[9999] p-4 sm:p-8">
      <div className="relative bg-gray-900/90 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-2xl flex flex-col items-center gap-6 max-w-[95vw] max-h-[95vh] sm:max-w-[90vw] sm:max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-gray-800 text-white w-10 h-10 flex items-center justify-center rounded-full text-2xl font-bold border border-white/20 shadow-lg hover:bg-red-500 hover:text-white transition-all duration-300 z-10"
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="relative overflow-hidden flex justify-center items-center w-full rounded-xl border border-white/5 bg-black/50 p-2 shadow-inner">
            <Image
            src={imageSrc}
            alt="Document Preview"
            width={width} // Using the width prop here
            height={1000}
            className="rounded-lg object-contain max-h-[75vh] w-auto shadow-md"
            />
        </div>
        <a
          href={imageSrc}
          download
          className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-semibold rounded-xl px-8 py-3 shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] hover:-translate-y-1 transition-all duration-300"
        >
          Download Document
        </a>
      </div>
    </div>,
    document.body
  );
};

export default ImageViewer;
