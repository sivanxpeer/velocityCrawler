import React, { useState,useEffect } from 'react';
import Card from '../card/Card';
import myApi from "../../api/Api";
import {Startup} from "../../../../backend/mockData";

const CardsLists = (): JSX.Element => {
  const [companiesData, setCompaniesData] = useState([]);

  useEffect(() => {
  const getStartupsData = async () => {
    try {
      const { data } = await myApi.get("/startups");
      console.log(data); 
      setCompaniesData(data);
    } catch (error) {
      console.log(error);
    }
  };
  getStartupsData();
  }, []);

  const displayCards = companiesData.map((person) => {
    return <Card personDetails={person} />
  });
  return <div>{displayCards}</div>;
};

export default CardsLists;
