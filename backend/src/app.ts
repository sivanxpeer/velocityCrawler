import express, {Express} from "express";
import cors from "cors";
import path from "path";
// config({ path: path.resolve(__dirname, '../.env') });
import { config } from 'dotenv';
import startupRouter from "./db/api/routes/startup.router";
import "./db/mongoose";

const app: Express = express();
const PORT = 5000;

app.use(cors());
app.use(express.json({}));
app.use(express.urlencoded({ extended: false }));
app.use('/api', startupRouter);

app.listen(PORT, () => console.log("server is running on port "+PORT));

export { app };
