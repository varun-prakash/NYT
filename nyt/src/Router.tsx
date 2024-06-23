import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar"; // Adjust path as per your project structure
import App from "./App";
import Books from "./Components/Books/Books";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Most-Popular-Articles" element={<App />} />
        <Route path="/Most-Popular-books" element={<Books />} />
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
