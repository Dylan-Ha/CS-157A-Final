import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css'

import Navigation from "./views/navigation/navigation";
import Home from "./views/home/home";
import Deliver from "./views/deliver/deliver";
import Inventory from "./views/inv/donate";


const App = () => {
  return (
    <div className="page">
      <Navigation/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/deliver" element={<Deliver/>} />
        <Route exact path="/inventory" element={<Inventory/>} />
      </Routes>
    </div>
  );
}

export default App;
