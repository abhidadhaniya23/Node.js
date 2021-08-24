const express = require('express');
const path = require('path');
const app = express()
const mainRouter = require('./routes/index')
const PORT = 3000

const prefix = 'api';


// app.use(express.static(path.join(__dirname, 'public')))

// app.use(mainRouter)
// here i can also use a prefix something line
app.use(`/${prefix}`, mainRouter)

app.get('/app', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`App started at http://localhost:${PORT}`)
});

module.exports = prefix