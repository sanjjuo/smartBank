import User from "../Model/userModal.js";

const getBalance = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('balance');

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.json({ success: true, balance: user.balance });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error fetching balance", error });
    }
};

export { getBalance };
