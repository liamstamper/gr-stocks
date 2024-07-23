import React, { useState } from "react";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar";
import Markets from "./components/MarketsSection/Markets";

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      {isSidebarOpen && <SideBar toggleSidebar={toggleSidebar} />}
      <div className="flex flex-col items-center">
        <Markets />
      </div>
    </>
  );
};

export default HomePage;
