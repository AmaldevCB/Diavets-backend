const mongoose = require('mongoose');

// content
const contentSchema = new mongoose.Schema({
    title: {
        type: String
    },
    text: {
        type: String
    }
});

const Content = mongoose.model('Content', contentSchema);


// image
const imageSchema = new mongoose.Schema({
    title: {
        type: String
    },
    picture: {
        type: String
    }
});

const Image = mongoose.model('Image', imageSchema);


// form
const contactSchema = new mongoose.Schema({
    name: {
        String
    },
    phone: {
        String
    },
    email: {
        String
    },
    message: {
        String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Contact = mongoose.model('Contact', contactSchema)

module.exports = { Content, Image, Contact };
