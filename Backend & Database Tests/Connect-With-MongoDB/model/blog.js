const mongoose = require('mongoose')
const Schema = mongoose.Schema

// this object describe a structure of model
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog;