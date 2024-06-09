import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Restaurants from "./components/pages/restaurants";
import Week from "./components/pages/week";

function App() {
  return (
    <>
      <Routes>
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurants/week/:restaurantName" element={<Week />} />
      </Routes>
    </>
  );
}

export default App;

// let [menus, setMenus] = useState([]);
//   let []

//   return (
//     <>
//       <div></div>
//     </>
