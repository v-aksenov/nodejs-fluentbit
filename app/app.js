const http = require('http');
const transport = require('winston-tcp')
const winston = require('winston')

let logger = winston.createLogger({
  transports: [
    new(transport)({
      host: 'fluent-bit',
      port: 5170,
      json: true,
      timestamp: true
    }),
    new winston.transports.Console()
  ]
})

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  const test = {a: 1, b: "222"};
  console.log(`send to log`);
  logger.info(test)
});

server.listen(port, hostname, () => {
  const test = {a: 1, b: "222"};
  console.log(`send to log`);
  logger.info(test)
});