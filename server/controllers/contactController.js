const ContactMessage = require('../models/ContactMessages');

// ADMIN ONLY
exports.getAllMessages = async (req, res) => {
    try {
        const messages = await ContactMessage.find().sort({createdAt: -1});
        res.json(messages);
    } catch (err) {
    res.status(500).json({message: err.message});
    }
};

// PUBLIC 
exports.createMessage = async (req, res) => {
    try {
        const {name, email, message} = req.body;

        const newMessage = new ContactMessage({
            name,
            email,
            message
        });

        await newMessage.save();
        res.status(201).json(newMessage);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}

// ADMIN ONLY
exports.deleteMessage = async (req, res) => {
    try {
        const message = ContactMessage.findByIdAndDelete(req.params.id);

        if (!message) return res.status(404).json({message: 'Message not found'});

        res.json({message: 'Message successfully deleted'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}