const baseUrl =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:3000'
    : 'Put API HERE'

module.exports = baseUrl
