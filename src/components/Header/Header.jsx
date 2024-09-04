import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Branding from "./Branding";
import Icon from "./Icon";
import SignInButton from "./SignInButton";
import Hamburger from "../../assets/icons/hamburger.png";
import AppsImage from "../../assets/icons/apps.png";
import SearchBarHead from "./SearchBarHead";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Import Firebase auth

const Header = ({ toggleSidebar }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false); // Track sign-in status
  const [user, setUser] = useState(null); // Track the authenticated user
  const location = useLocation();
  const isStockPage = location.pathname.startsWith("/stock");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Get the Firebase Auth instance
    const auth = getAuth();

    // Set up the onAuthStateChanged listener to track sign-in state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsSignedIn(true); // User is signed in
        setUser(user); // Set the user information
      } else {
        setIsSignedIn(false); // User is signed out
        setUser(null); // Clear the user information
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []); // Run only once on component mount

  return (
    <header
      className={`sticky top-0 z-10 h-[65px] pr-[20px] bg-white border-b border-gray-100 flex justify-between items-center mx-auto w-full px-2 transition-shadow duration-300 ${
        isScrolled ? "shadow-md shadow-gray-300" : ""
      }`}
    >
      <div className="flex items-center">
        <button
          className="hover:rounded-full hover:bg-gray-100 mr-1 p-3 shadow-gray-400 transition-all duration-150"
          onClick={toggleSidebar}
        >
          <img src={Hamburger} className="ml-1 w-6 h-6" alt="Menu" />
        </button>
        <Branding />
      </div>
      {isStockPage ? <SearchBarHead /> : <div></div>}
      <div className="items-center flex-shrink-0 hidden lg:flex">
        <button className="hover:rounded-full hover:bg-gray-100 mr-5 p-2 shadow-gray-400 transition-all duration-150">
          <img src={AppsImage} className="h-6 w-6" alt="Apps" />
        </button>

        <div className="flex flex-col items-center justify-center">
          {/* Conditionally render Icon or SignInButton based on sign-in status */}
          {isSignedIn ? (
            <Icon user={user} /> // Pass the user to the Icon component
          ) : (
            <SignInButton setIsSignedIn={setIsSignedIn} /> // Show SignInButton if not signed in
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
