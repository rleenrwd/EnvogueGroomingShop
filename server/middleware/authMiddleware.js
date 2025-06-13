const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
    let token;

    // Check if token is provided in authorization header
    // A valid header looks like: Authorization: Bearer <token>
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from header by splitting the string and taking the value at index 1
            token = req.headers.authorization.split('')[1];

            // Verify token, if valid, it returns the decoded payload (which includes the user ID)
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Find the user by ID and exclude password using '.select('-password')'
            // Then the user data is attached to the req object as req.user
            // So its available in the route handler
            req.user = await User.findById(decoded.id).select('-password');

            if (!req.user) {
                return res.status(401).json({message: 'User not found'});
            }
            next(); // If everything is valid, next is called to continue to the protected route
        } catch (err) {
            console.error('Token verification failed: ', err.message);
            return res.status(401).json({message: 'Not authorized, token failed'});
        }
    }
    if (!token) {
        return res.status(401).json({message: 'Not authorized, no token'});
    }
}

module.exports = {protect};