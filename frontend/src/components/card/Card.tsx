import React from "react";
import "../card/Card.css";
// import { IPerson } from '../cardsLists/CardsLists';
import { Startup } from "../../../../backend/mockData";

interface IProps {
  personDetails: Startup;
}

const Cards = ({ personDetails }: IProps): JSX.Element => {
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
          {/* <p className="card_comments">{personDetails.comment}</p> */}
        </div>
      </div>
      <div className="btn-box">
        <button className="btn">💬</button>
        <div className="btn-box-right">
          <button className="btn">✅</button>
          <button className="btn">X</button>
          <button className="btn">⭐️</button>
          {/* <textarea className="commen/ts" /> */}
        </div>
      </div>
    </div>
  );
};

export default Cards;
