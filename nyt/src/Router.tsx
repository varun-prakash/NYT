import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Article from "./Components/Article/Article"; // Adjust path as per your project structure
import Navbar from "./Components/Navbar/Navbar"; // Adjust path as per your project structure
import App from "./App";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Most-Popular-Articles" element={<App />} />
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
