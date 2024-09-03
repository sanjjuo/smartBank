import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import AdminAuth from "../Model/AdminAuthModel.js";


// login

const loginAdmin = async (req, res) => {
    const { email, password } = req.body
    try {
        const adminUser = await AdminAuth.findOne({ email })
        console.log('Admin login attempt:', adminUser);

        if (!adminUser) {
            return res.json({ success: false, message: "Admin doesn't exist" })
        }

        const isMatch = await bcrypt.compare(password, adminUser.password)

        if (!isMatch) {
            return res.json({ success: false, message: "Password is incorrect" })
        }

        const token = createToken(adminUser._id)
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

const registerAdmin = async (req, res) => {
    const { name, email, password } = req.body

    try {
        const adminUserExists = await AdminAuth.findOne({ email })

        if (adminUserExists) {
            return res.json({ success: false, message: "Admin already exists" })
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter valid email" })
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter strong password" })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newAdminUser = new AdminAuth({
            name,
            email,
            password: hashedPassword
        });

        const admin = await newAdminUser.save();
        const token = createToken(admin._id);
        res.json({ success: true, token });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}


export { loginAdmin, registerAdmin }