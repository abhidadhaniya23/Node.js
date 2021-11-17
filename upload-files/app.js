const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
	res.render('index.ejs');
})
app.post('/upload', (req, res) => {
	fs.readFile(req.body.file, 'utf8', (error, result) => {
		if (error) {
			console.log(`Error: ${error}`)
		}
		else {
			console.log(result)
		}
	})
	// console.log(req.file)
	res.send('done');
})

app.listen(port, () => {
	console.log(`Example app listening at http ://localhost:${port}`)
})