const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const { protect } = require('../middleware/authMiddleware');

// PUBLIC
router.post('/', bookingController.createBooking);

//ADMIN
router.get('/', protect, bookingController.getAllBookings);
router.put('/:id', protect, bookingController.updateBooking);
router.delete('/:id', protect, bookingController.deleteBooking);


module.exports = router;