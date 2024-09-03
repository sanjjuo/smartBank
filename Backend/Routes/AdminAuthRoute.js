import express from "express"
import { loginAdmin, registerAdmin } from "../Controller/AdminAuthController.js"


const adminAuthRoute = express.Router()

adminAuthRoute.post("/login" , loginAdmin)
adminAuthRoute.post("/register", registerAdmin)

export default adminAuthRoute