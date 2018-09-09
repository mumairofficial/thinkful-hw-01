const staging = require('./env.staging');
const production = require('./env.prod');

const env = {
  production, staging
}

// Grabbing user provided environment from NODE_ENV

const userProvidedEnvironment = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Passing out requested environment or default staging

const targetEnv = typeof env[userProvidedEnvironment] === 'object' ? env[userProvidedEnvironment] : env.staging;

module.exports = targetEnv
