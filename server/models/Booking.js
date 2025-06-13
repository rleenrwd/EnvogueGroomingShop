const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    email: {type: String, required: true, trim: true},
    service: {type: String, required: true},
    date: {type: Date, required: true},
    notes: {type: String},
    createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Booking', bookingSchema);