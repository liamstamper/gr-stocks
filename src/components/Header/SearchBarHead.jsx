import React, { useState, useRef, useEffect } from "react";
import SearchLogo from "../../assets/icons/search.png";

const SearchBarHead = () => {
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
  return (
    <div ref={containerRef} className="flex relative justify-center">
      <a onClick={toggleDropdown}>
        <input
          type="search"
          className="bg-gray-100 mx-auto shadow-sm rounded-lg h-[45px] py-4 px-10 w-[720px] placeholder:text-gray-700 placeholder:pl-2 placeholder:text-[16px] text-black bg-[left_12px_center] bg-no-repeat bg-left-center"
          style={{
            fontFamily: "Roboto, sans-serif",
            fontWeight: 400,
            backgroundImage: `url(${SearchLogo})`,
            backgroundSize: "23px 23px",
          }}
          placeholder="Search for stocks, ETFs & more"
        />
      </a>
      {isOpen && (
        <div className="absolute bottom-0 right-0 w-48 bg-white shadow-lg border border-gray-200 rounded-lg p-4 transform -translate-x-full translate-y-full">
          <p></p>
        </div>
      )}
    </div>
  );
};

export default SearchBarHead;
