// middleware
// middleware works between req and res... 

const express = require('express')
const app = express()
const PORT = 3000

// we have to use middleware before route
app.use('/', (req, res, next) => {
    console.log(req.baseUrl, req.originalUrl);
    // imagine here a login system and if user validate login properly then we call next()
    // other wise it's not move forward
    setTimeout(() => {
        next();
    }, 3000);
})

app.get('/', (req, res) => {
    res.send('Hello world')
});

app.listen(PORT, () => {
    console.log(`App started at http://localhost:${PORT}`)
});