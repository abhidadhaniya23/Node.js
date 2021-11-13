const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./model/user')

const app = express()
dotenv.config()

const port = 3000

// const URL = 'mongodb://localhost:27017/'

mongoose.connect(process.env.URL, { useNewUrlParser: true }, () => {
	console.log('connected to DB')
})

// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))

app.get('/', (req, res) => {
	res.render('index.ejs')
})

app.post('/', async (req, res) => {
	const user = new User({
		name: req.body.name,
		email: req.body.email
	})
	try {
		const savedUser = await user.save();
		res.render('thankyou.ejs', {
			name: savedUser.name,
			email: savedUser.email
		})
		console.log(req);
	}
	catch (err) {
		res.status(400).send(err);
	}
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})