// Require express and create an instance of it
const express = require('express');
const showdown = require('showdown')
const fs = require('fs');
const path = require('path');
// const markdown = require("markdown").markdown;
const app = express();

const localHost = '127.0.0.1'
const port = 3000

app.use(express.static('public'));

// on the request to root (localhost:3000/)
// app.get('/', function (req, res) {
//     res.send('<b>My</b> first express http server');
// });

app.get('/', function (req, res) {
    res.header('Content-type', 'text/html');
    return res.end('<h1>Hello, Secure World!</h1>');
});

// let str = '\n';
// str = str.replace('\n', '<br>')

// console.log(str);

app.get('/test', async (req, res) => {

    let converter = new showdown.Converter()

    let str = fs.readFileSync("./files/README.md", "utf8");

    // showdown.setOption('\n', '<br>');

    let result = converter.makeHtml(str);

    // str = str.replace('\n', '\n')
    // const regex = /\n/g;
    // console.log(result.replace(/\\n/g, '<br>'));
    // const newResult = result.replaceAll('blockquote', 'h1');
    // console.log(newResult);

    // console.log("\\n")

    // result.replace(/^[\w\<\'\'][^\n]*\n+/gm, function (text) {
    //     text.match(/\n{2}/) ? text : text.trim() + "  \n";
    // })


    // await fs.writeFile(path.join(__dirname + '/public/index.ejs'), result.replace(/\\n/g, '\n\n'), err => {
    await fs.writeFile(path.join(__dirname + '/public/index.ejs'), result, err => {
        if (err) {
            console.log(err);
        }
        res.render('index.ejs');
        // console.log('Successfully Done!');
    })

})

// On localhost:3000/welcome
app.get('/welcome', function (req, res) {
    res.send('<b>Hello</b> welcome to my http server made with express');
});

// Change the 404 message modifying the middleware
app.use(function (req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});


// start the server in the port 3000 !
app.listen(port, function () {
    // console.log('Example app listening on port 3000.');
    console.log(`your server run on http://${localHost}:${port}/test`);
});
