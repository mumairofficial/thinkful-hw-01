const fs = require('fs');

const httpsServerConfig = () => ({
  key: fs.readFileSync('../https/key.pem'),
  cert: fs.readFileSync('../https/cert.pem')
})

const logMessage = (message) => console.log(message);

module.exports = {
  httpsServerConfig: httpsServerConfig(),
  logMessage
}
