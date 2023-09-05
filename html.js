const http = require("http")

const host = "localhost"
const port = 3000

const requestListener = function(req, res) {
    res.setHeader("Content-Type", "text/html")
    res.writeHead(200)
    res.end(`<html><body><h1>Body Page</h1></body></html>`)
}


const server = http.createServer(requestListener)
server.listen(port, host, () => {
    console.log("Server is running")
})