import express from 'express';
import { getTransactionHistory } from '../Controller/transactionController.js';
import authMiddleware from '../MiddleWare/authMiddleware.js';

const transactionRoute = express.Router();

transactionRoute.get('/history', authMiddleware, getTransactionHistory);

export default transactionRoute;
