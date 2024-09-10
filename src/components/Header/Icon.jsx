import React, { useState, useRef, useEffect } from "react";
import { getAuth, signOut } from "firebase/auth"; // Import Firebase Auth
import LogoutIcon from "../../assets/icons/logout.png";

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
          className="w-8 h-8 border rounded-full hover:ring-2 hover:ring-gray-300 transition-all"
          src={
            user?.photoURL || "https://source.unsplash.com/40x40/?portrait?1"
          } // Use Google profile picture or placeholder
          alt={user?.displayName || "User Avatar"}
        />
      </a>
      {isOpen && (
        <div className="absolute top-10 right-0 w-[400px] bg-[#E8EFF6] shadow-lg border border-gray-200 rounded-3xl p-4 z-50 flex flex-col items-center text-center">
          <p className="text-black mb-10 text-[13px]">
            {user?.email || "User Email"}
          </p>
          {/* Profile Section */}
          <div className="flex flex-col items-center text-center">
            <img
              className="w-16 h-16 rounded-full"
              src={
                user?.photoURL ||
                "https://source.unsplash.com/40x40/?portrait?1"
              }
              alt="Profile"
            />

            <p className="text-black mt-1">
              Hi, {user?.displayName || "User"}!
            </p>
            <a
              href="https://myaccount.google.com/"
              className="text-blue-700 border border-gray-700 py-2 px-4 rounded-full text-xs mt-3 inline-block"
            >
              Manage your Google Account
            </a>
          </div>

          {/* More Accounts Section */}
          <div className="mt-4 pt-4">
            <p className="bg-white py-4 px-28 flex flex-row rounded-t-full text-sm text-black hover:bg-gray-200">
              Hide more accounts
            </p>
            <button
              onClick={handleSignOut}
              className="flex flex-row pl-[45px] w-full text-sm bg-white py-2 px-20 mt-[2px] hover:bg-gray-200"
            >
              <img
                className="w-8 h-8 rounded-full"
                src={
                  user?.photoURL ||
                  "https://source.unsplash.com/40x40/?portrait?2"
                }
                alt="Alternate account"
              />
              <div className="flex flex-col">
                <span className="text-black">
                  {" "}
                  {user?.displayName || "User"}
                </span>
                <span className="ml-3 text-xs text-black">
                  {user?.email || "User Email"}
                </span>
              </div>
            </button>
            <div className="flex flex-row pl-[45px] w-full text-sm bg-white py-4 px-20 mt-[2px] hover:bg-gray-200">
              Add another account
            </div>
            <button
              onClick={handleSignOut}
              className="w-full py-4 flex flex-row pl-[45px] bg-white text-black text-sm rounded-b-full mt-[2px] hover:bg-gray-200"
            >
              <img src={LogoutIcon} className="w-6 h-6"></img>Sign out of all
              accounts
            </button>
          </div>

          {/* Footer Links */}
          <div className="flex justify-between mt-5 text-[11px] space-x-6 text-black">
            <a
              href="https://policies.google.com/privacy"
              className="hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href="https://policies.google.com/terms"
              className="hover:underline"
            >
              Terms of Service
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Icon;
