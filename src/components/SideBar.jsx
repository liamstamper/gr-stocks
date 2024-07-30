import React, { useRef, useEffect } from "react";
import Branding from "./Header/Branding";

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
    <aside ref={sidebarRef} className="fixed inset-0 flex">
      <div className="w-64 bg-white p-6 shadow-xl transition ease-in-out">
        <nav className="space-y-8 text-sm">
          <Branding />
          <button onClick={closeBar}>close</button>

          <div className="space-y-10">
            <a className="text-sm font-semibold tracking-wide mt-8">Home</a>
            <a className="text-sm block font-semibold tracking-wide mt-8">
              Market Trends
            </a>

            <div className="flex flex-col space-y-10">
              <a rel="noopener noreferrer" href="#">
                Portfolios
              </a>
              <a rel="noopener noreferrer" href="#">
                Watchlists
              </a>
              <a rel="noopener noreferrer" href="#">
                Watchlist
              </a>
              <a rel="noopener noreferrer" href="#">
                Most Active
              </a>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
