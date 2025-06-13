const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

const createAdmin = async () => {
  try {
    await connectDB();

    const name = 'Admin';
    const email = 'admin@example.com';
    const password = 'admin123';

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      console.log('Admin user already exists');
    } else {
      const user = new User({ name, email, password });
      await user.save();
      console.log('Admin user created successfully');
    }

    process.exit();
  } catch (error) {
    console.error('Error creating admin:', error.message);
    process.exit(1);
  }
};

createAdmin();
