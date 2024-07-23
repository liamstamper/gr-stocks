import React from "react";
import Branding from "./Branding";
import Icon from "./Icon";
import SignInButton from "./SignInButton";
import Hamburger from "../../assets/icons/hamburger.png";
import AppsImage from "../../assets/icons/apps.png";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="h-[65px] pr-[20px] bg-white border bottom-1 border-gray-50 flex justify-between items-center mx-auto w-full px-2">
      <div className="flex items-center">
        <button
          className="hover:rounded-full hover:bg-gray-100 mr-2 p-3 shadow-gray-400 transition-all duration-150"
          onClick={toggleSidebar}
        >
          <img src={Hamburger} className="w-6 h-6"></img>
        </button>
        <Branding />
      </div>
      <div className="items-center flex-shrink-0 hidden lg:flex">
        <button className="hover:rounded-full hover:bg-gray-100 mr-5 p-2 shadow-gray-400 transition-all duration-150">
          <img src={AppsImage} className="h-6 w-6"></img>
        </button>

        <div className="flex flex-col items-center justify-center">
          <SignInButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
