"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const startup_controllers_1 = require("../controllers/startup.controllers");
const startupRouter = express_1.default.Router();
startupRouter.get('/startups', startup_controllers_1.getStartups);
exports.default = startupRouter;
