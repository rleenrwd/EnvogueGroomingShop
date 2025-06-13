const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const serviceRoutes = require('./routes/serviceRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes 
app.use('/api/services', serviceRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/auth', authRoutes);




app.get('/', (req, res) => {
    res.send('Server is running!');
})





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