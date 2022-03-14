import React, { FC, useState } from 'react';
import './Navbar.css';

import imgLogo from '../../assets/images/Velocity.png';

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <ul className='navbar'>
        <div className='navbar-left'>
          <li className='navbar-item'>
            <i className={isClicked ? 'X' : 'fa fa-bars'}></i>
          </li>
          <li className='navbar-item'>
            <img className='logo' src={imgLogo} />
          </li>
        </div>
        <div className='navbar-right'>
          <li className='navbar-item'>
            {/* <i className="fa-solid fa-magnifying-glass"></i> */}
            🔎
          </li>
          <li className='navbar-item login'>Login</li>
        </div>
      </ul>
    </>
  );
};

export default Navbar;
