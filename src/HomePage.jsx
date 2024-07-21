import React, { useState } from "react";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar";

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />
      {isSidebarOpen && <SideBar toggleSidebar={toggleSidebar} />}
    </div>
  );
};

export default HomePage;
