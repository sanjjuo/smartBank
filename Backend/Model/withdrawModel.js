import mongoose from "mongoose"


const withdrawSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    accountNumber: {
        type: String,
        required: true,
    },
    withdrawAmount: {
        type: Number,
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    withdrawDate: {
        type: String,
        required: true
    },
    withdrawTime: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Withdraw = mongoose.models.Withdraw || mongoose.model("Withdraw" , withdrawSchema)

export default Withdraw;
