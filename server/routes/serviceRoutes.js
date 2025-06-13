const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// Public Routes
router.get('/', serviceController.getAllServices);

// Admin Routes
router.post('/', serviceController.createService);
router.delete('/:id', serviceController.deleteService);

module.exports = router;