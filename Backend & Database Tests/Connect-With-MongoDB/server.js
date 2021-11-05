const express = require('express')
const mongoose = require('mongoose')
const Blog = require('./model/blog')

const app = express()
const PORT = 3000

const url = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';

mongoose.connect(url)
    .then(() => console.log('connected to DB'))
    .catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello world')
});

app.get('/blogs', (req, res) => {
    Blog.find()
        .then(response => res.send(response))
        .catch(err => console.log(err))
})

app.get('/add-blog', (req, res) => {
    const blogPosts = new Blog({
        title: req.query.post,
        author: req.query.username
    })
    blogPosts.save()
        .then((response) => res.send('post saved successfully...'))
        .catch((err) => console.log(err))
})

app.listen(PORT, () => {
    console.log(`App started at http://localhost:${PORT}`)
})