import React from 'react';
import '../card/Card.css';
// import { IPerson } from '../cardsLists/CardsLists';
import { Startup } from '../../../../backend/mockData';

interface IProps {
  personDetails: Startup;
}

const Cards = ({ personDetails }: IProps): JSX.Element => {
  return (
    <div className="wrapper">
      <div className="card">
        <div className="card-body"></div>
        <img
          className="avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS66EeVBELXd8Ei_r6RXEJ9FCisZnndVQHbHA&usqp=CAU"
        />
        <h2 className="card-title">{personDetails.name}</h2>
        <p className="card_name">{personDetails.position}</p>
        <p className="card_dates">{personDetails.dateScraped} </p>
        <p className="card_email">{personDetails.email}</p>
        <p className="card_tags">{personDetails.tags}</p>
        <p className="card_tags">{personDetails.comment}</p>
        <div className="btn-box">
          <button className="btn">✅</button>
          <button className="btn">X</button>
          <button className="btn">⭐️</button>
          <button className="btn">💬</button>

          {/* <textarea className="comments" /> */}
        </div>
      </div>
    </div>
  );
};

export default Cards;
