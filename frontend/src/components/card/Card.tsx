import React from 'react';
import '../card/Card.css';
import { IPerson } from '../cardsLists/CardsLists';

interface IProps {
  personDetails: IPerson;
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
        <h2 className="card-title">startup</h2>
        <p className="card_discription">this is a company </p>
        <button className="btn">✅</button>
        <button className="btn">X</button>
        <button className="btn">⭐️</button>
      </div>
    </div>
  );
};

export default Cards;
