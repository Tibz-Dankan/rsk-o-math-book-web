import React from "react";
import "./App.css";
import { Converter } from "./components/Pages/Converter";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 text-gray-700">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Converter />} />
          <Route
            path="/currency"
            element={<div>current conversion page</div>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
