import React ,{useState, useEffect} from "react";
import "../card/Card.css";
// import { IPerson } from '../cardsLists/CardsLists';
import {MdOutlineComment} from "react-icons/md";
import { Startup } from "../../../../backend/mockData";
import xIcon from "../../assets/icons/X_icon.jpg";
import vIcon from "../../assets/icons/V_icon.jpg";
import starShallowIcon from "../../assets/icons/StarShallow_icon.jpg";
import emptyCommentIcon from "../../assets/icons/EmptyComment_icon.jpg";
import yellowStar from "../../assets/icons/YellowStar_icon.jpg";

interface IProps {
  personDetails: Startup;
}

const Cards = ({ personDetails }: IProps): JSX.Element => {
  const [stared,setStared] = useState([]);
  const [starIcon,setStarIcon] =useState(false); 
  const [comments,setComments] = useState([]);
  const [commentIcon,setCommentIcon] =useState(false); 


  const handleStar = (e:any)=>{
    setStared(e.target.parentElement.parentElement.parentElement.children[0]);
    {console.log(stared)}

    setStarIcon(!starIcon);
  }

  const handleComment = ()=>{
    setCommentIcon(!commentIcon); //changing icon back to empty doesnt work
  }

useEffect(()=>{

},[commentIcon])
  return (
    <div className="wrapper">
      <div className="card-body">
        <div className="card-box-1">
          <img
            className="avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS66EeVBELXd8Ei_r6RXEJ9FCisZnndVQHbHA&usqp=CAU"
          />
          <div className="card-details">
            <p className="card_name">{personDetails.name}</p>
            <p className="card_date">{personDetails.dateScraped} </p>
          </div>
          </div>
          <div className="card-box-2">

          <p className="card_position">{personDetails.position}</p>
          <div className="card-links-container">
          <p className="card_email card_tags"><span className="card-links">@</span>{personDetails.email}</p>
          <p className="card_tags"><span className="card-links">#</span>{personDetails.tags}</p>
          </div>
        </div>
      </div>
      <div className="btn-box">
          {!commentIcon ? <img src={emptyCommentIcon} onClick={handleComment} className="btn" style={{width:"25px", height:"25px"}}></img>:
              <MdOutlineComment size="1.5em"/>}
        <div className="btn-box-right">
          <img src={vIcon} className="btn v"  style={{width:"29px", height:"30px",margin:"-3px 0 3px 0"}}></img>
          <img src={xIcon} className="btn" style={{width:"22px", height:"22px"}}></img>
          <img src={starIcon? yellowStar :starShallowIcon } onClick={handleStar} className="btn" style={{width:"22px", height:"22px"}}></img>
        </div>
      </div>
    </div>
  );
};

export default Cards;
