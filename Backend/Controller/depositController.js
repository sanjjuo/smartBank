import Deposit from "../Model/depositModel.js";

const depositMoney = async (req, res) => {
    const { accountNumber, depositAmount, paymentMethod } = req.body;
    const userId = req.user._id;

    try {
        const newDepositTransaction = new Deposit({
            user: userId,
            accountNumber: accountNumber,
            depositAmount: depositAmount,
            depositDate: new Date().toLocaleDateString(), // Format the date
            depositTime: new Date().toLocaleTimeString(), // Format the time
            paymentMethod: paymentMethod
        });

        // Save the new transaction to the database,
        const savedTransaction = await newDepositTransaction.save();

        // Send the saved transaction back as a response
        res.status(201).json(savedTransaction);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error processing deposit", error });
    }
}
export { depositMoney };
