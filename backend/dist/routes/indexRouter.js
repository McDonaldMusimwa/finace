"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const statements_1 = __importDefault(require("./statements"));
const indexRouter = express_1.default.Router();
indexRouter.get("/", (req, res) => {
    res.status(200).json({ message: "Server running nOW" });
});
indexRouter.use('/statements', statements_1.default);
exports.default = indexRouter;
