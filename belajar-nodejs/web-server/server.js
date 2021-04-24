const http = require('http');

const port = 5000;
const host = 'localhost';

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('X-Powered-By', 'NodeJS');

    response.statusCode = 200;

    const { method, url } = request;

    if(url === '/') {
        if(method === 'GET') {
            response.statusCode = 200;
            response.end(JSON.stringify({ 
                message: 'ini adalah halaman homepage'
            }))
        }
        else {
            response.statusCode = 400;
            response.end(JSON.stringify({ 
                message: 'halaman tidak dapat diakses dengan ${method} request'
            }));
        }
    }
    else if(url === '/about') {
        if(method === 'GET') {
            response.statusCode = 200;
            response.end(JSON.stringify({ 
                message: 'ini adalah halaman about'
            }))
        }
        else if(method === 'POST') {
            let body = [];

            request.on('data', (chunk) => {
                body.push(chunk);
            });

            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.statusCode = 200;
                response.end(JSON.stringify({
                    message: `Hai ${name} ini adalah halaman about`
                }));
            });
        }
        else {
            response.statusCode = 400;
            response.end(`<h1>halaman tidak dapat diakses dengan ${method} request</h1>`);
        }
    }
    else {
        response.statusCode = 404;
        response.end(JSON.stringify({ 
            message: 'halaman tidak ditemukan'
        }));
    }


    // if(method === 'GET') {

    // }

    // if(method === 'POST') {
    //     let body = [];

    //     request.on('data', (chunk) => {
    //         body.push(chunk);
    //     });

    //     request.on('end', () => {
    //         body = Buffer.concat(body).toString();
    //         const { name } = JSON.parse(body);
    //         response.end(`<h1>Hai ${name}</h1>`);
    //     });
    // }

    // if(method === 'PUT') {
    //     response.end('<h1>ini method PUT</h1>');
    // }

    // if(method === 'DELETE') {
    //     response.end('<h1>ini method DELETE</h1>');
    // }
}

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});