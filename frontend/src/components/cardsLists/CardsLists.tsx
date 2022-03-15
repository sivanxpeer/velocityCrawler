import React, { useState, useEffect } from 'react';
import Card from '../card/Card';
import { getStartupsData } from '../../api/apiFunction';
import { Startup } from '../../../../backend/mockData';
import './CardLists.css';
const CardLists = (): JSX.Element => {
  const [companiesData, setCompaniesData] = useState([]);
  useEffect(() => {
    // const data: Startup[]] = getStartupsData();
    getStartupsData(setCompaniesData);
    // console.log(companiesData)
  }, []);

  const displayCards = companiesData.map((person) => {
    
    return <Card personDetails={person} />;
  });
  return <div className="card-container">{displayCards}</div>;
};
export default CardLists;
