const http = require('http')

// 1st parameter -> incoming request, 2nd param -> ? 
const server = http.createServer( (req, res) => {
    // console.log(req)
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('Here is our short history (about page)') 
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We cant seem to fing the page you are looking for</p>
    <a href="/">Back Home</a>`)
} )

server.listen(5000)
// sreach on google chrome -> localhost:5000