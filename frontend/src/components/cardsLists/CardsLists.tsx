import React, { useState, useEffect } from 'react';
import Card from '../card/Card';
import { getStartupsData } from '../../api/apiFunction';
import { Startup } from '../../../../backend/mockData';

const CardLists = (): JSX.Element => {
  const [companiesData, setCompaniesData] = useState([]);
  useEffect(() => {
    // const data: Startup[]] = getStartupsData();
    getStartupsData(setCompaniesData);
    // console.log(companiesData)
  }, []);

  const displayCards = companiesData.map((person) => {
    
    return <Card personDetails={person} key={person._id}/>;
  });
  return <div>{displayCards}</div>;
};
export default CardLists;
