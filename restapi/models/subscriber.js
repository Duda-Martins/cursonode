const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userChanel: {
        type: String,
        required: true
    },
    userDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Subscriber', subscriberSchema)