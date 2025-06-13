const Service = require('../models/Service');

exports.getAllServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.createService = async (req, res) => {
    const service = new Service(req.body);
    try {
        const newService = await service.save();
        res.status(201).json(newService);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}

exports.deleteService = async (req, res) => {
    try {
        await Service.findByIdAndDelete(req.params.id);
        res.json({message: 'The requested service has been deleted.'});
    } catch (err) {
        res.status(404).json({message: 'Service not found'});
    }
}