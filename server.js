const http = require('http');
const https = require('https');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

const env = require('./env');
const httpsServerConfig = require('./utils').httpsServerConfig;
const logMessage = require('./utils').logMessage;

const handlers = require('./app/handlers');
const routes = require('./app/routes');

const serverHttp = http.createServer((req, res) => {
  serverLogic(req, res);
});
const serverHttps = https.createServer(httpsServerConfig, (req, res) => {
  serverLogic(req, res);
});

function serverLogic(req, res) {
  const decoder = new StringDecoder('utf-8');

  const parsedUrl = url.parse(req.url, true);
  const trimmedPath = parsedUrl.pathname.replace(/^\/+|\/+$/g, '');

  const handlerData = {
    parsedUrl: trimmedPath,
    method: req.method,
    payload: null
  };

  let buffer = '';

  req.on('data', data => {
    buffer += decoder.write(data);
  });

  req.on('end', () => {
    buffer += decoder.end();

    const requiredHandler =
      typeof handlers[trimmedPath] !== 'undefined'
        ? handlers[trimmedPath]
        : handlers.notFound;

    handlerData.payload = buffer;

    requiredHandler(handlerData, (statusCode = 200, data = {}) => {
      res.setHeader('Content-Type', 'application/json');
      res.writeHead(statusCode);
      res.end(JSON.stringify(data));
      logMessage('Request [' + trimmedPath + '], response: ' + JSON.stringify(data));
    });
  });

}

const initiateServer = () => {
  serverHttp.listen(env.port.http, () => {
    logMessage('Http  Server Listening on PORT: ' + env.port.http);
  });
  serverHttps.listen(env.port.https, () => {
    logMessage('Https Server Listening on PORT: ' + env.port.https);
  });
};

module.exports = initiateServer;
