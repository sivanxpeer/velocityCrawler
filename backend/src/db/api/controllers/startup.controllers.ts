import express, { Request, Response } from 'express';
import startupsData from "../../../../mockData";

const app = express();
app.use(express.json());

export const getStartups = async (req: Request, res: Response) => {
  try {
    const startups = startupsData; //await
    res.status(200).send(startups);
  } catch (e: any) {
    res.send(e.message);
  }
};