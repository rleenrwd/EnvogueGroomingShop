const Booking = require('../models/Booking');

// ADMIN ROUTE
exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().sort({date: 1});
        res.json(bookings);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

// PUBLIC ROUTE
exports.createBooking = async (req, res) => {
    try {
        const {name, email, service, date, notes} = req.body;
        const newBooking = new Booking({
            name, 
            email,
            service,
            date,
            notes
        });

        await newBooking.save();
        res.status(201).json(newBooking);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};

// ADMIN ROUTES
exports.updateBooking = async (req, res) => {
    try {
        const booking = await Booking.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );

        if(!booking) return res.status(404).json({message: 'Booking not found'});
        
        res.json(booking);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.deleteBooking = async (req, res) => {
    try {
        const booking = await Booking.findByIdAndDelete(req.params.id);

        if (!booking) return res.status(404).json({message: 'Booking not found'});

        res.json({message: 'Booking successfully deleted'});

    } catch (err) {
        res.status(500).json({message: err.message});
    }
};