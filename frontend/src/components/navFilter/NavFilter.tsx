import React from 'react'
import "./NavFilter.css";
const NavFilter = () => {
  return (
    <nav className="nav-filter">
        <ul className="nav-filter-list">
            <li className="nav-filter-item">Relevant</li>
            <li className="nav-filter-item">Latest</li>
            <li className="nav-filter-item">Stared</li>
        </ul>
    </nav>
  )
}

export default NavFilter