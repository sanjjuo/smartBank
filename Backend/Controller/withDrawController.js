import User from "../Model/userModal.js";
import Withdraw from "../Model/withdrawModel.js";

const withDrawMoney = async (req, res) => {
    const { accountNumber, withdrawAmount, paymentMethod } = req.body;
    console.log('Withdrawal request received:', { accountNumber, withdrawAmount, paymentMethod });
    const userId = req.user._id;

    try {
        // Ensure withdrawAmount is a valid number
        const amount = Number(withdrawAmount);
        if (isNaN(amount) || amount <= 0) {
            return res.status(400).json({ success: false, message: "Invalid withdrawal amount" });
        }

        // Find the user by account number
        const user = await User.findOne({ accountNumber });

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Check if the user's balance is valid
        if (isNaN(user.balance)) {
            return res.status(500).json({ success: false, message: "Invalid user balance" });
        }

        // Check if the user has enough balance
        if (user.balance < amount) {
            return res.status(400).json({ success: false, message: "Insufficient balance" });
        }

        // Deduct the withdrawal amount from the user's balance
        const newBalance = user.balance - amount;
        if (isNaN(newBalance)) {
            return res.status(500).json({ success: false, message: "Balance calculation error" });
        }

        user.balance = newBalance;
        await user.save();

        // Create a new withdrawal transaction
        const newWithDrawTransaction = new Withdraw({
            user: userId,
            accountNumber,
            withdrawAmount: amount,
            withdrawDate: new Date().toLocaleDateString(),
            withdrawTime: new Date().toLocaleTimeString(),
            paymentMethod
        });

        // Save the new transaction to the database
        const savedWithDrawTransaction = await newWithDrawTransaction.save();

        // Send the updated balance and saved transaction back as a response
        res.status(201).json({ success: true, transaction: savedWithDrawTransaction, balance: user.balance });
    } catch (error) {
        console.error("Error in withdrawing money:", error); // Detailed logging
        res.status(500).json({ success: false, message: "Error in withdrawing money", error: error.message });
    }
};

export { withDrawMoney };
