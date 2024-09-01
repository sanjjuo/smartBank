import Transaction from '../Model/transactionModel.js';

const getTransactionHistory = async (req, res) => {
    try {
        console.log("Fetching transactions for user:", req.user._id); 

        const transactions = await Transaction.find({ user: req.user._id }).sort({ date: -1 });

        console.log("Fetched Transactions:", transactions); 
        
        res.json({ success: true, transactions });
    } catch (error) {
        console.error('Error fetching transaction history:', error);
        res.status(500).json({ success: false, message: "Error fetching transaction history", error });
    }
};


export { getTransactionHistory };
