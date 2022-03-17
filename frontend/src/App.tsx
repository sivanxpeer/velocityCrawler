import React from "react";
import CardLists from "../src/components/cardsLists/CardsLists";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import WelcomPage from "./components/welcomePage/WelcomPage";
import NavFilter from "./components/navFilter/NavFilter";
import AboutPage from "./components/aboutPage/AboutPage";
import ScrapingStrategies from "./components/scrapingStrategies/ScrapingStrategies";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/scrapingStrategies" element={<ScrapingStrategies/>} />
      </Routes>
        {/* <NavFilter></NavFilter> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
