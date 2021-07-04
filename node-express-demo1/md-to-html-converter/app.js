// Require express and create an instance of it
const express = require('express');
const fs = require('fs');
var markdown = require("markdown-js");
const app = express();

const localHost = '127.0.0.1'
const port = 3000

// on the request to root (localhost:3000/)
// app.get('/', function (req, res) {
//     res.send('<b>My</b> first express http server');
// });

app.get('/', function (req, res) {
    res.header('Content-type', 'text/html');
    return res.end('<h1>Hello, Secure World!</h1>');
});

app.get('/test', function (req, res) {
    /*
    // var path = __dirname + '/files/README.md';
    var file = fs.readFile('../node-express-demo1/files/README.md', function (err, data) {
        if (err) {
            // console.log(path);
            console.log(err)
        }
        return data.toString()
    })
    res.send(marked(file))
    */

    var str = fs.readFileSync("./files/README.md", "utf8");
    
    var result = markdown.makeHtml(str);

    res.header('Content-type', 'text/html');
    return res.end(`${result}`);
    
    console.log(result);
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
    console.log(`your server run on http://${localHost}:${port}`);
});
