const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req)
    // if you want to watch this log then refresh browser one time because server waiting for browser request...

    if (req.url === '/') {  // if user request at homepage...
        res.end('This is home page of our website.')
    }
    if (req.url === '/about') {
        res.end('This is about us page.')
    }

    // if user request on that page which doesn't exist in our website...
    res.end(`
        <h1>Oops! This page is not available. </h1>
        <a href='/'>Home page</a>
    `)

    // res.write('Welcome to our home page.')
    // res.end()
})

server.listen(5000)