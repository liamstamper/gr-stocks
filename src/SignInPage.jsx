import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import glogo from "./assets/g-logo.png";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { provider } from "./components/Auth/firebase";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [user, setUser] = useState(null); // Track signed-in user state
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();

    // Check if user is already signed in
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        navigate("/"); // Redirect to home page if already signed in
      }
    });
  }, [navigate]);

  // Function to handle Google Sign-In
  const handleGoogleSignIn = async (email) => {
    const auth = getAuth();
    try {
      // Set email in provider if valid
      provider.setCustomParameters({
        login_hint: email,
      });

      // Popup the Google sign-in window
      const result = await signInWithPopup(auth, provider);
      // After successful sign-in, redirect to home page
      setUser(result.user);
      navigate("/"); // Redirect to home
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  // Function to validate email
  const validateEmail = (email) => {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailRegex.test(email);
  };

  // Handle form submission for email validation and trigger Google sign-in
  const handleEmailSubmit = (event) => {
    event.preventDefault();
    const isValidEmail = validateEmail(email);
    setIsEmailValid(isValidEmail);
    setIsFormSubmitted(true);

    // If email is valid, initiate Google sign-in with the email
    if (isValidEmail) {
      handleGoogleSignIn(email);
    }
  };

  // If user is signed in, don't show the sign-in form
  if (user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2>Welcome, {user.displayName}!</h2>
        <p>You are already signed in.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md"
        >
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F0F5F8]">
      <div className="max-w-[1040px] w-full h-[408px] bg-white p-[40px] mb-[12px] rounded-3xl shadow-sm">
        <div className="columns-2">
          <img className="w-[45px] h-[45px]" src={glogo} alt="Google Logo" />
          <h2
            style={{ fontFamily: "Roboto, sans-serif", fontWeight: 400 }}
            className="mt-4 text-[44px] font-extrabold text-gray-900 text-left"
          >
            Sign in
          </h2>
          <p className="mt-2 text-left text-md text-gray-900">
            Use your Google Account
          </p>

          {/* Form for email input */}
          <form onSubmit={handleEmailSubmit} className="mt-8 pl-4 space-y-3">
            <input
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-20 border border-gray-500 rounded-md h-[56px] py-4 px-3 w-full placeholder:text-gray-700 placeholder:text-[16px] text-black"
              placeholder="example@gmail.com"
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
                  Not your computer? Use Guest mode to sign in privately. <br />
                  <a
                    href="https://support.google.com/chrome/answer/6130773?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
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
      <div className="flex justify-between items-center text-xs w-[1040px] pr-5 text-gray-800">
        <div className="text-left ">
          <label htmlFor="languageSelect" className="sr-only">
            Language:
          </label>
          <select
            id="languageSelect"
            className=" bg-transparent cursor-pointer focus:cursor-pointer-up rounded-md w-[200px] h-[30px] px-3 hover:bg-gray-200"
          >
            <option>English (United States)</option>
            <option>Español (España)</option>
            <option>Français (France)</option>
          </select>
        </div>
        <div className="flex space-x-6">
          <a
            href="https://support.google.com/accounts?hl=en&visit_id=638572757410068850-1555949334&rd=2&p=account_iph#topic=3382296"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            Help
          </a>
          <a
            href="https://policies.google.com/privacy?gl=US&hl=en-US"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            Privacy
          </a>
          <a
            href="https://policies.google.com/terms?gl=US&hl=en-US"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            Terms
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
