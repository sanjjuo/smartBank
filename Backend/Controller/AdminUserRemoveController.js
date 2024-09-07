// import Admin from "../Model/AdminModel.js";
import Admin from "../Model/AdminModel.js";
import User from "../Model/userModal.js";

const removeUser = async (req, res) => {
    const { id } = req.params;
    console.log('Received ID:', id);
    try {
        const user = await User.findByIdAndDelete(id)
        if (user) {
            res.json({ success: true, message: "user removed successfully!" })
        } else {
            res.json({ success: false, message: "User not found." });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "There is an error in removing user" })
    }
}

export default removeUser