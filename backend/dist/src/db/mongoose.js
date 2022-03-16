"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv").config();
const CONNECT_PASSWORD = process.env.MONGO_PASSWORD;
mongoose_1.default.connect(`mongodb+srv://assafv:${CONNECT_PASSWORD}@cluster0.sta9t.mongodb.net/startupDatabase?retryWrites=true&w=majority`);
