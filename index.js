var http = require('http');

http.createServer((request, response) => {
  response.end('GitLapse test fixture, first');
}).listen(8080);
