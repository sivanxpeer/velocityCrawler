import React ,{useState} from "react";
import { NavLink,Link } from "react-router-dom";
import "./NavFilter.css";
const NavFilter = () => {
  const [isRelevant,setIsRelevant]=useState(false);
  const [isLatest,setIsLatest]=useState(false);
  const [isStared,setIsStared]=useState(false);
  const handleRelevant=()=>{
    setIsRelevant(true);
    setIsLatest(false);
    setIsStared(false);
  }
  const handleLatest=()=>{
    setIsLatest(true);
    setIsRelevant(false);
    setIsStared(false);
  }
  const handleStared=()=>{
    setIsStared(true);
    setIsLatest(false);
    setIsRelevant(false);
  }
  return (
    <nav className="nav-filter">
      <ul className="nav-filter-list">      
        <Link to="/" className={isRelevant? "active-nav":"nav-filter-item"} onClick={handleRelevant}>Relevant</Link>
        <Link to = "/" className={isLatest?"active-nav":"nav-filter-item"} onClick={handleLatest}>Latest</Link>
        <Link to = "/" className={isStared?"active-nav":"nav-filter-item"} onClick={handleStared}>Stared</Link>
      </ul>
    </nav>
  );
};
{
  /* <Link to="/"><li className={"navbar-sub-item" + (url === "/" ? " active" : "")} >Popular</li></Link> */
}

export default NavFilter;
