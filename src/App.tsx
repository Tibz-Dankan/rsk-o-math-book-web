import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Converter } from "./components/Pages/Converter";
import { MoreTopics } from "./components/Pages/MoreTopics";

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
          <Route path="/more-topics" element={<MoreTopics />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
