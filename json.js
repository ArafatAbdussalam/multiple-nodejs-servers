const http = require("http")

const port = 3000

const requestListener = function(req, res) {
    res.setHeader("Content-Type", "application/json")
    res.writeHead(200)
    res.end(`{"message": "This is a JSON response"}`)
}


const server = http.createServer(requestListener)

server.listen(port)