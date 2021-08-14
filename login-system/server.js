const express = require('express')
const path = require('path')

const app = express()

const port = 3000

app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

app.post('/login', (req, res) => {
    console.log(req.body)
})

app.get('/login', (req, res) => {
    res.send('<h2>response submitted sucessfully</h2>')
})

app.listen(port, () => {
    console.log(`Example app listening at http ://localhost:${port}`)
})