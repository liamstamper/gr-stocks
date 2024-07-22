import React from "react";
import { Link } from "react-router-dom";

const SignInButton = () => {
  return (
    <Link to="/signinpage">
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-7 rounded text-md focus:outline-none focus:shadow-outline transform transition-colors duration-150 ease-in-out"
        style={{ fontFamily: "Roboto, sans-serif", fontWeight: 400 }}
      >
        Sign in
      </button>
    </Link>
  );
};

export default SignInButton;
