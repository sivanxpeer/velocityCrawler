import React from 'react';
import './Dropdown.css';

type IProps = {
    setIsClicked: (value: boolean) => void ;
}

const Dropdown= ({setIsClicked}:IProps) => {
const closeMenu = ()=>{
    setIsClicked(false);
}
  return (
    <div className="dropdown">
      <div className="dropdown-header">
        <div>
          <strong>LAB - L</strong>inkedin <strong>A</strong>uto{' '}
          <strong>B</strong>ot
        <div className="dropdown-header">
            <div><strong>LAB - L</strong>inkedin <strong>A</strong>uto <strong>B</strong>ot</div>
            {/* <div>X</div> */}
            <i className="fa fa-times" aria-hidden="true" onClick={closeMenu}></i>

        </div>
        {/* <div>X</div> */}
        <i className="fa fa-times" aria-hidden="true"></i>
      </div>
      </div>
      <ul className="dropdown-list">
        <li className="dropdown-list-item">Home</li>
        <li className="dropdown-list-item">Scraping Strategies</li>
        <li className="dropdown-list-item">About</li>
        <li className="dropdown-list-item">Login</li>
      </ul>
    </div>
  );
};

export default Dropdown;
