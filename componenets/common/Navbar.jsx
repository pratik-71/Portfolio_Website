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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`fixed top-0 left-0 right-0 flex px-2 md:px-5 py-1 md:py-3 flex-row justify-between items-center z-50 w-full overflow-x-hidden transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      {/* Adjusted for fixed position and full width */}

      <div className="flex text-[20px] flex-row justify-center items-center space-x-1 md:space-x-2">
        <svg
          stroke="currentColor"
          fill="white"
          strokeWidth="0"
          version="1.1"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 md:h-14 md:w-14 lg:h-18 lg:w-18"
        >
          <path d="M13.632 5.289c-0.613 0.129-1.823 0.565-2.662 0.984-1.275 0.613-1.759 0.968-2.921 2.13s-1.517 1.646-2.13 2.921c-1.646 3.373-1.646 6.6 0 10.005 0.613 1.291 0.952 1.759 2.13 2.921 1.178 1.178 1.63 1.501 2.921 2.13 1.969 0.936 2.921 1.162 5.002 1.162s3.034-0.226 5.002-1.162c1.275-0.613 1.727-0.952 2.921-2.13 1.178-1.194 1.517-1.646 2.13-2.921 0.774-1.63 1-2.388 1.178-4.002l0.113-1h-3.195l-0.21 1.243c-1.017 6.471-8.907 9.069-13.587 4.47-3.792-3.712-2.969-10.005 1.678-12.732 0.871-0.516 2.63-1.049 3.437-1.049h0.532v-3.227l-0.597 0.016c-0.339 0-1.113 0.113-1.743 0.242zM14.213 9.645c-3.421 0.92-5.648 4.325-5.067 7.745 0.662 3.792 4.212 6.39 7.891 5.761 3.776-0.645 6.39-4.212 5.761-7.859-0.71-4.115-4.647-6.713-8.585-5.648z"></path>
        </svg>
        <p className="text-white text-sm md:text-[20px]">Portfolio</p>
      </div>

      <div className="hidden md:block">
        <div className="flex text-[20px] justify-between gap-5 items-center text-white">
          <Link
            href="#about"
            className="hover:text-purple-400 duration-300 transition-colors"
          >
            About
          </Link>
          <Link
            href="#skills"
            className="hover:text-purple-400 duration-300 transition-colors"
          >
            Skills
          </Link>
          <Link
            href="#project"
            className="hover:text-purple-400 duration-300 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#experience"
            className="hover:text-purple-400 duration-300 transition-colors"
          >
            Experience
          </Link>
          {/* Dropdown for Academics */}

          <div
            className="relative"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <button className="hover:text-purple-400 duration-300 transition-colors flex justify-center items-center gap-2">
              Academics <FaAngleDown />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-40 bg-gray-800/95 backdrop-blur-md text-white rounded-md shadow-lg z-50 border border-gray-700">
                <Link
                  href="#education"
                  className="block px-4 py-2 hover:bg-purple-500/20 duration-300 transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Education
                </Link>
                <Link
                  href="#certificates"
                  className="block px-4 py-2 hover:bg-purple-500/20 duration-300 transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Certificates
                </Link>
                <Link
                  href="#contact"
                  className="block px-4 py-2 hover:bg-purple-500/20 duration-300 transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Contact
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <div>
        <button className="border-2 md:text-[17px] hover:text-white hover:bg-purple-600 duration-300 transition-all text-purple-400 border-purple-400 rounded-lg md:rounded-2xl text-[10px] px-2 py-1 md:px-4 md:py-2 hover:scale-105">
          <a href="https://github.com/pratik-71" target="_blank" rel="noopener noreferrer">
            Github Profile
          </a>
        </button>
      </div>

      <div className="block md:hidden">
        <button onClick={() => setopennav(!opennav)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {opennav && (
        <>
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"></div>
          <div className="fixed top-0 right-0 h-screen w-3/4 sm:w-1/2 px-5 py-5 backdrop-blur-md bg-gray-900/95 text-white z-50 duration-300 flex flex-col gap-[30px]">
            <button onClick={() => setopennav(!opennav)}>
              <IoClose className="text-[25px] float-right hover:text-red-400 transition-colors duration-300" />
            </button>
            <div
              className="flex flex-col justify-center items-center gap-[20px]"
              onClick={() => setopennav(!opennav)}
            >
              <Link
                href="#about"
                className="text-[15px] scroll-smooth font-[500] cursor-pointer hover:text-purple-400 duration-300 transition-colors hover:scale-110"
              >
                About
              </Link>
              <Link
                href="#skills"
                className="text-[15px] scroll-smooth font-[500] cursor-pointer hover:text-purple-400 duration-300 transition-colors hover:scale-110"
              >
                Skills
              </Link>
              <Link
                href="#experience"
                className="text-[15px] scroll-smooth font-[500] cursor-pointer hover:text-purple-400 duration-300 transition-colors hover:scale-110"
              >
                Experience
              </Link>
              <Link
                href="#project"
                className="text-[15px] scroll-smooth font-[500] cursor-pointer hover:text-purple-400 duration-300 transition-colors hover:scale-110"
              >
                Project
              </Link>
              <Link
                href="#education"
                className="text-[15px] scroll-smooth font-[500] cursor-pointer hover:text-purple-400 duration-300 transition-colors hover:scale-110"
              >
                Education
              </Link>
              <Link
                href="#certificates"
                className="text-[15px] scroll-smooth font-[500] cursor-pointer hover:text-purple-400 duration-300 transition-colors hover:scale-110"
              >
                Certificates
              </Link>
              <Link
                href="#contact"
                className="text-[15px] scroll-smooth font-[500] cursor-pointer hover:text-purple-400 duration-300 transition-colors hover:scale-110"
              >
                Contact
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
