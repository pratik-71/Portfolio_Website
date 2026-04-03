"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  const [opennav, setopennav] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 flex px-6 md:px-12 py-4 flex-row justify-between items-center z-50 w-full transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200 py-3' 
        : 'bg-transparent'
    }`}>
      <div className="flex items-center space-x-3 group cursor-pointer">
        <div className="h-10 w-10 bg-primary-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
           <svg
            stroke="currentColor"
            fill="white"
            strokeWidth="0"
            version="1.1"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
          >
            <path d="M13.632 5.289c-0.613 0.129-1.823 0.565-2.662 0.984-1.275 0.613-1.759 0.968-2.921 2.13s-1.517 1.646-2.13 2.921c-1.646 3.373-1.646 6.6 0 10.005 0.613 1.291 0.952 1.759 2.13 2.921 1.178 1.178 1.63 1.501 2.921 2.13 1.969 0.936 2.921 1.162 5.002 1.162s3.034-0.226 5.002-1.162c1.275-0.613 1.727-0.952 2.921-2.13 1.178-1.194 1.517-1.646 2.13-2.921 0.774-1.63 1-2.388 1.178-4.002l0.113-1h-3.195l-0.21 1.243c-1.017 6.471-8.907 9.069-13.587 4.47-3.792-3.712-2.969-10.005 1.678-12.732 0.871-0.516 2.63-1.049 3.437-1.049h0.532v-3.227l-0.597 0.016c-0.339 0-1.113 0.113-1.743 0.242zM14.213 9.645c-3.421 0.92-5.648 4.325-5.067 7.745 0.662 3.792 4.212 6.39 7.891 5.761 3.776-0.645 6.39-4.212 5.761-7.859-0.71-4.115-4.647-6.713-8.585-5.648z"></path>
          </svg>
        </div>
        <p className="text-slate-950 text-xl font-black italic tracking-tighter hidden sm:block uppercase">PORTFOLIO</p>
      </div>

      <div className="hidden md:block">
        <div className="flex items-center space-x-8 text-slate-600 font-medium tracking-wide">
          <Link
            href="#about"
            className="hover:text-primary-500 duration-300 transition-colors relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#skills"
            className="hover:text-primary-500 duration-300 transition-colors relative group"
          >
            Skills
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#project"
            className="hover:text-primary-500 duration-300 transition-colors relative group"
          >
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#experience"
            className="hover:text-primary-500 duration-300 transition-colors relative group"
          >
            Experience
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <div
            className="relative group py-2"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="hover:text-primary-500 duration-300 transition-colors flex items-center gap-1">
              Academics <FaAngleDown className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`absolute top-full right-0 mt-1 w-48 glass-card rounded-3xl overflow-hidden z-50 transition-all duration-300 origin-top-right ${isDropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
              <Link
                href="#education"
                className="block px-6 py-3 hover:bg-slate-100 text-slate-600 hover:text-primary-500 transition-all duration-300 uppercase font-black italic text-xs tracking-widest"
              >
                Education
              </Link>
              <Link
                href="#certificates"
                className="block px-6 py-3 hover:bg-slate-100 text-slate-600 hover:text-primary-500 transition-all duration-300 uppercase font-black italic text-xs tracking-widest"
              >
                Certificates
              </Link>
              <Link
                href="#contact"
                className="block px-6 py-3 hover:bg-slate-100 text-slate-600 hover:text-primary-500 transition-all duration-300 uppercase font-black italic text-xs tracking-widest"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Link href="https://github.com/pratik-71" target="_blank" rel="noopener noreferrer">
          <button className="hidden sm:block px-6 py-2.5 bg-primary-500 text-white font-bold rounded-[2.5rem] hover:scale-105 active:scale-95 transition-all duration-300">
            GITHUB
          </button>
        </Link>
        <button 
          className="md:hidden text-slate-950"
          onClick={() => setopennav(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`fixed inset-0 bg-white/95 backdrop-blur-2xl z-[100] transition-all duration-500 flex flex-col items-center justify-center gap-8 ${opennav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button 
          className="absolute top-8 right-8 text-slate-950 hover:text-primary-500 transition-colors"
          onClick={() => setopennav(false)}
        >
          <IoClose className="text-4xl" />
        </button>
        
        {['About', 'Skills', 'Experience', 'Project', 'Education', 'Certificates', 'Contact'].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-3xl font-black tracking-tighter text-slate-950 hover:text-primary-500 transition-all duration-300"
            onClick={() => setopennav(false)}
          >
            {item.toUpperCase()}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
