import User from "../Model/userModal.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator";
import Admin from "../Model/AdminModel.js";


// login

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email })
        console.log('User login attempt:', user);

        if (!user) {
            return res.json({ success: false, message: "User doesn't exist" })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.json({ success: false, message: "Password is incorrect" })
        }

        const token = createToken(user._id)

        // Log admin entry or update existing entry
        let adminEntry = await Admin.findOne({ user: user._id });

        if (!adminEntry) {
            // Create a new admin entry if it doesn't exist
            adminEntry = new Admin({
                user: user._id,
                accountNumber: user.accountNumber, 
                balance: user.balance, 
                loginIP: req.ip 
            });
        } else {
            // Update the login time and IP address for existing admin entry
            adminEntry.loginTime = Date.now();
            adminEntry.loginIP = req.ip;
        }

        // Save the admin entry
        await adminEntry.save();


        res.json({ success: true, token })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}



const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

// register

const registerUser = async (req, res) => {
    const { name, accountNumber, email, password } = req.body
    try {

        // checking user is exist

        const userExists = await User.findOne({ email })
        if (userExists) {
            return res.json({ success: false, message: "User already exists" })
        }

        // validating email format and strong password

        if (!validator.isEmail(email)) {   //if the user email is not valid is checking here
            return res.json({ success: false, message: "Please enter valid email" })
        }

        if (password.length < 8) {  // if the user's password have not 8 characters is checking here
            return res.json({ success: false, message: "Please enter strong password" })
        }

        // hashing user's password

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            name: name,
            accountNumber: accountNumber,
            email: email,
            password: hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({ success: true, token })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })

    }
}

export { loginUser, registerUser }