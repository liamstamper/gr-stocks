import React, { useState, useRef, useEffect } from "react";
import { getAuth, signOut } from "firebase/auth"; // Import Firebase Auth

const Icon = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const auth = getAuth(); // Get the Firebase Auth instance

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      window.location.reload(); // Optionally refresh the page on sign-out
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Display the user's profile picture if available, otherwise show a placeholder */}
      <a onClick={toggleDropdown} className="block cursor-pointer">
        <img
          className="w-8 h-8 border rounded-full dark:bg-gray-500 dark:border-gray-300 hover:ring-2 hover:ring-gray-300 transition-all"
          src={
            user?.photoURL || "https://source.unsplash.com/40x40/?portrait?1"
          } // Use Google profile picture or placeholder
          alt={user?.displayName || "User Avatar"}
        />
      </a>
      {isOpen && (
        <div className="absolute bottom-full left-0 mt-5 w-48 bg-white shadow-lg border border-gray-200 rounded-lg p-4 transform -translate-x-full translate-y-full">
          <p>{user?.displayName ? `Hi, ${user.displayName}!` : "Hi, User!"}</p>
          <p>{user?.email}</p>
          <button onClick={handleSignOut} className="mt-2 text-red-500">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Icon;
