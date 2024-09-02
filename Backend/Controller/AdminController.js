import Admin from "../Model/AdminModel.js";
import User from "../Model/userModal.js" 

// Fetch logged-in users
export const getLoggedInUsers = async (req, res) => {
    try {
        const loggedInUsers = await Admin.find({}).populate('user');
        res.status(200).json(loggedInUsers);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
