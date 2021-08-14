const express = require('express');
const app = express();
// const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello world')
});
app.get('/about', (req, res) => {
  res.send('this is about page.')
});
app.get('/contact', (req, res) => {
  res.send('this is contact page...')
});

app.listen(3000, () => {
  console.log(`Example app listening on port 3000!`)
});