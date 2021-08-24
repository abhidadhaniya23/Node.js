const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000

// builtin express middleware => express.static
app.use(express.static(path.join(__dirname, 'static')))

app.get('/', (req, res) => {
    res.send('Hello world')
})
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'about.html'))
})

app.listen(PORT, () => {
    console.log(`App started at http://localhost:${PORT}`)
});