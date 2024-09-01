import express from "express";
import { getBalance } from "../Controller/balanceController.js";
import authMiddleware from "../MiddleWare/authMiddleware.js";

const balanceRoute = express.Router();

balanceRoute.post("/balance", authMiddleware, getBalance);

export default balanceRoute;
