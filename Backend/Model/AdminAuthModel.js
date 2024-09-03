import mongoose from "mongoose"

const adminAuthSchema = mongoose.Schema({
    name: { type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    isAdmin: { type: Boolean, default: true },
},{timestamps: true})

const AdminAuth = mongoose.models.adminAuth || mongoose.model("AdminAuth", adminAuthSchema)

export default AdminAuth