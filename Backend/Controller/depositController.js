import Deposit from "../Model/depositModel.js";
import User from "../Model/userModal.js";
import Transaction from "../Model/transactionModel.js"; // Import the Transaction model

const depositMoney = async (req, res) => {
    const { accountNumber, depositAmount, paymentMethod } = req.body;
    const userId = req.user._id;

    try {
        const user = await User.findOne({ accountNumber });

        if (!user) {
            return res.status(404).json({ success: false, message: "Account not found" });
        }

        // Create a new deposit transaction
        const newDepositTransaction = new Deposit({
            user: userId,
            accountNumber,
            depositAmount,
            depositDate: new Date().toLocaleDateString(), 
            depositTime: new Date().toLocaleTimeString(), 
            paymentMethod,
        });

        // Save the deposit transaction to the database
        const savedTransaction = await newDepositTransaction.save();

        // Update the user's balance
        user.balance += depositAmount;
        await user.save();

        // Create a corresponding deposit transaction history record
        const transaction = new Transaction({
            user: userId,
            description: 'Amount is Deposited',
            amount: depositAmount,
            date: new Date(),
            type: "deposit"
        });

        // Save the deposit transaction history to the database
        await transaction.save();

        res.status(201).json({ success: true, transaction: savedTransaction });
    } catch (error) {
        console.error("Error processing deposit:", error);
        res.status(500).json({ success: false, message: "Error processing deposit", error: error.message });
    }
};

export { depositMoney };
