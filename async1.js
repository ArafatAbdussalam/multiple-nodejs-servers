const http = require("http")
const fs = require("fs").promises;

let indexFile;

// load the file at once before running the server

const requestListener = function(req, res) {
    res.setHeader("Content-Type", "text/html")
    res.writeHead(200)
    res.end(indexFile)
}

const server = http.createServer(requestListener)

fs.readFile(__dirname + "/async.html").then(
    (contents) => {
        indexFile = contents
        
        server.listen(3000)
    }
).catch(
    (err) => {
        console.error(`Could not find the file ${err}`)
        process.exit(1)
    }
)