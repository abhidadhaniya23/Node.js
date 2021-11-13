require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

const app = express()
const PORT = 3000

// middleware
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

// mail-sender
const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        // user: "29384aa2f283f0",
        // pass: "62263611274fdb"
        user: process.env.USER,
        pass: process.env.PASS
    }
});

// routes
app.get('/', (req, res) => {
    res.render('index.ejs')
});

app.post('/', (req, res) => {
    console.log(`Name : ${req.body.name} <br> Email : ${req.body.email} <br> Message : ${req.body.message}`);
    const mailOptions = {
        from: `${req.body.email}`,
        to: 'abhidadhaniya23@gmail.com',
        subject: `Email by ${req.body.name}`,
        html: `Name : ${req.body.name} <br> Email : ${req.body.email} <br> Message : ${req.body.message}`
    }
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.render('thankyou.ejs', { name: req.body.name })
        }
    });
})

app.listen(PORT, () => {
    console.log(`App started at http://localhost:${PORT}`)
});