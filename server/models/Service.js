const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: {type: String, required: true},
    subtitle: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    durationMinutes: {type: Number, required: true},
    imageUrl: String,
    createdAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Service', serviceSchema)