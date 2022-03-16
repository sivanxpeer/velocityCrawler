import React from "react";
import CardLists from "../src/components/cardsLists/CardsLists";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import WelcomPage from "./components/welcomePage/WelcomPage";
import NavFilter from "./components/navFilter/NavFilter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomPage/>} />
      </Routes>
        {/* <NavFilter></NavFilter> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
