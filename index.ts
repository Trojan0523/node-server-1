import * as http from 'http';
import {IncomingMessage, ServerResponse} from 'http';

const server = http.createServer();

server.on('request', (request: IncomingMessage, response: ServerResponse) => {
  // console.log(response.constructor);
  // console.log(request.url);
  // console.log(request.httpVersion);
  // console.log(response.statusCode);
  console.log('request.method');
  console.log(request.method);
  console.log('request.url');
  console.log(request.url);
  console.log('request.headers');
  console.log(request.headers);
  response.end('hi');
});
server.listen(8888);


