import React, { useState } from "react";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar";
import Markets from "./components/MarketsSection/Markets";
import SearchBar from "./components/Header/SearchBar";
import MainSection from "./components/MainSection/MainSection";

const HomePage = () => {
  const [isSidebarOpen, IsSidebarOpen] = useState(false);

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
      <SearchBar />
      <MainSection />
    </>
  );
};

export default HomePage;
