const path = require('path')
const router = require('express').Router()

router.get('/', (req, res) => {
    // res.send('home page')
    res.sendFile(path.join(__dirname, '../public', 'index.html'))
});
router.get('/about', (req, res) => {
    // res.send('This is about page')
    res.sendFile(path.join(__dirname, '../public', 'about.html'))
});

module.exports = router