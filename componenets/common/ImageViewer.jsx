"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

const ImageViewer = ({ isOpen, onClose, imageSrc, width = 800 }) => {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset loading state when image source changes or modal opens
  useEffect(() => {
    if (isOpen) setIsLoading(true);
  }, [isOpen, imageSrc]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 h-screen w-screen bg-black/80 backdrop-blur-sm flex items-center justify-center z-[9999] p-4 sm:p-8">
      <div className="relative glass-card backdrop-blur-2xl p-6 rounded-[2.5rem] flex flex-col items-center gap-6 max-w-[95vw] max-h-[95vh] sm:max-w-[90vw] sm:max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-gold text-black w-10 h-10 flex items-center justify-center rounded-full text-2xl font-bold shadow-gold-glow hover:scale-110 transition-all duration-300 z-10"
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="relative overflow-hidden flex justify-center items-center w-full rounded-xl border border-white/5 bg-black/50 p-2 shadow-inner min-h-[300px] min-w-[300px]">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-12 h-12 border-4 border-gold/20 border-t-gold rounded-full animate-spin" />
              </div>
            )}
            <Image
              src={imageSrc}
              alt="Document Preview"
              width={width}
              height={1000}
              unoptimized
              className={`rounded-lg object-contain max-h-[75vh] w-auto shadow-md transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
              onLoad={() => setIsLoading(false)}
            />
        </div>
        <a
          href={imageSrc}
          download
          className="bg-gold text-black font-bold rounded-xl px-10 py-4 shadow-gold-glow hover:shadow-gold-glow-strong hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-xs"
        >
          Download Document
        </a>
      </div>
    </div>,
    document.body
  );
};

export default ImageViewer;
