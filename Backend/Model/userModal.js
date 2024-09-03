import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  accountNumber: { type: String, unique: true },
  balance: { type: Number, required: true, default: 0 },
  isAdmin: { type: Boolean, default: false },
}, { timestamps: true });



const User = mongoose.models.user || mongoose.model('User', userSchema);

export default User;
