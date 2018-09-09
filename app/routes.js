const handlers = require('./handlers');

// Routes registration

module.exports = {
  'hello': handlers.hello,
  'greetings': handlers.greetings
}
