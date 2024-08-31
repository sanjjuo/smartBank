import jwt from 'jsonwebtoken';
import User from '../Model/userModal.js';

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Assuming token is in the format "Bearer token"

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Find user by ID and attach to request
        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        req.user = user; // Attach user to request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: 'Invalid token' });
    }
};

export default authMiddleware;
