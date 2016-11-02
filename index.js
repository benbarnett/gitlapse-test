var http = require('http');

http.createServer((request, response) => {
  response.end('GitLapse test fixture, third');
}).listen(8080);
