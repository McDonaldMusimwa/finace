"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("../data/data");
const statementsrouter = express_1.default.Router();
statementsrouter.get("/", (req, res) => {
    console.log("statements recheaed");
    res.status(200).json({ message: "Successfull", data: data_1.statement1 });
});
exports.default = statementsrouter;
