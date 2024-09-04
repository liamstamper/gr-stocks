import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ListIcon from "../../assets/icons/list.png";
import SignInButton from "../Header/SignInButton";

const BuildWatchlist = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set user if signed in, otherwise null
    });

    return () => unsubscribe(); // Clean up the listener on unmount
  }, []);

  // Redirect to sign-in page if the user clicks sign-in and is not signed in
  const handleSignInClick = () => {
    if (!user) {
      navigate("/signin");
    }
  };

  // Don't show the component if the user is signed in
  if (user) return null;

  return (
    <div className="max-w-[1025px] h-[60px] w-full flex flex-row items-center mt-[30px] mx-auto rounded-xl border border-gray-300">
      <div className="w-full flex flex-row">
        <img className="ml-4 mt-[6px] h-7 w-6" src={ListIcon} alt="Watchlist" />
        <div className="pl-6">
          <div className="text-[13px] font-semibold">Build a watchlist</div>
          <div className="text-[12px] text-gray-500">
            Sign in to track investments you care about
          </div>
        </div>
        <div className="ml-auto pr-[15px]">
          <SignInButton />
        </div>
      </div>
    </div>
  );
};

export default BuildWatchlist;
