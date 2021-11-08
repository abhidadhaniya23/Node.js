const mongoose = require('mongoose')
const Schema = mongoose.Schema

// this object describe a structure of model
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, { timestamps: true })

const User = mongoose.model('User', userSchema)

module.exports = User;