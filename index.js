const fs = require('fs');
const url = require('url');
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('server started!');
});

server.listen('8000', '127.0.0.1', () => {
  console.log('server started on port 8000!');
});
