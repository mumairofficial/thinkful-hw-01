const staging = require('./env.staging');
const production = require('./env.prod');

const env = {
  production, staging
}

const userProvidedEnvironment = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV.toLowerCase() : '';

const targetEnv = typeof env[userProvidedEnvironment] === 'object' ? env[userProvidedEnvironment] : env.staging;

module.exports = targetEnv
