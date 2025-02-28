const http = require("http");
const host = 'localhost';
const port = 3000;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/":
            res.writeHead(200);
            res.end("Hello, World!");
            break
        case "/about":
            res.writeHead(200);
            res.end('About Page');
            break
         case "/contact":
            res.writeHead(200);
            res.end('Contact Page');
            break
        default:
            res.writeHead(404);
            res.end(JSON.stringify({error:"Resource not found"}));
        }
};


const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});