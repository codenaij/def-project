const baseUrl =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:3000'
    : 'https://def-project-a9d9-1bc52q7ri-codenaij.vercel.app'
// : 'https://def-project.herokuapp.com'

module.exports = baseUrl
