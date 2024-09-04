import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePortfolioModal = ({ isOpen, onClose }) => {
  const [portfolioName, setPortfolioName] = useState("");
  const [isPlayground, setIsPlayground] = useState(false);
  const navigate = useNavigate();

  // Handle portfolio creation (implement logic as needed)
  const handleSave = () => {
    if (!portfolioName.trim()) {
      alert("Portfolio name cannot be empty.");
      return;
    }
    console.log("Creating portfolio:", portfolioName, isPlayground);
    // Logic to save the portfolio goes here
    onClose(); // Close the modal after saving
  };

  // Render only if the modal is open
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white w-[400px] p-6 rounded-lg shadow-lg relative">
        <h2 className="text-lg font-semibold mb-4">Create a new portfolio</h2>

        {/* Portfolio Name Input */}
        <label className="block text-sm text-gray-600 mb-1">
          Portfolio name
        </label>
        <input
          type="text"
          value={portfolioName}
          onChange={(e) => setPortfolioName(e.target.value)}
          placeholder="Enter portfolio name"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />

        {/* Playground Portfolio Toggle */}
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            checked={isPlayground}
            onChange={() => setIsPlayground(!isPlayground)}
            className="toggle-checkbox"
          />
          <span className="ml-2 text-gray-800">Playground portfolio</span>
        </div>

        {/* Modal Actions */}
        <div className="flex justify-between items-center mt-6">
          <button
            className="text-blue-600 hover:text-blue-800"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:opacity-50"
            onClick={handleSave}
            disabled={!portfolioName.trim()} // Disable save if portfolio name is empty
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePortfolioModal;
