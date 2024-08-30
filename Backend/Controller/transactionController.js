import Transaction from '../Model/transactionModal.js';
import User from '../Model/userModal.js';

export const handleTransaction = async (req, res) => {
  const { amount, type } = req.body;
  const user = await User.findById(req.user.id);

  if (type === 'withdraw' && user.balance < amount) {
    return res.status(400).json({ message: 'Insufficient balance' });
  }

  const newBalance = type === 'deposit' ? user.balance + amount : user.balance - amount;

  const transaction = await Transaction.create({
    userId: req.user.id,
    type,
    amount,
    balanceAfter: newBalance,
  });

  user.balance = newBalance;
  await user.save();

  res.status(201).json(transaction);
};
