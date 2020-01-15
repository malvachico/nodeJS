const http = require('http');
const fs = require('fs');

const textInput = fs.readFileSync(`${__dirname}/txt/input.txt`, 'utf-8');

fs.writeFileSync(`${__dirname}/txt/writeFileSync.txt`, textInput, 'utf-8');
console.log('writeFileSync.txt is writed...');

const server = http.createServer((req, res) => {
  res.end(`server started. \n${textInput}`);
});

server.listen('8000', '127.0.0.1', () => {
  console.log('server started on port 8000!');
});
