const yo = require('yo-yo')

module.exports = function Hello (name) {
  return yo`<h1>Hello, ${name}!</h1>`
}
