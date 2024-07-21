import React, { useState, useRef, useEffect } from "react";

const Icon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <a onClick={toggleDropdown} className="block cursor-pointer">
        <img
          className="w-8 h-8 border rounded-full dark:bg-gray-500 dark:border-gray-300 hover:ring-2 hover:ring-gray-300 transition-all"
          src="https://source.unsplash.com/40x40/?portrait?1"
        />
      </a>
      {isOpen && (
        <div className="absolute bottom-full left-0 mt-5 w-48 bg-white shadow-lg border border-gray-200 rounded-lg p-4 transform -translate-x-full translate-y-full">
          <p>
            To do : account@gmail.com Profile image Hi, Liam! Manage your Google
            Account Add account Sign out
          </p>
        </div>
      )}
    </div>
  );
};

export default Icon;
