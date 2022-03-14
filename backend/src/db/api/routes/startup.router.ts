import express from "express";

import {
  getStartups,
} from '../controllers/startup.controllers';

const startupRouter = express.Router();

startupRouter.get('/startups', getStartups);


export default startupRouter;

