const hello = (data, callback) => {
  callback(200, {
    name: 'hello'
  })
}

const greetings = ({payload}, callback) => {

  const name = JSON.parse(payload).name || 'John Doe'

  typeof name === 'string'
    ? callback(200, {name: 'Greeting ' + name})
    : callback(400, {message: 'name is missing in post body'})
}

const notFound = (data, callback) => callback(404);

module.exports = {
  hello, notFound, greetings
}
