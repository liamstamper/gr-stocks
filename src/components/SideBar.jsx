import React, { useRef, useEffect } from "react";
import Branding from "./Header/Branding";
import HomeIcon from "../../dist/fav.png";
import MarketTrendsIcon from "../assets/icons/markettrends.png";
import PlusIcon from "../assets/icons/plus.png";
import UpArrowIcon from "../assets/icons/uparrow.png";
import SettingsIcon from "../assets/icons/settings.png";
import FeedbackIcon from "../assets/icons/feedback.png";

const SideBar = ({ toggleSidebar }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        console.log("Click outside detected");
        toggleSidebar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleSidebar]);

  const closeBar = () => toggleSidebar(false);

  return (
    <aside
      ref={sidebarRef}
      className="fixed inset-0 flex z-50 transition ease-in-out"
    >
      <div className="w-64 bg-white shadow-xl relative pr-[10px]">
        <button
          className="absolute top-[6px] right-3 text-2xl font-bold text-gray-500 hover:text-gray-700"
          onClick={closeBar}
        >
          &times;
        </button>
        <div className="pl-4 pt-2">
          <Branding />
        </div>
        <nav className="mt-6">
          <div className="flex flex-col text-[14px] tracking-wide pr-[8px]">
            <a className="bg-blue-100 bg-opacity-70 text-blue-700 flex items-center py-3 pl-6 rounded-r-full">
              <img src={HomeIcon} className="w-6 h-6" alt="Home" />
              <span className="pl-[14px]">Home</span>
            </a>
            <a className="hover:bg-gray-100 flex items-center py-3 pl-6 rounded-r-full">
              <img
                src={MarketTrendsIcon}
                className="w-6 h-6"
                alt="Market Trends"
              />
              <span className="pl-[14px]">Market Trends</span>
            </a>
          </div>
          <div className="border-b border-gray-200 my-[10px]"></div>

          <div className="flex flex-col uppercase text-gray-600 text-[11px] font-medium ml-6 mr-[8px]">
            <div className="flex items-center justify-between">
              <a href="#" rel="noopener noreferrer">
                Portfolios
              </a>
              <div className="flex items-center ml-3 p-3 hover:bg-gray-100 rounded-full shadow-gray-400">
                <img src={PlusIcon} className="h-[26px] w-[26px]" alt="Add" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <a href="#" rel="noopener noreferrer">
                Watchlists
              </a>
              <div className="flex items-center ml-3 p-3 hover:bg-gray-100 rounded-full shadow-gray-400">
                <img src={PlusIcon} className="h-[26px] w-[26px]" alt="Add" />
              </div>
            </div>
          </div>

          <div className="border-b border-gray-200 my-[10px]"></div>

          <a
            href="#"
            className="uppercase text-gray-700 tracking-wider text-[11px] space-y-[6px] pt-[10px] ml-6"
            rel="noopener noreferrer"
          >
            Most Active
          </a>
          <div className="mt-[12px] text-[14px]">
            <a className="hover:bg-gray-100 flex items-center py-3 pl-6 rounded-r-full">
              <span className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-lg">
                <img src={UpArrowIcon} className="w-4 h-4" alt="Up" />
              </span>
              <span className="pl-[14px] flex-grow">Bper Banca SpA</span>
              <span className="text-green-700 pr-2">+1.11%</span>
            </a>
            <a className="hover:bg-gray-100 flex items-center py-3 pl-6 rounded-r-full">
              <span className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-lg">
                <img src={UpArrowIcon} className="w-4 h-4" alt="Up" />
              </span>
              <span className="pl-[14px] flex-grow">Bper Banca SpA</span>
              <span className="text-green-700 pr-2">+1.11%</span>
            </a>
            <a className="hover:bg-gray-100 flex items-center py-3 pl-6 rounded-r-full">
              <span className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-lg">
                <img src={UpArrowIcon} className="w-4 h-4" alt="Up" />
              </span>
              <span className="pl-[14px] flex-grow">Bper Banca SpA</span>
              <span className="text-green-700 pr-2">+1.11%</span>
            </a>
            <a className="hover:bg-gray-100 flex items-center py-3 pl-6 rounded-r-full">
              <span className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-lg">
                <img src={UpArrowIcon} className="w-4 h-4" alt="Up" />
              </span>
              <span className="pl-[14px] flex-grow">Bper Banca SpA</span>
              <span className="text-green-700 pr-2">+1.11%</span>
            </a>
            <a className="hover:bg-gray-100 flex items-center py-3 pl-6 rounded-r-full">
              <span className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-lg">
                <img src={UpArrowIcon} className="w-4 h-4" alt="Up" />
              </span>
              <span className="pl-[14px] flex-grow">Bper Banca SpA</span>
              <span className="text-green-700 pr-2">+1.11%</span>
            </a>
          </div>
          <div className="absolute bottom-[18px] pt-[10px] border-t w-full mr-[10px] text-[14px]">
            <a className="hover:bg-gray-100 flex items-center py-3 pl-6 rounded-r-full">
              <img src={SettingsIcon} className="w-6 h-6" alt="Market Trends" />
              <span className="pl-[14px]">Settings</span>
            </a>
            <a className="hover:bg-gray-100 flex items-center py-3 pl-6 rounded-r-full">
              <img src={FeedbackIcon} className="w-6 h-6" alt="Market Trends" />
              <span className="pl-[14px]">Send Feedback</span>
            </a>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
