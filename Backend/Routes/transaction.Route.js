import express from 'express';
import { handleTransaction } from '../Controller/transactionController.js';

const transactionRoute = express.Router();

transactionRoute.post('/transaction', handleTransaction);

export default transactionRoute;
