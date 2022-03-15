import mongoose from  "mongoose"
require("dotenv").config();
const CONNECT_PASSWORD = process.env.MONGO_PASSWORD;

mongoose.connect(
  `mongodb+srv://assafv:${CONNECT_PASSWORD}@cluster0.sta9t.mongodb.net/startupDatabase?retryWrites=true&w=majority`
);