import React from "react";
import Branding from "./Branding";
import Icon from "./Icon";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="p-4 bg-white border bottom-1 border-gray-50">
      <div className="flex justify-between items-center h-8 mx-auto w-full px-4">
        <div className="flex items-center">
          <button className="p-4" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <Branding />
        </div>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <div className="flex flex-col items-center justify-center">
            <Icon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
