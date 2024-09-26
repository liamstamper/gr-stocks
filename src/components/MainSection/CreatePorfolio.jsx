import React, { useState } from "react";
import PlusIcon from "../../assets/icons/plus.png";
import CreatePortfolioModal from "./CreatePortfolioModal";
import ChartIcon from "../../assets/icons/chart.png";

const CreatePortfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-[360px] w-full ml-[10px] mt-[45px] border border-gray-200 rounded-xl justify-center text-center p-[15px]">
      <div
        className="text-gray-500 flex flex-row text-[14px]  text-left font-semibold"
        style={{ fontFamily: "Roboto, sans-serif", fontWeight: 400 }}
      >
        <img
          src={ChartIcon}
          alt="Chart"
          className="w-10 h-10 bg-blue-300 bg-opacity-20 rounded-lg mr-3 p-2"
        ></img>
        Create a portfolio to view your investments in one place
      </div>
      <button
        className="mt-2 flex items-center justify-center space-x-2 rounded-full text-[14px] text-blue-600 w-full py-2 border border-gray-200"
        onClick={openModal}
      >
        <img src={PlusIcon} alt="Add" className="w-5 h-5" />
        <span>New Portfolio</span>
      </button>

      {/* Modal for creating portfolio */}
      <CreatePortfolioModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default CreatePortfolio;
