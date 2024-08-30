import User from '../Model/userModal.js';
import Transaction from '../Model/transactionModal.js'

export const getUserDashboard = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const transactions = await Transaction.find({ userId: req.user.id });

    res.json({ user, transactions });
  } catch (error) {
    res.status(400).json({ message: 'Error fetching dashboard', error });
  }
};
