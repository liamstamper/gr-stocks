import React from "react";
import { Link } from "react-router-dom";

const SignInButton = () => {
  return (
    <Link to="/signinpage">
      <button
        className="bg-[#1B73E9] hover:bg-blue-600 text-white py-[7px] px-[27px] rounded text-[14px] hover:shadow-xl "
        style={{ fontFamily: "Roboto, sans-serif", fontWeight: 400 }}
      >
        Sign in
      </button>
    </Link>
  );
};

export default SignInButton;
