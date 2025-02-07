"use client";

import { useState } from "react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
  const scrollToSection = (id) => {
    setIsDropdownOpen(false); // Close dropdown
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Smooth scroll effect
    }
  };

  return (
    <nav className="bg-gradient-to-b from-[#29C75E] to-[#666666] p-4 rounded-b-lg shadow-md w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-semibold">
          Philippine Insider Intelligence Magazines
        </div>
        <div className="space-x-4 flex items-center">
          <a href="#" className="text-white hover:text-blue-200">About</a>

          {/* CEOs Dropdown Menu */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-white hover:text-blue-200 focus:outline-none"
            >
              CEOs ▼
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg z-50">
                <button
                  onClick={() => scrollToSection("patrick-perez")}
                  className="block px-4 py-2 w-full text-left hover:bg-gray-200"
                >
                  Patrick Perez
                </button>
                <button
                  onClick={() => scrollToSection("ceo-2")}
                  className="block px-4 py-2 w-full text-left hover:bg-gray-200"
                >
                  CEO 2
                </button>
                <button
                  onClick={() => scrollToSection("ceo-3")}
                  className="block px-4 py-2 w-full text-left hover:bg-gray-200"
                >
                  CEO 3
                </button>
              </div>
            )}
          </div>

          <a href="#" className="text-white hover:text-blue-200">FAQ</a>
        </div>
      </div>
    </nav>
  );
}
