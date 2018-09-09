/**
 * Application entry point
 * Server logic is in server.js
 */


const initiateServer = require('./server');

// Server api to start listeners for both HTTP & HTTPS
initiateServer();
