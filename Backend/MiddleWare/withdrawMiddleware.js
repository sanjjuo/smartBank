import jwt from 'jsonwebtoken';
import User from '../Model/userModal.js';

const withDrawMiddleware = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ success: false, message: "No token, authorization denied" });
    }

    try {       
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next();
    } catch (error) {
        res.status(401).json({ success: false, message: "Token is not valid" });
    }
};

export default withDrawMiddleware;
