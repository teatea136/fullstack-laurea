const http = require("http");
const math = require('./math');
const stringUtils = require('./stringUtils');
const dateUtils = require('./dateUtils');

const host = 'localhost';
const port = 3000;


const requestListener = function (req, res) {
};



const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
    console.log("Hello");
    console.log(dateUtils.weekday());
    console.log(math.addition(1,1));
    console.log(stringUtils.upper('pepepapa'));
});