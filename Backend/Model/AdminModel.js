import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    accountNumber:{
        type: Number,
        required: true
    },
    balance:{
        type: Number,
        required: true, 
        default: 0
    },
    loginTime: { 
        type: Date,
        default: Date.now
    },
    loginIP: { 
        type: String,
        required: false
    }

})

const Admin = mongoose.models.admin || mongoose.model( "Admin" , adminSchema)

export default Admin