import React from "react";
import Navbar from "../navbar/Navbar";
import "./WelcomePage.css";
import mainImg from "../../assets/images/mainImage.jpeg";
import CardsLists from "../cardsLists/CardsLists";

const WelcomPage = () => {
  return (
    <div className="welcome-page">
      <Navbar></Navbar>
      <div className="mainImg-container">
        <img className="mainImg" src={mainImg}></img>
        <div className="mainImg-text-container">
          <div className="mainImg-text">
            <h1>
              Velocity Ventures <div className="push-right">Fund Crawler</div>
            </h1>
          </div>
          <div className="mainImg-text-2">
            <h2>Linkedin Auto Bot</h2>
          </div>
        </div>
      </div>
    <CardsLists></CardsLists>
    </div>
  );
};

export default WelcomPage;
