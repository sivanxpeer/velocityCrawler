import React from 'react';
import { useState } from 'react';
import Card from '../card/Card';

export interface IPerson {
  name: string;
  lastNameL: string;
  title: string;
  company: string;
  position: string[];
}

const fakeData: IPerson[] = [
  {
    name: 'dokfa',
    lastNameL: 'string',
    title: 'string',
    company: 'string',
    position: ['fsadf', 'dovgjs'],
  },
  {
    name: 'dokfa',
    lastNameL: 'string',
    title: 'string',
    company: 'string',
    position: ['fsadf', 'dovgjs'],
  },
];

const CardsLists = (): JSX.Element => {
  const [companiesData, setCompaniesData] = useState([]);
  const displayCards = fakeData.map((person: IPerson) => {
    return <Card personDetails={person} />;
  });
  return <div>{displayCards}</div>;
};

export default CardsLists;
