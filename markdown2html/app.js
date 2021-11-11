import findBlockQuotes from './converter-utilities/blockquotes';
const express = require('express')
const app = express()
const PORT = 3000

// const markdownStr = '# Example \nThis is my example text';
// const htmlStr = convertToHTML(markdownStr);
// console.log(htmlStr);

app.get('/', (req, res) => {
    res.send('Hello world')
});

app.listen(PORT, () => {
    console.log(`App started at http://localhost:${PORT}`)
});