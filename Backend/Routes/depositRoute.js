import express from 'express';
import { depositMoney } from '../Controller/depositController.js';
import authMiddleware from "../MiddleWare/authMiddleware.js"

const depositRoute = express.Router();

// Route for depositing money
depositRoute.post('/deposit',authMiddleware, depositMoney);

export default depositRoute;
