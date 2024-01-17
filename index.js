const http = require('node:http')
const user = { firstName: 'Talut', lastName: 'Salako' }
const server = http.createServer()
const port = 8900
server.on('request', (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200
    res.writeHead(200, { 'Content-type': 'text/html' })
    res.end(`My name is ${user.firstName} ${user.lastName}`)
  } else {
    res.statusCode = 404
    res.end('Error: Invalid route.')
  }
})

server.listen(port, () => {
  console.log(`server sucessfully started on port: ${port}`)
})
