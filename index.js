const fs = require('fs');
const url = require('url');
const http = require('http');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, `utf-8`);
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const path = req.url;
  if (path === '/' || path === '/overview') {
    res.end('overview');
  } else if (path === '/product') {
    res.end('product');
  } else if (path === '/api') {
    res.writeHead(200, {
      'content-type': 'application/json'
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      'content-type': 'text/html'
    });
    res.end('<h1>page not found!</h1>');
  }
});

server.listen('8000', '127.0.0.1', () => {
  console.log('server started on port 8000!');
});
