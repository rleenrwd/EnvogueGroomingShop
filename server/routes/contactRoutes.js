const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const {protect} = require('../middleware/authMiddleware');

// PUBLIC ROUTE FOR USERS TO SUBMIT MESSAGE
router.post('/', contactController.createMessage);

// PRIVATE ROUTES FOR ADMIN
router.get('/', protect, contactController.getAllMessages);
router.delete('/:id', protect, contactController.deleteMessage);

module.exports = router;