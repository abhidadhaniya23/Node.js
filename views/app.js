const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000

// static files
app.use(express.static('public'))
app.use('/css', express.static(path.join(__dirname + 'public/css')))

// set ejs engine
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index',{
        title: 'Home Page'
    })
})
app.get('/about', (req, res) => {
    res.render('about',{
        title: 'About Page'
    })
})

app.listen(PORT, () => {
    console.log(`App started at http://localhost:${PORT}`)
})