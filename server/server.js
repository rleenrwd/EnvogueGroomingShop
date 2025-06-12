const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get('/', (req, res) => {
    res.send('Server is running!');
})

// Connect to MongoDB
const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB Connected Successfully!');
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log('Server running on port: ', PORT);
        });
    } catch (err) {
        console.error('Failed to connect to MongoDB: ', err.message);
    }
}

startServer();