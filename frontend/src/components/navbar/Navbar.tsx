<<<<<<< HEAD
import React from 'react';

const Navbar = (): JSX.Element => {
  return <div>Navbar</div>;
=======
import React, { FC, useState } from "react";
import "./Navbar.css";

import imgLogo from "../../assets/images/Velocity.png";

const Navbar: FC = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <ul className="navbar">
        <div className="navbar-left">
          <li className="navbar-item">
            <i className={isClicked ? "X" : "fa fa-bars"}></i>
          </li>
          <li className="navbar-item">
            <img className="logo" src={imgLogo} />
          </li>
        </div>
        <div className="navbar-right">
          <li className="navbar-item">
            {/* <i className="fa-solid fa-magnifying-glass"></i> */}
            🔎
          </li>
          <li className="navbar-item login">Login</li>
        </div>
      </ul>
    </>
  );
>>>>>>> main
};

export default Navbar;
