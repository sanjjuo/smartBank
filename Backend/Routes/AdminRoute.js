import express from 'express';
import { getLoggedInUsers } from '../Controller/AdminController.js';
import removeUser from '../Controller/AdminUserRemoveController.js';

const adminRouter = express.Router();

adminRouter.get('/logged-in-users', getLoggedInUsers);
adminRouter.delete("/remove_user/:id", removeUser)

export default adminRouter;
