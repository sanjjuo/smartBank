import express from 'express';
import { getLoggedInUsers } from '../Controller/AdminController.js';

const adminRouter = express.Router();

adminRouter.get('/logged-in-users', getLoggedInUsers);

export default adminRouter;
