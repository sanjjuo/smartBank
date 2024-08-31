import mongoose from 'mongoose';

const depositSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  accountNumber: {
    type: Number,
    required: true,
  },
  depositAmount: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  depositDate:{
    type:String,
    required: true
  },
  depositTime:{
    type:String,
    required: true
  }
}, { timestamps: true });

const Deposit = mongoose.models.Deposit || mongoose.model('Deposit', depositSchema);

export default Deposit;
