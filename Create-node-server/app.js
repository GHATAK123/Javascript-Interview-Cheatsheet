const http = require('http');

let requestListener = (request, response) => {
  
  response.write('Hello World!\n');
  response.end();
};

const server = http.createServer(requestListener);

server.listen(3000);
