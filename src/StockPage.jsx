import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar";
import Markets from "./components/MarketsSection/Markets";
import SearchBar from "./components/Header/SearchBar";
import MainSection from "./components/MainSection/MainSection";

const StockPage = () => {
  const { sectionId } = useParams();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      {isSidebarOpen && <SideBar toggleSidebar={toggleSidebar} />}
      <div className="flex flex-col items-center bg-gray-100 pb-8">
        <Markets />
      </div>
      <div className="max-w-[1025px] w-full flex flex-row justify-center items-center mt-4 mx-auto border">
        <div className="text-[20px] font-normal font-roboto">{sectionId}</div>
      </div>
    </>
  );
};

export default StockPage;
