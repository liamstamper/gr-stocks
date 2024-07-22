import React from "react";
import Branding from "./Branding";
import Icon from "./Icon";
import SignInButton from "./SignInButton";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="h-[65px] pr-[20px] bg-white border bottom-1 border-gray-50 flex justify-between items-center mx-auto w-full px-4">
      <div className="flex items-center">
        <button className="pr-4" onClick={toggleSidebar}>
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
          <SignInButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
