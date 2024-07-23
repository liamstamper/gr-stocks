import React from "react";
import Branding from "./Branding";
import Icon from "./Icon";
import SignInButton from "./SignInButton";
import Hamburger from "../../assets/icons/hamburger.png";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="h-[65px] pr-[20px] bg-white border bottom-1 border-gray-50 flex justify-between items-center mx-auto w-full px-4">
      <div className="flex items-center">
        <button className="pr-4" onClick={toggleSidebar}>
          <img src={Hamburger} className="w-6 h-6 "></img>
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
