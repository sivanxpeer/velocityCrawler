"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStartups = void 0;
const express_1 = __importDefault(require("express"));
const mockData_1 = __importDefault(require("../../../../mockData"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const getStartups = async (req, res) => {
    try {
        const startups = mockData_1.default; //await
        res.status(200).send(startups);
    }
    catch (e) {
        res.send(e.message);
    }
};
exports.getStartups = getStartups;
