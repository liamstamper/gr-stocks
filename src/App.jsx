import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import SignInPage from "./SignInPage";
import AboutPage from "./AboutPage";
import StockPage from "./StockPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signinpage" element={<SignInPage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/stockpage/:sectionId" element={<StockPage />} />
      </Routes>
    </Router>
  );
}

export default App;
