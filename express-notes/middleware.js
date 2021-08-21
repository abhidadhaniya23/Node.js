// Middleware function can perform 3 major tasks...

/*
1. req & res
2. End cycle (req&res cycle)
3. next() (Call next middleware in stack)
*/

const express = require('express');
const app = express();

const auth = function (req, res, next) {
    if (req.query.admin === 'true') {
        next()
    }
    else {
        res.send('No auth')
    }
    console.log(req.originalUrl);
    console.log('auth');
    // next()
}

const myLogger = function (req, res, next) {
    console.log('User logged');
    next()
}

const reqTime = function (req, res, next) {
    req.reqTime = Date.now()
    next()
}

// when user req. to any route then myLogger function run...
app.use(myLogger)
app.use(reqTime)



app.get('/', (req, res) => {
    res.send(`Home Route, current time ${req.reqTime}`)
})

app.get('/user', auth, (req, res) => {
    res.send('User page')
})


app.listen('3000')