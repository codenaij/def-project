const baseUrl =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:3000'
    : 'https://def-project.herokuapp.com'

module.exports = baseUrl
