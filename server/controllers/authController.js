const User = require('../models/User');
const generateToken = require('../utils/generateToken');

// @desc Login admin
// @route POST /api/auth/login
// @access Public

const loginUser = async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        });
    } else {
        res.status(401).json({message: 'Invalid email or password'});
    }
};

module.exports = {loginUser};