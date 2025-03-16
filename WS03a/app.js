const http = require("http");
const axios = require("axios");
const nodemon = require("nodemon");
const fs = require("fs");
const { CLIENT_RENEG_WINDOW } = require("tls");
const { log } = require("console");

const host = 'localhost';
const port = process.env.PORT || 3005;


const requestListener = function (req, response) {

};

 
const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
    axios('https://icanhazdadjoke.com/', {headers : 'Accept : text/plain'} ).then(function(response) {
        console.log(response.data);
    });
    fs.readFile('./example.txt', 'utf8', (err, data) => {
        if (err) {
          console.error('error = ' + err);
          return;
        }
        console.log(data);
    });
    fs.writeFile("output.txt", 'new line dis is', (err) => {
        if (err) console.log(err);
    });
    fs.appendFile("output.txt", " and im an append", (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("All done writing")
        }
    });
    fs.unlink("temp.txt",(err => {if (err) console.log(err);}));
    console.log('Done deletin');
    fs.mkdir("testDir", (err => {if (err) console.log(err);}));
    fs.rmdir("testDir", (err => {if (err) console.log(err);}));
    fs.watch("watch.txt", (eventType, filename) => { 
        console.log("\nThe file", filename, "was modified!"); 
        console.log("The type of change was:", eventType); 
      }); 
});
