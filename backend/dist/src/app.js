"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const startup_router_1 = __importDefault(require("./db/api/routes/startup.router"));
require("./db/mongoose");
const app = (0, express_1.default)();
exports.app = app;
const PORT = 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json({}));
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/api', startup_router_1.default);
app.listen(PORT, () => console.log("server is running on port " + PORT));
