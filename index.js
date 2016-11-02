var http = require('http');

http.createServer((request, response) => {
  response.end('GitLapse test fixture, second');
}).listen(8080);
