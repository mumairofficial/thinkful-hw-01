const hello = (data, callback) => {
  callback(200, {
    name: 'hello'
  })
}

// greeting handler/controller which expects name in request body

const greetings = ({payload}, callback) => {
  const name = JSON.parse(payload).name || 'John Doe'

  typeof name === 'string'
    ? callback(200, {name: 'Greeting ' + name})
    : callback(400, {message: 'name is missing in post body'})
}

const notFound = (data, callback) => callback(404);


/**
 * Final handlers registry to export out for router and server
 */

module.exports = {
  hello, notFound, greetings
}
