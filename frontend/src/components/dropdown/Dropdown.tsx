import React from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";

type IProps = {
  setIsClicked: (value: boolean) => void;
};

const Dropdown = ({ setIsClicked }: IProps) => {
  const closeMenu = () => {
    setIsClicked(false);
  };
  return (
    <div className="dropdown">
      <div className="dropdown-header">
        <div>
          <strong>LAB - L</strong>inkedin <strong>A</strong>uto{" "}
          <strong>B</strong>ot
        </div>
        {/* <div>X</div> */}

        <i className="fa fa-times" aria-hidden="true" onClick={closeMenu}></i>
      </div>
      <ul className="dropdown-list">
        {/* <Link to="/" className={isRelevant? "active-nav":"nav-filter-item"} onClick={handleRelevant}>Relevant</Link> */}
        <li className="dropdown-list-item">
          <Link to="/" onClick={closeMenu} className="link-item">
            Home
          </Link>
        </li>
        <li className="dropdown-list-item">
          <Link to="/scrapingStrategies" className="link-item">
            Scraping Strategies
          </Link>
        </li>
        <li className="dropdown-list-item">
          <Link to="about" className="link-item">
            About
          </Link>
        </li>
        <li className="dropdown-list-item">Login</li>
      </ul>
    </div>
  );
};

export default Dropdown;
