import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import SignInPage from "./SignInPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signinpage" element={<SignInPage />} />
      </Routes>
    </Router>
  );
}

export default App;
