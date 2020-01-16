const fs = require('fs');
const url = require('url');
const http = require('http');
const replaceFunc = require('./modules/replaceFunc');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, `utf-8`);
const dataObj = JSON.parse(data);

const card = fs.readFileSync(`${__dirname}/templates/card.html`, 'utf-8');
const overview = fs.readFileSync(
    `${__dirname}/templates/overview.html`,
    'utf-8'
);
const product = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8');

const server = http.createServer((req, res) => {
    const path = req.url;
    let { pathname, query } = url.parse(req.url);
    if (query) {
        query = parseInt(query.slice(3, 4), 10);
    }

    if (pathname === '/' || pathname === '/overview') {
        const cards = dataObj
            .map((cur, index) => {
                return replaceFunc(cur, card);
            })
            .join('');

        const html = overview.replace('{%cards%}', cards);
        res.writeHead(200, {
            'content-type': 'text/html'
        });
        res.end(html);
    } else if (pathname === '/product') {
        const productHtml = replaceFunc(dataObj[query], product);
        res.writeHead(200, {
            'content-type': 'text/html'
        });
        res.end(productHtml);
    } else if (pathname === '/api') {
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
