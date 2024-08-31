import express from "express"
import { withDrawMoney } from "../Controller/withDrawController"
import {authMiddleware} from "../MiddleWare/authMiddleware.js"

const withDrawRoute = express.Router()

withDrawRoute.post("/withdraw", authMiddleware, withDrawMoney)

export default withDrawRoute