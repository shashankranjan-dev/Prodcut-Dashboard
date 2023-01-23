import React from "react";
import Navbar from "./navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { Sign, Log } from "./pages/index";
import "./App.css";

function App() {
  const token = localStorage.getItem("token");
  console.log("token", token);
  return (
    <div className="flex">
      {token == null ? (
        <div className="w-screen">
          <Routes>
            <Route exact path="/" element={<Sign />} />
            <Route exact path="/signup" element={<Log />} />
          </Routes>
        </div>
      ) : (
        <Navbar />
      )}
    </div>
  );
}
export default App;
