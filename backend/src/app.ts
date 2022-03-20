import express, {Express} from "express";
import cors from "cors";
import path from "path";
import { config } from 'dotenv';
config({ path: path.resolve(__dirname, '../.env') });
import startupRouter from "./db/api/routes/startup.router";
import "./db/mongoose";

const app: Express = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({}));
app.use(express.urlencoded({ extended: false }));
app.use('/api', startupRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname,  "build", "index.html"));
  });
}

app.listen(PORT, () => console.log("server is running on port "+PORT));

export { app };
