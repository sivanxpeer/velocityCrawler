import React, { useState } from 'react';
import './Navbar.css';

import imgLogo from '../../assets/images/Velocity.png';
import Dropdown from '../dropdown/Dropdown';

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <ul className="navbar">
        <div className="navbar-left">
          <li className="navbar-item">
            <i className={isClicked ? 'X' : 'fa fa-bars'}></i>
          </li>
          <li className="navbar-item">
            <img className="logo" src={imgLogo} />
          </li>
        </div>
        <div className="navbar-right">
          <li className="navbar-item">
            <i className="fa fa-search"></i>
          </li>
          <li className="navbar-item login">Login</li>
        </div>
      </ul>
      <Dropdown></Dropdown>
    </>
  );
};

export default Navbar;
