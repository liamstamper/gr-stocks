import React from "react";
import glogo from "./assets/g-logo.png";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F0F5F8]">
      <div className="max-w-[1040px] w-full h-[408px] bg-white p-[40px] rounded-3xl mb-16 shadow-sm">
        <div className="columns-2">
          <img className="w-12 h-12" src={glogo}></img>
          <h2
            style={{ fontFamily: "Roboto, sans-serif", fontWeight: 400 }}
            className="mt-4 text-[44px] font-extrabold text-gray-900 text-left"
          >
            Sign in
          </h2>
          <p className="mt-2 text-left text-md text-gray-900">
            Use your Google Account
          </p>

          <form className="mt-8 pl-4 space-y-3">
            <input
              type="email"
              autoComplete="email"
              required
              className="mt-20 border border-gray-500 rounded-md h-[56px] py-4 px-3 w-full placeholder:text-gray-700 placeholder:text-[16px] text-black"
              placeholder="Email or phone"
            />
            <div className="flex justify-between">
              <div className="text-sm">
                <a href="#" className="font-medium text-blue-700">
                  Forgot email?
                </a>
              </div>
            </div>
            <div className="flex justify-between pt-10">
              <div className="text-sm">
                <a href="#" className="font-medium text-gray-700">
                  Not your computer? Use Guest mode to sign in privately.{" "}
                  <br></br>
                  <a
                    href="https://support.google.com/chrome/answer/6130773?hl=en"
                    target="_blank"
                    className="text-blue-700"
                  >
                    Learn more about using Guest mode
                  </a>
                </a>
              </div>
            </div>

            <div className="flex items-right text-right ml-[230px]">
              <a
                href="#"
                className="text-sm mt-7 mr-[40px] font-medium text-blue-600 hover:text-blue-500"
              >
                Create account
              </a>

              <button
                type="submit"
                className="group relative flex justify-center py-2 px-[26px] border border-transparent text-sm font-medium rounded-full text-white bg-[#0A57D1] hover:bg-[#0F51B9] mt-4"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
