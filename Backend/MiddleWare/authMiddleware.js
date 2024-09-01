import jwt from 'jsonwebtoken';
import User from '../Model/userModal.js';

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; 

    if (!token) {
        console.log('No token provided');
        return res.status(401).json({ success: false, message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id); 

        if (!req.user) {
            console.log('User not found');
            return res.status(401).json({ success: false, message: 'User not found' });
        }

        console.log('User authenticated:', req.user._id);
        next();
    } catch (error) {
        console.log('Invalid token', error);
        res.status(401).json({ success: false, message: 'Invalid token' });
    }
};




export default authMiddleware;
